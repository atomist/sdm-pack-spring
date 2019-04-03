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
    LocalProject,
    Project,
} from "@atomist/automation-client";
import {
    StringCapturingProgressLog,
    SuccessIsReturn0ErrorFinder,
} from "@atomist/sdm";
import { ProjectIdentification } from "@atomist/sdm-core/lib/internal/delivery/build/local/projectIdentifier";
import { VersionedArtifact } from "../../maven/VersionedArtifact";
import { gradleCommand } from "../build/gradleBuilder";
import {
    gradlePropertiesTaskGroupGrammar,
    gradlePropertiesVersionGrammar,
} from "../build/helpers";

async function getProjectVersion(p: Project): Promise<string> {
    const gradleProperties = await (await p.getFile("gradle.properties")).getContent();
    return gradlePropertiesVersionGrammar.firstMatch(gradleProperties).version;
}

async function getProjectGroup(p: Project): Promise<string> {
    const log = new StringCapturingProgressLog();
    await gradleCommand(p as LocalProject, {
        tasks: ["properties"],
        progressLog: log,
        errorFinder: SuccessIsReturn0ErrorFinder,
    });
    return gradlePropertiesTaskGroupGrammar.firstMatch(log.log).group;
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
