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

import { SimpleProjectEditor } from "@atomist/automation-client/operations/edit/projectEditor";

import * as _ from "lodash";
import { VersionedArtifact } from "../VersionedArtifact";
import { DependencyFinder } from "../parse/grammar/DependencyFinder";

// JESS: Moved to sdm-pack-spring from spring-automation

/**
 * Add the given dependency to projects. It's not an error
 * if the project doesn't have a POM. The editor will do nothing
 * in this case.
 * @param {VersionedArtifact} va
 * @return {SimpleProjectEditor}
 */
export function addDependencyEditor(va: VersionedArtifact): SimpleProjectEditor {
    return async project => {
        const pom = await project.getFile("pom.xml");
        if (pom) {
            const df = new DependencyFinder();
            const content = await pom.getContent();
            df.consume(content);
            if (_.findIndex<VersionedArtifact>(df.dependencies, d => d.group === va.group && d.artifact === va.artifact) < 0) {
                const depVersion = (va.version) ? `\n    <version>${va.version}</version>` : "";
                const toInsert = indent(`
<dependency>
    <groupId>${va.group}</groupId>
    <artifactId>${va.artifact}</artifactId>${depVersion}
</dependency>
\n`, "   ", 2);
                const newContent = content.slice(0, df.offset) + toInsert + content.slice(df.offset);
                await pom.setContent(newContent);
            }
        }
        return project;
    };
}

function indent(what: string, indentToUse: string, n: number): string {
    return what.split("\n")
        .map(line => {
            let pad = "";
            for (let i = 0; i < n; i++) {
                pad += indentToUse;
            }
            return pad + line;
        })
        .join("\n");
}