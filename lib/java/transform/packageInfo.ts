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
    Project,
} from "@atomist/automation-client";
import { BoundedElement } from "../../util/BoundedElement";
import { JavaPackage } from "../path-expressions/javaPathExpressions";

export interface PackageInfo extends BoundedElement {

    fqn: string;
}

/**
 * Return the imports already in this project
 * @param {Project} p
 * @param {string} path
 * @return {Promise<Import[]>}
 */
export async function packageInfo(p: Project, path: string): Promise<PackageInfo> {
    const packages = await gatherFromMatches(p, JavaFileParser, path, JavaPackage, m => {
        return {
            fqn: m.$children.find(c => c.$name === "qualifiedName").$value,
            offset: m.$offset,
            insertAfter: m.$offset + m.$value.length,
        };
    });
    return packages.length === 1 ? packages[0] : undefined;
}
