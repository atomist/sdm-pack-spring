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
    doWithAllMatches,
    logger,
} from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import * as _ from "lodash";
import { findDeclaredDependencies } from "../../maven/parse/fromPom";
import { XmldocFileParser } from "../../xml/XmldocFileParser";

/**
 * Return a code transform that will add the given Spring Boot starter to a project.
 * Do nothing if it's already there, or the project isn't a Spring Boot project.
 * @param {string} artifact starter name
 * @param {string} group group the starter is from. Defaults to org.springframework.boot
 * @return {CodeTransform}
 */
export function addSpringBootStarterTransform(artifact: string,
                                              group: string = "org.springframework.boot"): CodeTransform {
    return async p => {
        if (await p.hasFile("pom.xml")) {
            const deps = await findDeclaredDependencies(p);
            if (deps.dependencies.length === 0) {
                throw new Error("No dependencies in POM: Cannot add starter");
            }
            if (deps.dependencies.some(dep => dep.artifact === artifact && dep.group === group)) {
                logger.info("Starter [%s] already present. Nothing to do", artifact);
            } else {
                logger.info("Adding starter [%s]", artifact);
                // Add after last dependency
                const lastDep = _.last(deps.dependencies);
                await doWithAllMatches(p, new XmldocFileParser(), "pom.xml",
                `//project/dependencies/dependency[/artifactId[@innerValue='${lastDep.artifact}']]`,
                m => {
                    m.append("\n" + dependencyStanza(artifact, group));
                });
            }
        }
    };
}

function dependencyStanza(artifact: string, group: string) {
    return `<dependency>
    <groupId>${group}</groupId>
    <artifactId>${artifact}</artifactId>
</dependency>`;
}
