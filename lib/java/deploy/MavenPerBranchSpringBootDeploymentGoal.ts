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

import {
    HandlerContext,
    LocalProject,
    logger,
    poisonAndWait,
    Success,
} from "@atomist/automation-client";
import {
    CommandHandlerRegistration,
    DelimitedWriteProgressLogDecorator,
    ExecuteGoal,
    GoalInvocation,
} from "@atomist/sdm";
import { SpawnedDeployment } from "@atomist/sdm-core";
import { ChildProcess } from "child_process";
import * as spawn from "cross-spawn";
import * as os from "os";
import * as portfinder from "portfinder";
import { MavenLogInterpreter } from "../../maven/build/mavenLogInterpreter";
import { determineMavenCommand } from "../../maven/mavenCommand";
import { SpringBootSuccessPatterns } from "../../spring/deploy/springLoggingPatterns";

export const ListBranchDeploys: CommandHandlerRegistration = {
    name: "listLocalDeploys",
    intent: "list branch deploys",
    description: "List local deployments of repository across all branches",
    listener: async ci => handleListDeploys(ci.context),
};

function deploymentToString(deploymentKey: string) {
    const deployment = deploymentEndpoints[deploymentKey];
    const abbreviatedSha = deployment.sha.slice(0, 7);
    const deploymentEndpoint = deployment.endpoint;
    return `${deploymentKey} deployed ${abbreviatedSha} at ${deploymentEndpoint}`;
}

async function handleListDeploys(ctx: HandlerContext) {
    const message = `${Object.keys(deploymentEndpoints).length} branches currently deployed on ${os.hostname()}:\n${
        Object.keys(deploymentEndpoints).map(deploymentToString).join("\n")}`;
    await ctx.messageClient.respond(message);
    return Success;
}

/**
 * Allow customization of Maven deployment
 */
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

    /**
     * The maximum number of concurrent deployments we allow. This is a valuable
     * safeguard as too many can crash the machine.
     */
    maxConcurrentDeployments: number;

}

const deploymentEndpoints: { [key: string]: { sha: string, endpoint: string } } = {};

/**
 * Use Maven per-branch deploy
 * @param opts options
 */
export function executeMavenPerBranchSpringBootDeploy(opts: Partial<MavenDeployerOptions>): ExecuteGoal {
    const optsToUse: MavenDeployerOptions = {
        lowerPort: 9090,
        successPatterns: SpringBootSuccessPatterns,
        commandLineArgumentsFor: springBootMavenArgs,
        baseUrl: "http://127.0.0.1",
        maxConcurrentDeployments: 5,
        ...opts,
    };
    const deployer = new MavenDeployer(optsToUse);

    return async goalInvocation => {
        const { credentials, id } = goalInvocation;
        try {
            const deployment = await goalInvocation.configuration.sdm.projectLoader.doWithProject({
                    credentials,
                    id,
                    readOnly: true,
                },
                project => deployer.deployProject(goalInvocation, project));
            const deploymentKey = `${id.owner}/${id.repo}/${goalInvocation.sdmGoal.branch}`;
            deploymentEndpoints[deploymentKey] = { sha: goalInvocation.sdmGoal.sha, endpoint: deployment.endpoint };
            return { code: 0, externalUrls: [{ label: "Endpoint", url: deployment.endpoint }] };
        } catch (err) {
            return { code: 1, message: err.stack };
        }
    };
}

/**
 * Holds state relating to existing deployments
 */
class MavenDeployer {

    // Already allocated ports
    public readonly repoBranchToPort: { [repoAndBranch: string]: number } = {};

    // Keys are ports: values are child processes
    private readonly portToChildProcess: { [port: number]: ChildProcess } = {};

    constructor(private readonly options: MavenDeployerOptions) {
    }

    public async deployProject(goalInvocation: GoalInvocation,
                               project: LocalProject): Promise<SpawnedDeployment> {
        const branch = goalInvocation.sdmGoal.branch;
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
            // Check we won't end with a crazy number of child processes
            const presentCount = Object.keys(this.portToChildProcess)
                .filter(n => typeof n === "number")
                .length;
            if (presentCount >= this.options.maxConcurrentDeployments) {
                throw new Error(`Unable to deploy project at ${project.id} as limit of ${this.options.maxConcurrentDeployments} has been reached`);
            }
        }

        const mvn = await determineMavenCommand(project);
        const childProcess = spawn(mvn,
            [
                "spring-boot:run",
            ].concat(this.options.commandLineArgumentsFor(port, contextRoot)),
            {
                cwd: project.baseDir,
            });
        if (!childProcess.pid) {
            throw new Error("Fatal error deploying using Maven--is `mvn` on your automation node path?\n" +
                `Attempted to execute '${mvn} spring-boot:run' in ${project.baseDir}`);
        }
        const deployment = {
            childProcess,
            endpoint: `${this.options.baseUrl}:${port}${contextRoot}`,
        };

        this.portToChildProcess[port] = childProcess;

        const newLineDelimitedLog = new DelimitedWriteProgressLogDecorator(goalInvocation.progressLog, "\n");
        childProcess.stdout.on("data", what => newLineDelimitedLog.write(what.toString()));
        childProcess.stderr.on("data", what => newLineDelimitedLog.write(what.toString()));
        let stdout = "";
        let stderr = "";

        return new Promise<SpawnedDeployment>((resolve, reject) => {
            childProcess.stdout.addListener("data", what => {
                if (!!what) {
                    stdout += what.toString();
                }
                if (this.options.successPatterns.some(successPattern => successPattern.test(stdout))) {
                    resolve(deployment);
                }
            });
            childProcess.stderr.addListener("data", what => {
                if (!!what) {
                    stderr += what.toString();
                }
            });
            childProcess.addListener("exit", async () => {
                if (this.options.successPatterns.some(successPattern => successPattern.test(stdout))) {
                    resolve(deployment);
                } else {
                    await reportFailureToUser(goalInvocation, stdout);
                    logger.error("Maven deployment failure vvvvvvvvvvvvvvvvvvvvvv");
                    logger.error("stdout:\n%s\nstderr:\n%s\n^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^", stdout, stderr);
                    reject(new Error("Maven deployment failure"));
                }
            });
            childProcess.addListener("error", reject);
        });
    }
}

async function reportFailureToUser(gi: GoalInvocation, log: string) {
    const interpretation = MavenLogInterpreter(log);
    if (!!interpretation) {
        await gi.addressChannels(`✘ Maven deployment failure for ${gi.id.url}/${gi.sdmGoal.branch}`);
        if (!!interpretation.relevantPart) {
            await (gi.addressChannels(`\`\`\`\n${interpretation.relevantPart}\n\`\`\``));
        } else {
            await (gi.addressChannels("See SDM log for full Maven output"));
        }
    }
}

function springBootMavenArgs(port: number, contextRoot: string): string[] {
    return [
        "-Dspring-boot.run.arguments=--server.port=" + port + ",--server.contextPath=" + contextRoot +
        ",--server.servlet.contextPath=" + contextRoot,
        "-Drun.arguments=--server.port=" + port + ",--server.contextPath=" + contextRoot +
        ",--server.servlet.contextPath=" + contextRoot,
    ];
}
