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

import {
    projectUtils,
    SeedDrivenGeneratorParameters,
} from "@atomist/automation-client";
import {
    chainTransforms,
    CodeTransform,
} from "@atomist/sdm";
import { inferStructureAndMovePackageTransform } from "../../java/javaProjectUtils";
import {
    updateMultiModulePomTransform,
    updatePomTransform,
} from "../../maven/generate/updatePom";
import { inferSpringStructureAndRenameTransform } from "./springBootUtils";
import { SpringProjectCreationParameters } from "./SpringProjectCreationParameters";

/**
 * Get a transform that removes content from a README specific to this project.
 * @param project      project whose README should be cleaned
 */
const cleanReadMe: CodeTransform<SpringProjectCreationParameters & SeedDrivenGeneratorParameters> =
    async (project, c, params) => projectUtils.doWithFiles(project, "README.md", readMe => {
        return readMe.replace(/^#[\\s\\S]*?## Development/, `# ${project.name}
This project contains ${params.target.description}.

## Development`);
    });

/**
 * Transform a seed to a custom Spring Boot project.
 */
export const TransformSeedToCustomProject: CodeTransform<SpringProjectCreationParameters> = chainTransforms(
    cleanReadMe,
    updatePomTransform,
    inferStructureAndMovePackageTransform,
    inferSpringStructureAndRenameTransform,
);

/**
 * Transform a seed to a custom Spring Boot project.
 */
export function transformMultiModuleSeedToCustomProject(artifactPrefix: string): CodeTransform<SpringProjectCreationParameters> {
    return chainTransforms(
        cleanReadMe,
        updateMultiModulePomTransform(artifactPrefix),
        inferStructureAndMovePackageTransform,
        inferSpringStructureAndRenameTransform,
    );

}
