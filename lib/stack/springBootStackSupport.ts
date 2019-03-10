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

import { StackSupport } from "@atomist/sdm-pack-analysis";
import { RunCondition } from "@atomist/sdm-pack-analysis/lib/analysis/ProjectAnalyzer";
import { MavenPerBranchLocalDeployInterpreter } from "./MavenPerBranchLocalDeployInterpreter";
import { SpringBootBuildInterpreter } from "./SpringBootBuildInterpreter";
import { springBootScanner } from "./springBootScanner";
import { SpringBootTransformRecipeContributor } from "./SpringBootTransformRecipeContributor";

export interface SpringBootStackSupportOptions {

    /**
     * When should the capabilities of this stack take effect?
     * Enable feature flagging
     */
    condition?: RunCondition;

    /**
     * Deploy locally from Maven? Only use for development use.
     */
    deployLocally: boolean;
}

/**
 * Spring stack support based on sdm-pack-analysis. Used in Uhura-based SDMs.
 * @param opts options
 * @return {StackSupport}
 */
export function springBootStackSupport(opts: SpringBootStackSupportOptions = { deployLocally: false }): StackSupport {
    return {
        scanners: [springBootScanner],
        interpreters: [
            new SpringBootBuildInterpreter(),
            {
                action: new MavenPerBranchLocalDeployInterpreter(),
                runWhen: () => opts.deployLocally,
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
