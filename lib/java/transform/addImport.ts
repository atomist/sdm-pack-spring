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

import { JavaFileParser } from "@atomist/antlr";
import {
    gatherFromMatches,
    logger,
    Project,
} from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import * as _ from "lodash";
import {
    countTill,
    insertAt,
} from "../../util/formatUtils";
import { JavaImportNames } from "../query/javaPathExpressions";
import { packageInfo } from "../query/packageInfo";

export interface Import {

    fqn: string;

    /**
     * Offset within the file
     */
    offset: number;
}

/**
 * Return the imports already in this project
 * @param {Project} p
 * @param {string} path
 * @return {Promise<Import[]>}
 */
export async function existingImports(p: Project, path: string): Promise<Import[]> {
    return gatherFromMatches(p, JavaFileParser, path, JavaImportNames, m => {
        return {
            fqn: m.$value,
            offset: m.$offset,
        };
    });
}

/**
 * Add the given import if necessary
 * @return {CodeTransform}
 */
export function addImport(opts: {
    sourceFilePath: string,
    fqn: string,
}): CodeTransform {
    return async p => {
        const f = await p.getFile(opts.sourceFilePath);
        if (!f) {
            logger.warn("Cannot add import %s to %s: path not found", opts.fqn, opts.sourceFilePath);
            return;
        }
        let newImportLine = `import ${opts.fqn};\n`;

        const imports = await existingImports(p, opts.sourceFilePath);
        if (imports.some(i => i.fqn === opts.fqn)) {
            logger.warn("Doing nothing: import %s already present %s", opts.fqn, opts.sourceFilePath);
            return;
        }

        // Where to insert
        let position: number;
        if (imports.length === 0) {
            // No existing imports.
            // Must find where to put imports in this case.
            // First look for package
            const pi = await packageInfo(p, opts.sourceFilePath);
            if (!!pi) {
                position = pi.insertAfter;
                newImportLine = "\n\n" + newImportLine;
            } else {
                position = 0;
            }
        } else {
            const lastImport = _.last(imports);
            const content = await f.getContent();
            position = lastImport.offset + 1 + countTill(content.substr(lastImport.offset), ";");
            if (content.charAt(position) === "\n") {
                ++position;
            }
        }

        await insertAt(f,
            position,
            newImportLine);
    };
}
