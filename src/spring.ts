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
import {
    ExtensionPack, GeneratorRegistration,
    LocalDeploymentGoal, SoftwareDeliveryMachine, whenPushSatisfies,
} from "@atomist/sdm";
import {
    LocalEndpointGoal,
    LocalUndeploymentGoal,
} from "@atomist/sdm-core";
import { ManagedDeploymentTargeter } from "@atomist/sdm-core";
import { tagRepo } from "@atomist/sdm-core";
import * as deploy from "@atomist/sdm/api-helper/dsl/deployDsl";
import { metadata } from "@atomist/sdm/api-helper/misc/extensionPack";
import {
    executeMavenPerBranchSpringBootDeploy, MavenDeployerOptions,
    MavenPerBranchSpringBootDeploymentGoal,
} from "./support/java/deploy/MavenPerBranchSpringBootDeploymentGoal";
import { CommonJavaGeneratorConfig } from "./support/java/generate/generatorConfig";
import { ListLocalDeploys } from "./support/maven/deploy/listLocalDeploys";
import { IsMaven } from "./support/maven/pushTests";
import { mavenSourceDeployer } from "./support/spring/deploy/localSpringBootDeployers";
import { springBootGenerator } from "./support/spring/generate/springBootGenerator";
import { SpringProjectCreationParameters } from "./support/spring/generate/SpringProjectCreationParameters";
import { HasSpringBootApplicationClass } from "./support/spring/pushTests";
import { springBootTagger } from "./support/spring/springTagger";
import { TryToUpgradeSpringBootVersion } from "./support/spring/transform/tryToUpgradeSpringBootVersion";

export const SpringSupport: ExtensionPack = {
    ...metadata(),
    configure: sdm => {
        sdm
            .addCodeTransformCommand(TryToUpgradeSpringBootVersion)
            .addNewRepoWithCodeListener(
                tagRepo(springBootTagger),
            );
    },
};

export function configureMavenPerBranchSpringBootDeploy(sdm: SoftwareDeliveryMachine,
                                                        options: Partial<MavenDeployerOptions> = {}) {
    sdm.addGoalContributions(whenPushSatisfies(HasSpringBootApplicationClass)
        .setGoals(MavenPerBranchSpringBootDeploymentGoal));
    sdm.addGoalImplementation("Maven deployment", MavenPerBranchSpringBootDeploymentGoal,
        executeMavenPerBranchSpringBootDeploy(sdm.configuration.sdm.projectLoader, options));
}

export function configureLocalSpringBootDeploy(sdm: SoftwareDeliveryMachine) {
    sdm.addDeployRules(
        deploy.when(IsMaven)
            .itMeans("Maven local deploy")
            .deployTo(LocalDeploymentGoal, LocalEndpointGoal, LocalUndeploymentGoal)
            .using(
                {
                    deployer: mavenSourceDeployer(sdm.configuration.sdm.projectLoader),
                    targeter: ManagedDeploymentTargeter,
                },
            ))
        .addCommand(ListLocalDeploys);
}

export const springRestGenerator: GeneratorRegistration<SpringProjectCreationParameters> =
    springBootGenerator({
        ...CommonJavaGeneratorConfig,
        seed: () => new GitHubRepoRef("spring-team", "spring-rest-seed"),
    }, {
        intent: "create spring",
    });

export const kotlinRestGenerator: GeneratorRegistration<SpringProjectCreationParameters> =
    springBootGenerator({
        ...CommonJavaGeneratorConfig,
        seed: () => new GitHubRepoRef("johnsonr", "flux-flix-service"),
    }, {
        intent: "create spring kotlin",
    });
