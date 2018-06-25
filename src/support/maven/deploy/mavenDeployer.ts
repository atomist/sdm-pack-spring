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
    logger,
    Success,
} from "@atomist/automation-client";
import { ProjectOperationCredentials } from "@atomist/automation-client/operations/common/ProjectOperationCredentials";
import { RemoteRepoRef } from "@atomist/automation-client/operations/common/RepoId";
import { LocalProject } from "@atomist/automation-client/project/local/LocalProject";
import {
    DefaultLocalDeployerOptions,
    LocalDeployerOptions,
    SpawnedDeployment,
} from "@atomist/sdm-core";
import {
    LookupStrategy,
    ManagedDeployments,
    ManagedDeploymentTargetInfo,
} from "@atomist/sdm-core";
import { DelimitedWriteProgressLogDecorator } from "@atomist/sdm/api-helper/log/DelimitedWriteProgressLogDecorator";
import { ExecuteGoalResult } from "@atomist/sdm/api/goal/ExecuteGoalResult";
import { DeployableArtifact } from "@atomist/sdm/spi/artifact/ArtifactStore";
import { Deployer } from "@atomist/sdm/spi/deploy/Deployer";
import { Deployment } from "@atomist/sdm/spi/deploy/Deployment";
import {
    InterpretedLog,
    InterpretLog,
} from "@atomist/sdm/spi/log/InterpretedLog";
import { ProgressLog } from "@atomist/sdm/spi/log/ProgressLog";
import { ProjectLoader } from "@atomist/sdm/spi/project/ProjectLoader";
import { spawn } from "child_process";

// moved from sample-sdm

/**
 * Managed deployments
 */
export let managedMavenDeployments: ManagedDeployments;

/**
 * Use Maven to deploy
 * @param projectLoader use to load projects
 * @param opts options
 */
export function mavenDeployer(projectLoader: ProjectLoader, opts: LocalDeployerOptions): Deployer<ManagedDeploymentTargetInfo> {
    if (!managedMavenDeployments) {
        logger.debug("Created new deployments record");
        managedMavenDeployments = new ManagedDeployments(opts.lowerPort);
    }
    return new MavenSourceDeployer(projectLoader, {
        ...DefaultLocalDeployerOptions,
        ...opts,
    });
}

class MavenSourceDeployer implements Deployer<ManagedDeploymentTargetInfo> {

    constructor(public projectLoader: ProjectLoader, public opts: LocalDeployerOptions) {
    }

    public async findDeployments(id: RemoteRepoRef, ti: ManagedDeploymentTargetInfo, creds: ProjectOperationCredentials): Promise<Deployment[]> {
        const deployedApp = managedMavenDeployments.findDeployment(ti.managedDeploymentKey, LookupStrategy.branch);
        if (!deployedApp) {
            return [];
        }
        return [deployedApp.deployment];
    }

    public async deploy(da: DeployableArtifact,
                        ti: ManagedDeploymentTargetInfo,
                        log: ProgressLog,
                        credentials: ProjectOperationCredentials,
                        team: string): Promise<SpawnedDeployment[]> {
        const id = da.id;
        if (!id.branch) {
            throw new Error(`Cannot locally deploy ${JSON.stringify(id)}: Branch must be set`);
        }
        const port = await managedMavenDeployments.findPort(ti.managedDeploymentKey, LookupStrategy.branch, this.opts.baseUrl);
        logger.info("MavenSourceDeployer: Deploying app [%j],branch=%s on port [%d] for team %s", id, ti.managedDeploymentKey.branch, port, team);
        await managedMavenDeployments.terminateIfRunning(ti.managedDeploymentKey, LookupStrategy.branch);
        return [await this.projectLoader.doWithProject({ credentials, id, readOnly: true },
            project => this.deployProject(ti, log, project, port, team))];

    }

    public async undeploy(ti: ManagedDeploymentTargetInfo, deployment: Deployment, log: ProgressLog): Promise<ExecuteGoalResult> {
        await managedMavenDeployments.terminateIfRunning(ti.managedDeploymentKey, LookupStrategy.branch);
        return Success;
    }

    public logInterpreter(log: string): InterpretedLog | undefined {
        return springBootRunLogInterpreter(log) || shortLogInterpreter(log);
    }

    private async deployProject(ti: ManagedDeploymentTargetInfo,
                                log: ProgressLog,
                                project: LocalProject,
                                port: number,
                                atomistTeam: string): Promise<SpawnedDeployment> {
        const branchId = ti.managedDeploymentKey;
        const startupInfo = {
            port,
            atomistTeam,
            contextRoot: `/${branchId.owner}/${branchId.repo}/${branchId.branch}`,
        };

        const childProcess = spawn("mvn",
            [
                "spring-boot:run",
            ].concat(this.opts.commandLineArgumentsFor(startupInfo)),
            {
                cwd: project.baseDir,
            });
        if (!childProcess.pid) {
            throw new Error("Fatal error deploying using Maven--is `mvn` on your automation node path?\n" +
                "Attempted to execute `mvn: spring-boot:run`");
        }
        const deployment = {
            childProcess,
            endpoint: `${this.opts.baseUrl}:${port}/${startupInfo.contextRoot}`,
        };
        managedMavenDeployments.recordDeployment({
            id: branchId,
            port,
            childProcess,
            deployment,
            lookupStrategy: LookupStrategy.branch,
        });
        const newLineDelimitedLog = new DelimitedWriteProgressLogDecorator(log, "\n");
        childProcess.stdout.on("data", what => newLineDelimitedLog.write(what.toString()));
        childProcess.stderr.on("data", what => newLineDelimitedLog.write(what.toString()));
        return new Promise<SpawnedDeployment>((resolve, reject) => {
            childProcess.stdout.addListener("data", what => {
                if (!!what && this.opts.successPatterns.some(successPattern => successPattern.test(what.toString()))) {
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

const shortLogInterpreter: InterpretLog = (log: string) => {
    if (log.length < 200) {
        return {
            relevantPart: log,
            message: "This is the whole log.",
            includeFullLog: false,
        };
    }
};

const springBootRunLogInterpreter: InterpretLog = (log: string) => {
    logger.debug("Interpreting log");

    if (!log) {
        logger.warn("log was empty");
        return undefined;
    }

    const maybeFailedToStart = appFailedToStart(log);
    if (maybeFailedToStart) {
        return {
            relevantPart: maybeFailedToStart,
            message: "Application failed to start",
            includeFullLog: false,
        };
    }

    // default to maven errors
    const maybeMavenErrors = mavenErrors(log);
    if (maybeMavenErrors) {
        logger.info("recognized maven error");
        return {
            relevantPart: maybeMavenErrors,
            message: "Maven errors",
        };
    }

    // or it could be this problem here
    if (log.match(/Error checking out artifact/)) {
        logger.info("Recognized artifact error");
        return {
            relevantPart: log,
            message: "I lost the local cache. Please rebuild",
            includeFullLog: false,
        };
    }

    logger.info("Did not find anything to recognize in the log");
};

function appFailedToStart(log: string) {
    const lines = log.split("\n");
    const failedToStartLine = lines.indexOf("APPLICATION FAILED TO START");
    if (failedToStartLine < 1) {
        return undefined;
    }
    const likelyLines = lines.slice(failedToStartLine + 3, failedToStartLine + 10);
    return likelyLines.join("\n");
}

function mavenErrors(log: string) {
    if (log.match(/^\[ERROR]/m)) {
        return log.split("\n")
            .filter(l => l.startsWith("[ERROR]"))
            .join("\n");
    }
}
