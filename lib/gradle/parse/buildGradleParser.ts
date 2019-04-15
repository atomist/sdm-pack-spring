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
    Project,
} from "@atomist/automation-client";
import { ProjectIdentification } from "@atomist/sdm-core/lib/internal/delivery/build/local/projectIdentifier";
import { VersionedArtifact } from "../../maven/VersionedArtifact";

async function getProjectVersion(p: Project): Promise<string> {
    let version: string;
    const versionRegex = /^version[ ]?=[ ]?["']?([0-9.\-_A-Za-z])*['"]?$/;
    if (p.hasFile("gradle.properties")) {
        const gradleProperties = await (await p.getFile("gradle.properties")).getContent();
        version = gradleProperties.match(versionRegex)[0];
    } else if (p.hasFile("build.gradle")) {
        const gradleBuild = await (await p.getFile("build.gradle")).getContent();
        version = gradleBuild.match(versionRegex)[0];
    } else if (p.hasFile("build.gradle.kts")) {
        const gradleBuild = await (await p.getFile("build.gradle.kts")).getContent();
        version = gradleBuild.match(versionRegex)[0];
    }
    return version || "0.0.1-SNAPSHOT";

}

async function getProjectGroup(p: Project): Promise<string> {
    let group: string;
    const groupRegex = /^group[ ]?=[ ]?["']?([0-9.\-_A-Za-z])*['"]?$/;
    if (p.hasFile("gradle.properties")) {
        const gradleProperties = await (await p.getFile("gradle.properties")).getContent();
        group = gradleProperties.match(groupRegex)[0];
    } else if (p.hasFile("build.gradle")) {
        const gradleBuild = await (await p.getFile("build.gradle")).getContent();
        group = gradleBuild.match(groupRegex)[0];
    } else if (p.hasFile("build.gradle.kts")) {
        const gradleBuild = await (await p.getFile("build.gradle.kts")).getContent();
        group = gradleBuild.match(groupRegex)[0];
    }
    return group;

}

/**
 * Return the identification of a project: name and version
 * @param {Project} p
 * @return {Promise<any>}
 * @constructor
 */
export const GradleProjectIdentifier: (p: Project) => Promise<VersionedArtifact & ProjectIdentification> = async p => {
    const appName = p.name;
    const version = await getProjectVersion(p);
    const group = await getProjectGroup(p);
    return {
        name: appName,
        artifact: appName,
        version,
        group,
    };
};