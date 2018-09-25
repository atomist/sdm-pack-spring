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
    AutoCodeInspection,
    Autofix,
    executeDeploy,
    executeUndeploy,
    ExtensionPack,
    LocalDeploymentGoal,
    metadata,
    ReviewListenerRegistration,
    SoftwareDeliveryMachine,
    whenPushSatisfies,
} from "@atomist/sdm";
import {
    ManagedDeploymentTargeter,
    tagRepo,
} from "@atomist/sdm-core";
import {
    CategorySortingBodyFormatter,
    singleIssueManagingReviewListener,
} from "@atomist/sdm-pack-issue";
import {
    LocalEndpointGoal,
    LocalUndeploymentGoal,
} from "@atomist/sdm/lib/pack/well-known-goals/commonGoals";
import {
    executeGradlePerBranchSpringBootDeploy,
    GradleDeployerOptions,
    GradlePerBranchSpringBootDeploymentGoal,
} from "./gradle/deploy/GradlePerBranchSpringBootDeploymentGoal";
import { IsGradle } from "./gradle/pushtest/gradlePushTests";
import {
    FileIoImportReviewer,
    ImportFileIoCategory,
} from "./java/review/fileIoImportReviewer";
import {
    ImportDotStarCategory,
    ImportDotStarReviewer,
} from "./java/review/importDotStarReviewer";
import { ListLocalDeploys } from "./maven/deploy/listLocalDeploys";
import { IsMaven } from "./maven/pushtest/pushTests";
import {
    ProvidedDependencyCategory,
    ProvidedDependencyReviewer,
} from "./maven/review/providedDependencyReviewer";
import { AddMavenDependency } from "./maven/transform/addDependencyTransform";
import { mavenSourceDeployer } from "./spring/deploy/localSpringBootDeployers";
import { HasSpringBootApplicationClass } from "./spring/pushtest/pushTests";
import {
    NonSpecificMvcAnnotationsReviewer,
    OldStyleAnnotationCatergory,
} from "./spring/review/findNonSpecificMvcAnnotations";
import {
    HardcodedPropertyReviewer,
    HardcodePropertyCategory,
} from "./spring/review/hardcodedPropertyReviewer";
import {
    MutableInjectionCategory,
    MutableInjectionsReviewer,
} from "./spring/review/mutableInjectionsReviewer";
import { springBootTagger } from "./spring/springTagger";
import { addSpringBootActuator } from "./spring/transform/addSpringBootActuator";
import { AddSpringBootStarter } from "./spring/transform/addSpringBootStarterTransform";
import { ApplySecuredWebAppGuide } from "./spring/transform/guide/securingWebApp";
import { FixAutowiredOnSoleConstructor } from "./spring/transform/removeUnnecessaryAutowiredAnnotations";
import {
    UnnecessaryComponentScanAutofix,
    UnnecessaryComponentScanCategory,
    UnnecessaryComponentScanReviewer,
} from "./spring/transform/removeUnnecessaryComponentScanAnnotations";
import { TryToUpgradeSpringBootVersion } from "./spring/transform/tryToUpgradeSpringBootVersion";

/**
 * Categories of functionality to enable
 */
export interface Categories {

    cloudNative?: boolean;

    springStyle?: boolean;
}

/**
 * Options determining what Spring functionality is activated.
 */
export interface SpringSupportOptions {

    /**
     * Inspect goal to add inspections to.
     * Review functionality won't work otherwise.
     */
    inspectGoal?: AutoCodeInspection;

    /**
     * Autofix goal to add autofixes to.
     * Autofix functionality won't work otherwise.
     */
    autofixGoal?: Autofix;

    review: Categories;

    autofix: Categories;

    /**
     * Review listeners that let you publish review results.
     */
    reviewListeners?: ReviewListenerRegistration | ReviewListenerRegistration[];
}

/**
 * Extension pack offering Spring Boot support.
 * Adds Spring Boot related commands and automatic repo tagging
 * on the first push we see. Use options to determine whether
 * reviews and autofixes run.
 */
export function springSupport(options: SpringSupportOptions): ExtensionPack {
    return {
        ...metadata(),
        configure: sdm => {
            sdm
                .addCodeTransformCommand(AddMavenDependency)
                .addCodeTransformCommand(AddSpringBootStarter)
                .addCodeTransformCommand(addSpringBootActuator())
                .addCodeTransformCommand(ApplySecuredWebAppGuide)
                .addCodeTransformCommand(TryToUpgradeSpringBootVersion)
                .addFirstPushListener(
                    tagRepo(springBootTagger),
                );
            if (!!options.inspectGoal) {
                if (options.review.cloudNative) {
                    options.inspectGoal
                        .with(FileIoImportReviewer)
                        .with(ImportDotStarReviewer)
                        .with(HardcodedPropertyReviewer)
                        .with(ProvidedDependencyReviewer);
                }
                if (options.review.springStyle) {
                    options.inspectGoal
                        .with(UnnecessaryComponentScanReviewer)
                        .with(MutableInjectionsReviewer)
                        .with(NonSpecificMvcAnnotationsReviewer);
                }
                if (options.reviewListeners) {
                    const listeners = Array.isArray(options.reviewListeners) ?
                        options.reviewListeners : [options.reviewListeners];
                    listeners.forEach(l => options.inspectGoal.withListener(l));
                }
            }
            if (!!options.autofixGoal) {
                if (options.autofix.springStyle) {
                    options.autofixGoal
                        .with(UnnecessaryComponentScanAutofix)
                        .with(FixAutowiredOnSoleConstructor);
                }
            }
        },
    };
}

/**
 * @deprecated Use the GradlePerBranchDeployment goal
 */
export function configureGradlePerBranchSpringBootDeploy(sdm: SoftwareDeliveryMachine,
                                                         options: Partial<GradleDeployerOptions> = {}) {
    sdm.addGoalContributions(whenPushSatisfies(HasSpringBootApplicationClass, IsGradle)
        .setGoals(GradlePerBranchSpringBootDeploymentGoal));
    sdm.addGoalImplementation("Gradle deployment", GradlePerBranchSpringBootDeploymentGoal,
        executeGradlePerBranchSpringBootDeploy(options));
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

const CloudNativeReviewCommentCategories = [
    ImportFileIoCategory,
    ImportDotStarCategory,
    HardcodePropertyCategory,
    ProvidedDependencyCategory,
];

/**
 * Review Listener to raise an issue for Cloud Native review comments.
 */
export const CloudNativeGitHubIssueRaisingReviewListener: ReviewListenerRegistration = {
    name: "CloudNativeReviewListener",
    listener: singleIssueManagingReviewListener(
        r => CloudNativeReviewCommentCategories.includes(r.category),
        "Cloud Native review issues",
        CategorySortingBodyFormatter),
};

const SpringStyleReviewCommentCategories = [
    UnnecessaryComponentScanCategory,
    MutableInjectionCategory,
    OldStyleAnnotationCatergory,
];

/**
 * Review Listener to raise an issue for Spring style review comments.
 */
export const SpringStyleGitHubIssueRaisingReviewListener: ReviewListenerRegistration = {
    name: "SpringStyleReviewListener",
    listener: singleIssueManagingReviewListener(
        r => SpringStyleReviewCommentCategories.includes(r.category),
        "Spring style review issues",
        CategorySortingBodyFormatter),
};
