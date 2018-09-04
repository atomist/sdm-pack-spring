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

import { chainEditors } from "@atomist/automation-client/operations/edit/projectEditorOps";
import {
    CodeTransform,
    doWithFiles,
    Project,
} from "@atomist/sdm";
import { curry } from "@typed/curry";
import { artifactId } from "../../java/generate/JavaProjectCreationParameters";
import { inferStructureAndMovePackage } from "../../java/javaProjectUtils";
import { updatePom } from "../../maven/generate/updatePom";
import { inferSpringStructureAndRename } from "./springBootUtils";
import { serviceClassName, SpringProjectCreationParameters } from "./SpringProjectCreationParameters";

/**
 * Transform a seed to a custom Spring Boot project.
 * Transform suited for use in a Spring Boot generator.
 */
export const TransformSeedToCustomProject: CodeTransform<SpringProjectCreationParameters> = async (p, ctx, params) => {
    return chainEditors(
        curry(cleanReadMe)(params.target.description),
        async project => updatePom(project,
            params.target.repoRef.repo,
            artifactId(params),
            params.groupId, params.version,
            params.description || params.target.repoRef.repo),
        curry(inferStructureAndMovePackage)(params.rootPackage),
        curry(inferSpringStructureAndRename)(serviceClassName(params)),
    )(p, ctx.context, params);
};

/**
 * Remove content from README specific to this project.
 * @param project      project whose README should be cleaned
 * @param description  brief description of newly created project
 */
export function cleanReadMe(description: string, project: Project): Promise<Project> {
    return doWithFiles(project, "README.md", readMe => {
        return readMe.replace(/^#[\\s\\S]*?## Development/, `# ${project.name}
This project contains ${description}.

## Development`);
    });
}
