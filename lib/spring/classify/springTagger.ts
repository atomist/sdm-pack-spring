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

import { fileExists, Tagger } from "@atomist/automation-client";

import { AllJavaFiles } from "../../java/javaProjectUtils";
import { SpringBootProjectStructure } from "../generate/SpringBootProjectStructure";

/**
 * Function to add Spring-related GitHub topics if needed
 * @param p project to scan
 * @return {Promise<DefaultTaggerTags>}
 */
export const springBootTagger: Tagger = async p => {
    const tags: string[] = [];
    if (await fileExists(p, AllJavaFiles)) {
        tags.push("java");
    }
    if (await fileExists(p, "**/*.kt")) {
        tags.push("kotlin");
    }
    const springBootStructure = await SpringBootProjectStructure.inferFromJavaOrKotlinSource(p);
    if (!!springBootStructure) {
        tags.push("spring-boot");
        tags.push("spring");
    }
    return { repoId: p.id, tags };
};
