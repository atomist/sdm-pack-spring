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
    AnyPush,
    ExtensionPack,
    LocalDeploymentGoal,
    SoftwareDeliveryMachine,
    whenPushSatisfies,
} from "@atomist/sdm";
import {
    ManagedDeploymentTargeter,
    tagRepo,
} from "@atomist/sdm-core";
import { executeDeploy } from "@atomist/sdm/api-helper/goal/executeDeploy";
import { executeUndeploy } from "@atomist/sdm/api-helper/goal/executeUndeploy";
import { metadata } from "@atomist/sdm/api-helper/misc/extensionPack";
import {
    LocalEndpointGoal,
    LocalUndeploymentGoal,
} from "@atomist/sdm/pack/well-known-goals/commonGoals";
import {
    executeMavenPerBranchSpringBootDeploy,
    MavenDeployerOptions,
    MavenPerBranchSpringBootDeploymentGoal,
} from "./java/deploy/MavenPerBranchSpringBootDeploymentGoal";
import { ListLocalDeploys } from "./maven/deploy/listLocalDeploys";
import { IsMaven } from "./maven/pushTests";
import { mavenSourceDeployer } from "./spring/deploy/localSpringBootDeployers";
import { HasSpringBootApplicationClass } from "./spring/pushTests";
import { springBootTagger } from "./spring/springTagger";
import { TryToUpgradeSpringBootVersion } from "./spring/transform/tryToUpgradeSpringBootVersion";

export const SpringSupport: ExtensionPack = {
    ...metadata(),
    configure: sdm => {
        sdm
            .addCodeTransformCommand(TryToUpgradeSpringBootVersion)
            .addFirstPushListener(
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
    const deployToLocal = {
        deployer: mavenSourceDeployer(sdm.configuration.sdm.projectLoader),
        targeter: ManagedDeploymentTargeter,
        deployGoal: LocalDeploymentGoal,
        endpointGoal: LocalEndpointGoal,
        undeployGoal: LocalUndeploymentGoal,
    };
    sdm.addGoalImplementation("Local deployer",
        deployToLocal.deployGoal,
        executeDeploy(
            sdm.configuration.sdm.artifactStore,
            sdm.configuration.sdm.repoRefResolver,
            deployToLocal.endpointGoal, deployToLocal),
        {
            pushTest: IsMaven,
            logInterpreter: deployToLocal.deployer.logInterpreter,
        },
    );
    sdm.addGoalSideEffect(
        deployToLocal.endpointGoal,
        deployToLocal.deployGoal.definition.displayName,
        AnyPush);
    sdm.addGoalImplementation("Local undeployer",
        deployToLocal.undeployGoal,
        executeUndeploy(deployToLocal),
        {
            pushTest: IsMaven,
            logInterpreter: deployToLocal.deployer.logInterpreter,
        },
    );
    sdm.addCommand(ListLocalDeploys);
}
