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

import { logger } from "@atomist/automation-client";
import { SoftwareDeliveryMachineConfiguration } from "@atomist/sdm";
import { StackSupport } from "@atomist/sdm-pack-analysis";
import { RunCondition } from "@atomist/sdm-pack-analysis/lib/analysis/ProjectAnalyzer";
import * as _ from "lodash";
import { Categories } from "../spring";
import { MavenPerBranchLocalDeployInterpreter } from "./MavenPerBranchLocalDeployInterpreter";
import { SpringBootBuildInterpreter } from "./SpringBootBuildInterpreter";
import { springBootScanner } from "./springBootScanner";
import { SpringBootTransformRecipeContributor } from "./SpringBootTransformRecipeContributor";
import { SpringReviewInterpreter } from "./SpringReviewInterpreter";

export interface SpringBootStackSupportOptions {

    /**
     * When should the capabilities of this stack take effect?
     * Enable feature flagging
     */
    condition?: RunCondition;

}

/**
 * Spring stack support based on sdm-pack-analysis. Used in Uhura-based SDMs.
 * Uses sdm.spring.deployLocally and sdm.spring.review
 * @return {StackSupport}
 */
export function springBootStackSupport(configuration: SoftwareDeliveryMachineConfiguration,
                                       opts: SpringBootStackSupportOptions = {}): StackSupport {
    const deployLocally = _.get(configuration, "sdm.spring.deployLocally", false);
    const reviewCategories: Categories = _.get(configuration, "sdm.spring.review", {
        springStyle: true,
        cloudNative: true,
    });
    logger.info("Spring pack: Local deployment is %s", deployLocally ? "ENABLED" : "DISABLED");
    logger.info("Spring pack: Review categories=%j", reviewCategories);
    return {
        scanners: [springBootScanner],
        interpreters: [
            new SpringReviewInterpreter(reviewCategories),
            new SpringBootBuildInterpreter(),
            {
                action: new MavenPerBranchLocalDeployInterpreter(),
                runWhen: () => deployLocally,
            },
        ],
        transformRecipeContributors: [{
            originator: "spring-boot",
            optional: false,
            contributor: new SpringBootTransformRecipeContributor(),
        }],
        condition: opts.condition,
    };
}
