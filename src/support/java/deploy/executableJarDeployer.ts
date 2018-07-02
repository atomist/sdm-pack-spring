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
import { ProjectOperationCredentials } from "@atomist/automation-client/operations/common/ProjectOperationCredentials";
import { RemoteRepoRef } from "@atomist/automation-client/operations/common/RepoId";
import {
    DefaultLocalDeployerOptions,
    LocalDeployerOptions,
    SpawnedDeployment,
    StartupInfo,
} from "@atomist/sdm-core";
import {
    LookupStrategy,
    ManagedDeployments,
    ManagedDeploymentTargetInfo,
} from "@atomist/sdm-core";
import { DelimitedWriteProgressLogDecorator } from "@atomist/sdm/api-helper/log/DelimitedWriteProgressLogDecorator";
import { lastLinesLogInterpreter } from "@atomist/sdm/api-helper/log/logInterpreters";
import { DeployableArtifact } from "@atomist/sdm/spi/artifact/ArtifactStore";
import { Deployer } from "@atomist/sdm/spi/deploy/Deployer";
import { Deployment } from "@atomist/sdm/spi/deploy/Deployment";
import { ProgressLog } from "@atomist/sdm/spi/log/ProgressLog";
import { spawn } from "child_process";

// TODO: should local deployment be its own pack? we could pull it out of sdm then

/**
 * Managed deployments
 */
export let managedExecutableJarDeployments: ManagedDeployments;

/**
 * Start up an executable Jar on the same node as the automation client.
 * Not intended as a Paas, but for use during demos and development.
 * Always uses the same URL, whatever the branch and sha.
 * @param opts options
 */
export function executableJarDeployer(opts: LocalDeployerOptions): Deployer<ManagedDeploymentTargetInfo> {
    if (!managedExecutableJarDeployments) {
        logger.debug("Created new deployments record");
        managedExecutableJarDeployments = new ManagedDeployments(opts.lowerPort);
    }
    return new ExecutableJarDeployer({
        ...DefaultLocalDeployerOptions,
        ...opts,
    });
}

class ExecutableJarDeployer implements Deployer<ManagedDeploymentTargetInfo, Deployment> {

    public logInterpreter = lastLinesLogInterpreter("Executable jar deployment");

    constructor(public opts: LocalDeployerOptions) {
    }

    public async findDeployments(id: RemoteRepoRef,
                                 ti: ManagedDeploymentTargetInfo,
                                 creds: ProjectOperationCredentials) {
        const thisDeployment = this.deploymentFor(ti);
        return thisDeployment ? [thisDeployment] : [];
    }

    public async undeploy(id: ManagedDeploymentTargetInfo, deployment: Deployment, log: ProgressLog): Promise<any> {
        return managedExecutableJarDeployments.terminateIfRunning(id.managedDeploymentKey, LookupStrategy.service);
    }

    public async deploy(da: DeployableArtifact,
                        ti: ManagedDeploymentTargetInfo,
                        log: ProgressLog,
                        credentials: ProjectOperationCredentials,
                        atomistTeam: string): Promise<SpawnedDeployment[]> {
        if (!da.filename) {
            throw new Error("No filename in deployable artifact!");
        }
        const port = await managedExecutableJarDeployments.findPort(ti.managedDeploymentKey, LookupStrategy.service, this.opts.baseUrl);
        logger.info("Deploying app [%j] on port [%d] for team %s", da, port, atomistTeam);
        const startupInfo: StartupInfo = {
            port,
            atomistTeam,
            contextRoot: this.contextRoot(da.id),
        };
        await managedExecutableJarDeployments.terminateIfRunning(ti.managedDeploymentKey, LookupStrategy.service);
        const childProcess = spawn("java",
            [
                "-jar",
                da.filename,
            ].concat(this.opts.commandLineArgumentsFor(startupInfo)),
            {
                cwd: da.cwd,
            });
        const newLineDelimitedLog = new DelimitedWriteProgressLogDecorator(log, "\n");
        childProcess.stdout.on("data", what => newLineDelimitedLog.write(what.toString()));
        childProcess.stderr.on("data", what => newLineDelimitedLog.write(what.toString()));

        const deployment = {
            childProcess,
            endpoint: `${this.opts.baseUrl}:${port}/${this.contextRoot(ti.managedDeploymentKey)}`,
        };
        managedExecutableJarDeployments.recordDeployment({
            id: ti.managedDeploymentKey,
            port,
            childProcess,
            deployment,
            lookupStrategy: LookupStrategy.service,
        });

        return [await new Promise<SpawnedDeployment>((resolve, reject) => {
            childProcess.stdout.addListener("data", async what => {
                if (!!what && this.opts.successPatterns.some(successPattern => successPattern.test(what.toString()))) {
                    resolve(deployment);
                }
            });
            childProcess.addListener("exit", () => {
                reject(new Error("ExecutableJarDeployer: We should have found success message pattern by now!!"));
            });
            childProcess.addListener("error", reject);
        })];
    }

    private contextRoot(id: RemoteRepoRef) {
        return `/${id.owner}/${id.repo}/staging`;
    }

    private deploymentFor(ti: ManagedDeploymentTargetInfo): Deployment {
        const managed = managedExecutableJarDeployments.findDeployment(ti.managedDeploymentKey, LookupStrategy.service);
        if (!managed) {
            return undefined;
        }
        const port = managed.port;
        const baseUrl = this.opts.baseUrl;
        return {
            endpoint: `${baseUrl}:${port}/${this.contextRoot(ti.managedDeploymentKey)}`,
        };
    }

}
