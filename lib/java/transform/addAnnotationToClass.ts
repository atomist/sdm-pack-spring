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
import { astUtils } from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { classNameFromFqn } from "../javaProjectUtils";
import { javaClassDeclarationWithName } from "../query/javaPathExpressions";
import { existingAnnotations } from "../query/javaQueries";
import { addImport } from "./imports";

/**
 * Add the given annotation to the given class.
 * Does not add an import or attempt to unpack annotation
 * Do nothing if not found
 * @return {CodeTransform}
 */
export function addAnnotationToClassRaw(opts: {
    sourceFilePath: string,
    className: string,
    annotationName: string,
}): CodeTransform {
    return async p => {
        const existing = await existingAnnotations(p, opts);
        if (!existing.some(ann => ann.value.startsWith("@" + opts.annotationName))) {
            await astUtils.doWithAllMatches(p,
                JavaFileParser,
                opts.sourceFilePath,
                javaClassDeclarationWithName(opts.className), m => {
                    m.$value = `@${opts.annotationName}\n${m.$value}`;
                });
        }
    };
}

/**
 * Add the given annotation to the given class.
 * Does not add an import or attempt to unpack annotation
 * Do nothing if not found
 * @return {CodeTransform}
 */
export function addAnnotationToClass(opts: {
    sourceFilePath: string,
    className: string,
    annotationFqn: string,
}): CodeTransform {
    return async (p, ci) => {
        await addImport({ sourceFilePath: opts.sourceFilePath, fqn: opts.annotationFqn })(p, ci);
        await addAnnotationToClassRaw({
            sourceFilePath: opts.sourceFilePath,
            className: opts.className,
            annotationName: classNameFromFqn(opts.annotationFqn),
        })(p, ci);
    };
}
