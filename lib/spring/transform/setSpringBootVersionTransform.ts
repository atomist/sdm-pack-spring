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
    doWithMatches,
    logger,
} from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { parentStanzaOfGrammar } from "../../maven/parse/grammar/mavenGrammars";
import { SpringBootStarter } from "../springConstants";

/**
 * Set the Spring Boot version according to the parameters.
 * Will act on all pom files found in the project, not just in the root,
 * so works on monorepos.
 */
export const SetSpringBootVersionTransform: CodeTransform<{ desiredBootVersion: string }> =
    async (p, ctx, params) =>
        doWithMatches(p, "**/pom.xml",
            parentStanzaOfGrammar(SpringBootStarter), m => {
                if (m.version.value !== params.desiredBootVersion) {
                    logger.info("Updating Spring Boot version from [%s] to [%s]",
                        m.version.value, params.desiredBootVersion);
                    m.version.value = params.desiredBootVersion;
                }
            });
