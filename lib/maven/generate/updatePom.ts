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
    astUtils,
    Project,
} from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import {
    computeArtifactId,
    JavaProjectCreationParameters
} from "../../java/generate/JavaProjectCreationParameters";
import { XmldocFileParser } from "../../xml/XmldocFileParser";

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
        artifactPrefix: string,
    },
): Promise<Project> {
    const pomProjects = await astUtils.findFileMatches(project, new XmldocFileParser(), "**/pom.xml", "/project"); // , m => {
    for (const pomProject of pomProjects) {
        const m = pomProject.matches[0];
        const parentElement = m.$children.find(n => n.$name === "parent");
        const pomGroupId = m.$children.find(n => n.$name === "groupId");
        const pomArtifactId = m.$children.find(n => n.$name === "artifactId");
        const pomVersion = m.$children.find(n => n.$name === "artifactId");
        if (parentElement) {
            const parentGroupId = parentElement.$children.find(n => n.$name === "groupId");
            const parentArtifactId = parentElement.$children.find(n => n.$name === "artifactId");
            if (pomGroupId) {
                if (pomGroupId.$value === parentGroupId.$value) {
                    await updateNode(project, pomProject.file.path, "/project/parent/groupId", `<groupId>${groupId}</groupId>`);
                    await updateNode(project, pomProject.file.path, "/project/parent/version", `<version>${version}</version>`);
                    if (multiModuleArgs.artifactPrefix) {
                        await updateNode(project, pomProject.file.path, "/project/parent/artifactId", parentArtifactId.$value.replace(
                            new RegExp(multiModuleArgs.artifactPrefix + "-(.*)"), `${artifactId}-$1`));
                    }
                }
            } else {
                await updateNode(project, pomProject.file.path, "/project/parent/groupId", `<groupId>${groupId}</groupId>`);
                await updateNode(project, pomProject.file.path, "/project/parent/version", `<version>${version}</version>`);
                if (multiModuleArgs.artifactPrefix) {
                    await updateNode(project, pomProject.file.path, "/project/parent/artifactId", parentArtifactId.$value.replace(
                        new RegExp(multiModuleArgs.artifactPrefix + "-(.*)"), `${artifactId}-$1`));
                }
            }
        }
        await updateNode(project, pomProject.file.path, "/project/groupId", `<groupId>${groupId}</groupId>`);
        if (!!multiModuleArgs) {
            await updateNode(project, pomProject.file.path, "/project/artifactId",
                pomArtifactId.$value.replace(new RegExp(multiModuleArgs.artifactPrefix + "-(.*)"), `${artifactId}-$1`));
        } else {
            await updateNode(project, pomProject.file.path, "/project/artifactId", `<artifactId>${artifactId}</artifactId>`);
        }
        if (!!pomVersion) {
            await updateNode(project, pomProject.file.path, "/project/version", `<version>${version}</version>`);
        }
        if (!(!!multiModuleArgs)) {
            await updateNode(project, pomProject.file.path, "/project/description", `<description>${description}</description>`);
            await updateNode(project, pomProject.file.path, "/project/name", `<name>${name}</name>`);
        }
    }
    return project;
}

export async function updateNode(project: Project, f: string, path: string, value: string): Promise<void> {
    await astUtils.doWithAllMatches(project, new XmldocFileParser(), f, path, m => {
        m.$value = value;
    });
}

export const updatePomTransform: CodeTransform<JavaProjectCreationParameters> = async (project, c, params) => updatePom(project,
    project.id.repo,
    computeArtifactId(params, project),
    params.groupId, params.version,
    params.description || project.id.repo);

export function updateMultiModulePomTransform(artifactPrefix: string): CodeTransform<JavaProjectCreationParameters> {
    return async (project, c, params) => updatePom(project,
        project.id.repo,
        computeArtifactId(params, project),
        params.groupId, params.version,
        params.description || project.id.repo,
        { artifactPrefix });
}
