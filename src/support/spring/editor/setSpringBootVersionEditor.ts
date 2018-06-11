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

import { logger } from "@atomist/automation-client/internal/util/logger";
import {
    SimpleProjectEditor,
} from "@atomist/automation-client/operations/edit/projectEditor";
import { doWithMatches } from "@atomist/automation-client/project/util/parseUtils";
import { SpringBootStarter } from "../springConstants";
import { parentStanzaOfGrammar } from "../../maven/grammar/mavenGrammars";

// JESS: MOVED from spring-automation

/**
 * Set the Spring Boot version to
 * @param {string} desiredBootVersion
 * @return {ProjectEditor<EditResult>}
 */
export function setSpringBootVersionEditor(desiredBootVersion: string): SimpleProjectEditor {
    return p => {
        return doWithMatches(p, "**/pom.xml",
            parentStanzaOfGrammar(SpringBootStarter), m => {
                if (m.version.value !== desiredBootVersion) {
                    logger.info("Updating Spring Boot version from [%s] to [%s]",
                        m.version.value, desiredBootVersion);
                    m.version.value = desiredBootVersion;
                }
            });
    };
}
