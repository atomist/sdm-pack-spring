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
    gradlePropertiesTaskNameGrammar,
    gradlePropertiesTaskVersionGrammar,
} from "../build/helpers";

/**
 * Return the identification of a project: name and version
 * @param {Project} p
 * @return {Promise<any>}
 * @constructor
 */
export const GradleProjectIdentifier: (p: Project) => Promise<VersionedArtifact & ProjectIdentification> = async p => {
    const propertiesOutput = new StringCapturingProgressLog();
    await gradleCommand(p as LocalProject, { progressLog: propertiesOutput, tasks: ["properties"], errorFinder: SuccessIsReturn0ErrorFinder});
    const appName = gradlePropertiesTaskNameGrammar.firstMatch(propertiesOutput.log).name;
    const version = gradlePropertiesTaskVersionGrammar.firstMatch(propertiesOutput.log).version;
    const group = gradlePropertiesTaskGroupGrammar.firstMatch(propertiesOutput.log).group;
    return {
        name: appName,
        artifact: appName,
        version,
        group,
    };
};
