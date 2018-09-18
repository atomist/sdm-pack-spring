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
    fileExists,
    Project,
    Tagger,
} from "@atomist/automation-client";

import { AllJavaFiles } from "../java/javaProjectUtils";
import { SpringBootStarter } from "./springConstants";

/**
 * Function to add Spring-related GitHub topics if needed
 * @param p project to scan
 * @return {Promise<DefaultTaggerTags>}
 */
export const springBootTagger: Tagger = async p => {
    const tags = await tagsFromPom(p);
    if (await fileExists(p, AllJavaFiles, f => true)) {
        tags.push("java");
    }
    if (await fileExists(p, "**/*.kt", f => true)) {
        tags.push("kotlin");
    }
    return { repoId: p.id, tags };
};

async function tagsFromPom(p: Project): Promise<string[]> {
    const tags: string[] = [];
    const pom = await p.getFile("pom.xml");
    if (!!pom) {
        const content = await pom.getContent();
        if (content.includes(SpringBootStarter)) {
            tags.push("spring-boot");
            tags.push("spring");
        } else if (content.includes("org.springframework")) {
            tags.push("spring");
        }
    }
    return tags;
}
