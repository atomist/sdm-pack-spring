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
    Project,
    projectUtils,
} from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { computeArtifactId } from "../../java/generate/JavaProjectCreationParameters";
import { SpringProjectCreationParameters } from "./../../spring/generate/SpringProjectCreationParameters";

/**
 * Record change to POM. Project will subsequently need flushing
 *
 * @param {Project} project
 * @param name desired name
 * @param {string} artifactId
 * @param {string} groupId
 * @param {string} version
 * @param {string} description
 * @return project promise, project will need to be flushed
 */
export function updatePom(
    project: Project,
    name: string,
    artifactId: string,
    groupId: string,
    version: string,
    description: string,
): Promise<Project> {
    return projectUtils.doWithFiles(project, "pom.xml", async f => {
        await f.replace(/<artifactId>[\S\s]*?<\/artifactId>/, `<artifactId>${artifactId}</artifactId>`);
        await f.replace(/<name>[\S\s]*?<\/name>/, `<name>${name}</name>`);
        await f.replace(/<groupId>[\S\s]*?<\/groupId>/, `<groupId>${groupId}</groupId>`);
        await f.replace(/<version>[\S\s]*?<\/version>/, `<version>${version}</version>`);
        await f.replace(/<description>[\S\s]*?<\/description>/, `<description>${description}</description>`);
    });
}

export const updatePomTransform: CodeTransform<SpringProjectCreationParameters> = async (project, c, params) => updatePom(project,
    params.target.repoRef.repo,
    computeArtifactId(params),
    params.groupId, params.version,
    params.description || params.target.repoRef.repo);
