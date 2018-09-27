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

import { Tagger } from "@atomist/automation-client";

/**
 * Emit tags based on contents of a Maven POM, if one is found
 * @param {Project} p
 */
export const mavenTagger: Tagger = async p => {
    const tags: string[] = [];
    const pom = await p.getFile("pom.xml");
    if (!!pom) {
        tags.push("maven");
        const content = await pom.getContent();
        if (content.includes("org.springframework")) {
            tags.push("spring");
        }
    }
    return { repoId: p.id, tags };
};
