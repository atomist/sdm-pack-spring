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

import { SimpleProjectEditor } from "@atomist/automation-client/operations/edit/projectEditor";
import { chainEditors } from "@atomist/automation-client/operations/edit/projectEditorOps";
import { GeneratorCommandDetails } from "@atomist/automation-client/operations/generate/generatorToCommand";
import * as utils from "@atomist/automation-client/project/util/projectUtils";
import { GeneratorRegistration } from "@atomist/sdm";
import { JavaGeneratorConfig } from "../../java/generate/JavaGeneratorConfig";
import { SpringProjectCreationParameters } from "./SpringProjectCreationParameters";
import { transformSeedToCustomProject } from "./transformSeedToCustomProject";

// JESS: MOVED from sample-sdm to sdm-pack-spring

/**
 * Function to create a Spring Boot generator.
 * Relies on generic Atomist Java & Spring functionality in spring-automations
 * @param config config for a Java generator, including location of seed
 * @param details allow customization
 * @return {HandleCommand<SpringProjectCreationParameters>}
 */
export function springBootGenerator(config: JavaGeneratorConfig,
                                    // tslint:disable-next-line:max-line-length
                                    details: Partial<GeneratorCommandDetails<SpringProjectCreationParameters>> = {}): GeneratorRegistration<SpringProjectCreationParameters> {
    return {
        createEditor: (params, ctx) => chainEditors(
            replaceReadmeTitle(params),
            SetAtomistTeamInApplicationYml,
            transformSeedToCustomProject(params),
        ),
        paramsMaker: () => {
            const p = new SpringProjectCreationParameters(config);
            // p.target = new BitBucketRepoCreationParameters();
            return p;
        },
        name: `springBootGenerator-${config.seed.repo}`,
        tags: ["spring", "boot", "java", "generator"],
        ...details as any,
        intent: details.intent,
    };
}

/**
 * Update the readme
 */
export const replaceReadmeTitle =
    (params: SpringProjectCreationParameters) => async p => {
        return utils.doWithFiles(p, "README.md", readMe => {
            readMe.recordReplace(/^#[\s\S]*?## /, titleBlock(params));
        });
    };

/**
 * Replace the ${ATOMIST_TEAM} placeholder in the seed with the id
 * of the team we are generating for
 */
export const SetAtomistTeamInApplicationYml: SimpleProjectEditor =
    async (p, ctx) => {
        return utils.doWithFiles(p, "src/main/resources/application.yml", f =>
            f.replace(/\${ATOMIST_TEAM}/, ctx.teamId));
    };

function titleBlock(params: SpringProjectCreationParameters): string {
    return `# ${params.target.repo}
${params.target.description}

Based on seed project \`${params.source.repoRef.owner}:${params.source.repoRef.repo}\`

## `;
}
