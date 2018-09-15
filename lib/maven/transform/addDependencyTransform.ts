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
import { indent } from "../../util/formatUtils";
import { XmldocFileParser } from "../../xml/XmldocFileParser";
import { findDeclaredDependencies } from "../parse/fromPom";
import { VersionedArtifact } from "../VersionedArtifact";

/**
 * Add the given dependency to projects. It's not an error
 * if the project doesn't have a POM. The transform will do nothing
 * in this case.
 * @param {VersionedArtifact} va
 * @return {SimpleProjectEditor}
 */
export function addDependencyTransform(va: VersionedArtifact): CodeTransform {
    return async p => {
        if (await p.hasFile("pom.xml")) {
            const deps = await findDeclaredDependencies(p);
            if (deps.dependencies.length === 0) {
                throw new Error("No dependencies in POM: Cannot add starter");
            }
            if (deps.dependencies.some(dep => dep.artifact === va.artifact && dep.group === va.group)) {
                logger.info("Dependency [%s] already present. Nothing to do", va.artifact);
            } else {
                logger.info("Adding dependency [%s]", va.artifact);
                // Add after last dependency
                const lastDep = _.last(deps.dependencies);
                await doWithAllMatches(p, new XmldocFileParser(), "pom.xml",
                    `//project/dependencies/dependency[/artifactId[@innerValue='${lastDep.artifact}']]`,
                    m => {
                        m.append("\n" + indent(dependencyStanza(va), "   ", 2));
                    });
            }
        }
    };
}

function dependencyStanza(va: VersionedArtifact) {
    return `<dependency>
    <groupId>${va.group}</groupId>
    <artifactId>${va.artifact}</artifactId>${!!va.version ? `\n<version>${va.version}</version>` : ""}
</dependency>`;
}
