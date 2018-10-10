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
    CodeTransform,
    CodeTransformOrTransforms,
} from "@atomist/sdm";
import { SpringProjectCreationParameters } from "./SpringProjectCreationParameters";
import { TransformSeedToCustomProject } from "./transformSeedToCustomProject";
import { projectUtils } from "@atomist/automation-client";

/**
 * Update the readme
 */
export const ReplaceReadmeTitle: CodeTransform<SpringProjectCreationParameters> = async (p, ci) => {
    return projectUtils.doWithFiles(p, "README.md", async readMe => {
        await readMe.replace(/^#[\s\S]*?## /, titleBlock(ci.parameters));
    });
};

/**
 * Replace the ${ATOMIST_TEAM} placeholder in the seed with the id
 * of the team we are generating for
 */
export const SetAtomistTeamInApplicationYml: CodeTransform =
    async (p, ci) => {
        return projectUtils.doWithFiles(p, "src/main/resources/application.yml", f =>
            f.replace(/\${ATOMIST_TEAM}/, ci.context.workspaceId));
    };

function titleBlock(params: SpringProjectCreationParameters): string {
    return `# ${params.target.repoRef.repo}
${params.target.description}

Based on seed project \`${params.source.repoRef.owner}:${params.source.repoRef.repo}\`

## `;
}

/**
 * Default transformation to turn a Spring Boot seed project into a custom project
 * @type {(CodeTransform<SpringProjectCreationParameters> | CodeTransform)[]}
 */
export const SpringBootGeneratorTransform: CodeTransformOrTransforms<SpringProjectCreationParameters> = [
    ReplaceReadmeTitle,
    SetAtomistTeamInApplicationYml,
    TransformSeedToCustomProject,
];
