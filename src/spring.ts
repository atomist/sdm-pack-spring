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

import { GitHubRepoRef } from "@atomist/automation-client/operations/common/GitHubRepoRef";
import { ExtensionPack, LocalDeploymentGoal } from "@atomist/sdm";
import * as deploy from "@atomist/sdm/dsl/deployDsl";
import { LocalEndpointGoal, LocalUndeploymentGoal } from "@atomist/sdm/goal/common/commonGoals";
import { listLocalDeploys } from "@atomist/sdm/handlers/commands/listLocalDeploys";
import { ManagedDeploymentTargeter } from "@atomist/sdm/internal/delivery/deploy/local/ManagedDeployments";
import { IsMaven } from "@atomist/sdm/mapping/pushtest/jvm/jvmPushTests";
import { tagRepo } from "@atomist/sdm/util/github/tagRepo";
import { springBootTagger } from "@atomist/spring-automation/commands/tag/springTagger";
import { mavenSourceDeployer } from "../../deploy/localSpringBootDeployers";
import { CommonJavaGeneratorConfig } from "../../machines/generatorConfig";
import { TryToUpgradeSpringBootVersion } from "./editors/tryToUpgradeSpringBootVersion";
import { springBootGenerator } from "./generators/springBootGenerator";

export const SpringSupport: ExtensionPack = {
    name: "Spring support",
    vendor: "Atomist",
    version: "0.1.0",
    configure: sdm => {
        sdm
            .addDeployRules(
                deploy.when(IsMaven)
                    .itMeans("Maven local deploy")
                    .deployTo(LocalDeploymentGoal, LocalEndpointGoal, LocalUndeploymentGoal)
                    .using(
                        {
                            deployer: mavenSourceDeployer(sdm.configuration.sdm.projectLoader),
                            targeter: ManagedDeploymentTargeter,
                        },
                ))
            .addSupportingCommands(listLocalDeploys)
            .addEditors(
                TryToUpgradeSpringBootVersion,
        )
            .addGenerators(springBootGenerator({
                ...CommonJavaGeneratorConfig,
                seed: new GitHubRepoRef("spring-team", "spring-rest-seed"),
            }, {
                    intent: "create spring",
                }))
            .addGenerators(springBootGenerator({
                ...CommonJavaGeneratorConfig,
                seed: new GitHubRepoRef("johnsonr", "flux-flix-service"),
            }, {
                    intent: "create spring kotlin",
                }))
            .addNewRepoWithCodeActions(
                tagRepo(springBootTagger),
        );
    },
};
