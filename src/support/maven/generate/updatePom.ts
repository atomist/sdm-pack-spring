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

import { ProjectAsync } from "@atomist/automation-client/project/Project";
import { doWithFiles } from "@atomist/automation-client/project/util/projectUtils";

// JESS: MOVED from spring-automation to sdm-pack-spring

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
export function updatePom<P extends ProjectAsync>(
    project: P,
    name: string,
    artifactId: string,
    groupId: string,
    version: string,
    description: string,
): Promise<P> {

    return doWithFiles(project, "pom.xml", f => {
        f.recordReplace(/<artifactId>[\S\s]*?<\/artifactId>/, `<artifactId>${artifactId}</artifactId>`)
            .recordReplace(/<name>[\S\s]*?<\/name>/, `<name>${name}</name>`)
            .recordReplace(/<groupId>[\S\s]*?<\/groupId>/, `<groupId>${groupId}</groupId>`)
            .recordReplace(/<version>[\S\s]*?<\/version>/, `<version>${version}</version>`)
            .recordReplace(/<description>[\S\s]*?<\/description>/, `<description>${description}</description>`);
    });
}
