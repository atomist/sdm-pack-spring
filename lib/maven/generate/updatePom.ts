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
    astUtils,
    Project,
} from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { computeArtifactId } from "../../java/generate/JavaProjectCreationParameters";
import { XmldocFileParser } from "../../xml/XmldocFileParser";
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
export async function updatePom(
    project: Project,
    name: string,
    artifactId: string,
    groupId: string,
    version: string,
    description: string,
    multiModuleArgs?: {
        prefix: string,
    },
): Promise<Project> {
    astUtils.doWithAllMatches(project, new XmldocFileParser(), "**/pom.xml", "/project", m => {
        const parentElement = m.$children.find(n => n.$name === "parent");
        const parentGroupId = parentElement.$children.find(n => n.$name === "groupId");
        const parentArtifactId = parentElement.$children.find(n => n.$name === "artifactId");
        const parentVersion = parentElement.$children.find(n => n.$name === "artifactId");
        const pomGroupId = m.$children.find(n => n.$name === "groupId");
        const pomArtifactId = m.$children.find(n => n.$name === "artifactId");
        const pomVersion = m.$children.find(n => n.$name === "artifactId");
        const pomDescription = m.$children.find(n => n.$name === "description");
        if (parentElement) {
            if (pomGroupId) {
                if (pomGroupId.$value === parentGroupId.$value) {
                    parentGroupId.$value = groupId;
                    parentVersion.$value = version;
                    if (multiModuleArgs.prefix) {
                        parentArtifactId.$value = parentArtifactId.$value.replace(new RegExp(multiModuleArgs.prefix + "-(.*)"), `${artifactId}-$1`);
                    }
                }
            } else {
                parentGroupId.$value = groupId;
                parentVersion.$value = version;
                if (multiModuleArgs.prefix) {
                    parentArtifactId.$value = parentArtifactId.$value.replace(new RegExp(multiModuleArgs.prefix + "-(.*)"), `${artifactId}-$1`);
                }
            }
        }
        pomGroupId.$value = groupId;
        if (multiModuleArgs.prefix) {
            pomArtifactId.$value = pomArtifactId.$value.replace(new RegExp(multiModuleArgs.prefix + "-(.*)"), `${artifactId}-$1`);
        } else {
            pomArtifactId.$value = artifactId;
        }
        if (pomVersion) {
            pomVersion.$value = version;
        }
        if (!multiModuleArgs) {
            pomDescription.$value = description;
        }

    });
    return project;
}

export const updatePomTransform: CodeTransform<SpringProjectCreationParameters> = async (project, c, params) => updatePom(project,
    params.target.repoRef.repo,
    computeArtifactId(params),
    params.groupId, params.version,
    params.description || params.target.repoRef.repo);

export function updateMultiModulePomTransform(prefix: string): CodeTransform<SpringProjectCreationParameters> {
    return async (project, c, params) => updatePom(project,
        params.target.repoRef.repo,
        computeArtifactId(params),
        params.groupId, params.version,
        params.description || params.target.repoRef.repo,
        { prefix });
}
