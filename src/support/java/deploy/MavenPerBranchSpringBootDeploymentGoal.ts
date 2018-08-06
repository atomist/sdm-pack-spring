/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { logger } from "@atomist/automation-client";
import { LocalProject } from "@atomist/automation-client/project/local/LocalProject";
import { ExecuteGoal, GenericGoal } from "@atomist/sdm";
import { SpawnedDeployment } from "@atomist/sdm-core";
import { DelimitedWriteProgressLogDecorator } from "@atomist/sdm/api-helper/log/DelimitedWriteProgressLogDecorator";
import { LoggingProgressLog } from "@atomist/sdm/api-helper/log/LoggingProgressLog";
import { poisonAndWait } from "@atomist/sdm/api-helper/misc/spawned";
import { ProgressLog } from "@atomist/sdm/spi/log/ProgressLog";
import { ProjectLoader } from "@atomist/sdm/spi/project/ProjectLoader";
import { ChildProcess, spawn } from "child_process";
import * as os from "os";

import * as portfinder from "portfinder";

/**
 * Goal to deploy to Maven with one process per branch
 * @type {GenericGoal}
 */
export const MavenPerBranchSpringBootDeploymentGoal = new GenericGoal(
    { uniqueName: "mavenDeploy" },
    "Deploy each branch locally using Maven");

export interface MavenDeployerOptions {

    lowerPort: number;

    baseUrl: string;

    /**
     * Pattern to find in output to indicate that the server has come up successfully.
     * For example, matching something like "Started SpringRestSeedApplication in 3.931 seconds"
     */
    successPatterns: RegExp[];

    /**
     * Command line arguments for the startup process
     */
    commandLineArgumentsFor: (port: number, contextRoot: string) => string[];

}

/**
 * Successs patterns when Spring Boot starts on Tomcat
 * @type {RegExp}
 */
const SpringBootSuccessPatterns = [
    /Tomcat started on port/,
    /Started [A-Za-z0-9_$]+ in [0-9]+.[0-9]+ seconds/,
];

/**
 * Use Maven per-branch deploy
 * @param projectLoader use to load projects
 * @param opts options
 */
export function executeMavenPerBranchSpringBootDeploy(projectLoader: ProjectLoader,
                                                      opts: Partial<MavenDeployerOptions>): ExecuteGoal {
    const optsToUse: MavenDeployerOptions = {
        ...opts,
        lowerPort: 9090,
        successPatterns: SpringBootSuccessPatterns,
        commandLineArgumentsFor: springBootMavenArgs,
        baseUrl: os.hostname(),
    };
    const deployer = new MavenDeployer(optsToUse);

    return async goalInvocation => {
        const { credentials, id } = goalInvocation;
        try {
            const deployment = await projectLoader.doWithProject({ credentials, id, readOnly: true },
                project => deployer.deployProject(new LoggingProgressLog("info"), project, goalInvocation.sdmGoal.branch));
            await goalInvocation.addressChannels(`Deployed \`${id.owner}/${id.repo}/${goalInvocation.sdmGoal.branch} [${
                goalInvocation.sdmGoal.sha}]\` at ${deployment.endpoint}`);
            return { code: 0 };
        } catch (err) {
            return { code: 1, message: err.stack };
        }
    };
}

/**
 * Holds state
 */
class MavenDeployer {

    // Already allocated ports
    private repoBranchToPort: { [repoAndBranch: string]: number } = {};

    // Keys are ports: values are child processes
    private portToChildProcess: { [port: number]: ChildProcess } = {};

    constructor(private readonly options: MavenDeployerOptions) {
    }

    public async deployProject(
        log: ProgressLog,
        project: LocalProject,
        branch: string): Promise<SpawnedDeployment> {
        const contextRoot = `/${project.id.owner}/${project.id.repo}/${branch}`;

        let port = this.repoBranchToPort[project.id.repo + ":" + branch];
        if (!port) {
            logger.info("Looking for unused port for branch '%s' of %s:%s...", branch, project.id.owner, project.id.repo);
            port = await portfinder.getPortPromise({ /*host: this.options.baseUrl,*/ port: this.options.lowerPort });
            this.repoBranchToPort[project.id.repo + ":" + branch] = port;
            logger.info("Reserving port %d for branch '%s' of %s:%s", port, branch, project.id.owner, project.id.repo);
        }
        const existingChildProcess = this.portToChildProcess[port];
        if (!!existingChildProcess) {
            logger.info("Killing existing process for branch '%s' of %s:%s with pid %s", branch,
                project.id.owner, project.id.repo, existingChildProcess.pid);
            await poisonAndWait(existingChildProcess);
        } else {
            logger.info("No existing process for branch '%s' of %s:%s", branch, project.id.owner, project.id.repo);
        }

        const childProcess = spawn("mvn",
            [
                "spring-boot:run",
            ].concat(this.options.commandLineArgumentsFor(port, contextRoot)),
            {
                cwd: project.baseDir,
            });
        if (!childProcess.pid) {
            throw new Error("Fatal error deploying using Maven--is `mvn` on your automation node path?\n" +
                "Attempted to execute `mvn: spring-boot:run`");
        }
        const deployment = {
            childProcess,
            endpoint: `${this.options.baseUrl}:${port}/${contextRoot}`,
        };

        this.portToChildProcess[port] = childProcess;

        const newLineDelimitedLog = new DelimitedWriteProgressLogDecorator(log, "\n");
        childProcess.stdout.on("data", what => newLineDelimitedLog.write(what.toString()));
        childProcess.stderr.on("data", what => newLineDelimitedLog.write(what.toString()));
        return new Promise<SpawnedDeployment>((resolve, reject) => {
            let stdout = "";
            childProcess.stdout.addListener("data", what => {
                if (!!what) {
                    stdout += what;
                }
                if (this.options.successPatterns.some(successPattern => successPattern.test(stdout))) {
                    resolve(deployment);
                }
            });
            childProcess.addListener("exit", () => {
                reject(new Error("We should have found success message pattern by now!!"));
            });
            childProcess.addListener("error", reject);
        });
    }
}

function springBootMavenArgs(port: number, contextRoot: string): string[] {
    return [
        `-Dserver.port=${port}`,
        `-Dserver.contextPath=${contextRoot}`,
    ];
}
