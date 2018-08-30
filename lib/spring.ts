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

import { ExtensionPack, SoftwareDeliveryMachine, whenPushSatisfies } from "@atomist/sdm";
import { tagRepo } from "@atomist/sdm-core";
import { metadata } from "@atomist/sdm/api-helper/misc/extensionPack";
import {
    executeMavenPerBranchSpringBootDeploy,
    MavenDeployerOptions,
    MavenPerBranchSpringBootDeploymentGoal,
} from "./java/deploy/MavenPerBranchSpringBootDeploymentGoal";
import { HasSpringBootApplicationClass } from "./spring/pushTests";
import { springBootTagger } from "./spring/springTagger";
import { TryToUpgradeSpringBootVersion } from "./spring/transform/tryToUpgradeSpringBootVersion";

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

/*
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
*/
