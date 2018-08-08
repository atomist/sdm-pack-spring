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
    Success,
} from "@atomist/automation-client";
import { CommandHandlerRegistration } from "@atomist/sdm";
import {
    DeployedApp,
    ManagedDeployments,
} from "@atomist/sdm-core";
import { managedExecutableJarDeployments } from "../../java/deploy/executableJarDeployer";
import { managedMavenDeployments } from "./mavenDeployer";

/**
 * Command handler that can list local deploys
 * @return {HandleCommand<EmptyParameters>}
 */
export const ListLocalDeploys: CommandHandlerRegistration = {
    name: "listLocalDeploys",
    intent: "list local deploys",
    description: "list local deploys",
    listener: async ci => handleListDeploys(ci.context),
};

async function handleListDeploys(ctx: HandlerContext) {
    await handleListDeploysWith("Maven source deployer", managedMavenDeployments, ctx);
    await handleListDeploysWith("Executable JAR deployer", managedExecutableJarDeployments, ctx);
    return Success;
}

async function handleListDeploysWith(description: string, managedDeployments: ManagedDeployments, ctx: HandlerContext) {
    const message = `*${description}* managing ${managedDeployments.deployments.length} deployments:\n${
        managedDeployments.deployments.map(deployedAppToString).join("\n")}`;
    await ctx.messageClient.respond(message);
}

function deployedAppToString(da: DeployedApp) {
    return `${da.id.owner}:${da.id.repo}:${da.id.branch}@${da.id.sha} - ${da.deployment.endpoint};port=${da.port};` +
        `pid=${!!da.childProcess ? da.childProcess.pid : "<not running>"}`;
}
