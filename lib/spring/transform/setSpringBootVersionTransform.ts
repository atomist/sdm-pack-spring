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

import { astUtils } from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { XmldocFileParser } from "../../xml/XmldocFileParser";

/**
 * Set the Spring Boot version to the desired version.
 * Will act on all pom files found in the project, not just in the root,
 * so works on monorepos.
 */
export function setSpringBootVersionTransform(desiredBootVersion: string): CodeTransform {
    return async p =>
        astUtils.doWithAllMatches(p, new XmldocFileParser(),
            "**/pom.xml",
            "//parent[/artifactId[@innerValue='spring-boot-starter-parent']]/version",
            n => {
                n.$value = `<version>${desiredBootVersion}</version>`;
            });
}

/**
 * Set the Spring Boot version according to the parameters.
 * Will act on all pom files found in the project, not just in the root,
 * so works on monorepos.
 */
export const SetSpringBootVersionTransform: CodeTransform<{ desiredBootVersion: string }> =
    async (p, ci, params) => setSpringBootVersionTransform(ci.parameters.desiredBootVersion)(p, ci, params);
