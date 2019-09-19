/*
 * Copyright © 2019 Atomist, Inc.
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

import { unifiedTagger } from "@atomist/automation-client/lib/operations/tagger/Tagger";
import {
    AutoCodeInspection,
    Autofix,
    ExtensionPack,
    metadata,
    ReviewListenerRegistration,
} from "@atomist/sdm";
import { tagRepo } from "@atomist/sdm-core";
import { gradleTagger } from "./gradle/classify/gradleTagger";
import { ImportDotStarReviewer } from "./java/review/importDotStarReviewer";
import { ImportIoFileReviewer } from "./java/review/importIoFileReviewer";
import { mavenTagger } from "./maven/classify/mavenTagger";
import { ProvidedDependencyReviewer } from "./maven/review/providedDependencyReviewer";
import { AddMavenDependency } from "./maven/transform/addDependencyTransform";
import { springBootTagger } from "./spring/classify/springTagger";
import { NonSpecificMvcAnnotationsReviewer } from "./spring/review/findNonSpecificMvcAnnotations";
import { HardcodedPropertyReviewer } from "./spring/review/hardcodedPropertyReviewer";
import { MutableInjectionsReviewer } from "./spring/review/mutableInjectionsReviewer";
import { oldSpringBootVersionReviewer } from "./spring/review/oldSpringBootVersionReviewer";
import { addSpringBootActuator } from "./spring/transform/addSpringBootActuator";
import { AddSpringBootStarter } from "./spring/transform/addSpringBootStarterTransform";
import { springFormat } from "./spring/transform/format/springFormat";
import { ApplySecuredWebAppGuide } from "./spring/transform/guide/securingWebApp";
import { FixAutowiredOnSoleConstructor } from "./spring/transform/removeUnnecessaryAutowiredAnnotations";
import {
    UnnecessaryComponentScanAutofix,
    UnnecessaryComponentScanReviewer,
} from "./spring/transform/removeUnnecessaryComponentScanAnnotations";
import { tryToUpgradeSpringBootVersion } from "./spring/transform/tryToUpgradeSpringBootVersion";

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

    desiredSpringBootVersion: string;

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
     * Whether to apply spring-format automatically, if an autofixGoal is provided
     */
    springFormat?: boolean;

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
                .addCodeTransformCommand(tryToUpgradeSpringBootVersion(options))
                .addFirstPushListener(
                    tagRepo(unifiedTagger(
                        springBootTagger,
                        gradleTagger,
                        mavenTagger,
                        ),
                    ),
                );
            if (!!options.inspectGoal) {
                if (options.review.cloudNative) {
                    options.inspectGoal
                        .with(ImportIoFileReviewer)
                        .with(ImportDotStarReviewer)
                        .with(HardcodedPropertyReviewer)
                        .with(ProvidedDependencyReviewer);
                }
                if (options.review.springStyle) {
                    options.inspectGoal
                        .with(oldSpringBootVersionReviewer(options))
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
                if (options.springFormat) {
                    options.autofixGoal
                        .with(springFormat(sdm.configuration));
                }
            }
        },
    };
}
