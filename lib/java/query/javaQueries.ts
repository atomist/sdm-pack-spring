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

import { Java9FileParser } from "@atomist/antlr";
import {
    astUtils,
    Project,
} from "@atomist/automation-client";
import {
    BoundedElement,
    toBoundedElement,
} from "../../util/BoundedElement";
import { annotationsOnJavaClass } from "./javaPathExpressions";

export type Annotation = BoundedElement;

export async function existingAnnotations(p: Project, opts: {
    sourceFilePath: string,
    className: string,
}): Promise<Annotation[]> {
    return astUtils.gatherFromMatches(p, Java9FileParser, opts.sourceFilePath,
        annotationsOnJavaClass(opts.className),
        toBoundedElement);
}
