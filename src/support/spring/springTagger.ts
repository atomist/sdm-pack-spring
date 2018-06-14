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

import { logger } from "@atomist/automation-client";

import { DefaultTags } from "@atomist/automation-client/operations/tagger/Tagger";
import { toPromise } from "@atomist/automation-client/project/util/projectUtils";
import { AllJavaFiles } from "../java/javaProjectUtils";
import { SpringBootStarter } from "./springConstants";

// moved from spring-automation

export const springBootTagger = p => {
    return p.findFile("pom.xml")
        .then(f => f.getContent())
        .then(content => {
            const tags: string[] = [];
            if (content.includes(SpringBootStarter)) {
                tags.push("spring-boot");
                tags.push("spring");
            } else if (content.includes("org.springframework")) {
                tags.push("spring");
            }
            // TODO need to simplify this
            return toPromise(p.streamFiles(AllJavaFiles))
                .then(javaFiles => {
                    if (javaFiles.length > 0) {
                        tags.push("java");
                    }
                    return new DefaultTags(p.id, tags);
                });
        })
        .catch(err => {
            logger.warn("Tag error: " + err);
            return new DefaultTags(p.id, []);
        });
};
