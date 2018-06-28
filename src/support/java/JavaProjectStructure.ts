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

import { logger } from "@atomist/automation-client";
import { ProjectAsync } from "@atomist/automation-client/project/Project";
import { findMatches } from "@atomist/automation-client/project/util/parseUtils";
import * as _ from "lodash";
import {
    JavaSourceFiles,
    KotlinSourceFiles,
} from "./javaProjectUtils";
import { JavaPackageDeclaration } from "./parse/JavaGrammars";

/**
 * Represents Java project structure (nested packages following Java naming conventions)
 * which can be inferred from project contents.
 * Also works for Kotlin.
 */
export class JavaProjectStructure {

    /**
     * Find root Java or Kotlin package
     * @param {ProjectAsync} p
     * @return {Promise<JavaProjectStructure>}
     */
    public static async infer(p: ProjectAsync): Promise<JavaProjectStructure> {
        // Treat Java and Kotlin as one
        const packages = (await findMatches(p, JavaSourceFiles, JavaPackageDeclaration))
            .concat(await findMatches(p, KotlinSourceFiles, JavaPackageDeclaration));
        const uniquePackages = _.uniq(packages.map(pack => pack.name));
        if (uniquePackages.length === 0) {
            return undefined;
        }
        if (uniquePackages.length === 1) {
            const jps = new JavaProjectStructure(uniquePackages[0]);
            logger.debug("Successful JavaProjectStructure inference on %j: Sole package is %j",
                p.id, jps);
            return jps;
        }
        const longestPrefix = sharedStart(uniquePackages);
        if (!!longestPrefix) {
            const jps = new JavaProjectStructure(longestPrefix.replace(/\.$/, ""));
            logger.debug("Successful JavaProjectStructure inference on %j: Shortest path is %j",
                p.id, jps);
            return jps;
        } else {
            logger.debug("Unsuccessful JavaProjectStructure inference on %j", p.id);
            return undefined;
        }
    }

    /**
     * @param applicationPackage The first Java package found in the project.
     */
    constructor(public applicationPackage: string) {
    }

}

// Taken from https://stackoverflow.com/questions/1916218/find-the-longest-common-starting-substring-in-a-set-of-strings
function sharedStart(array: string[]): string {
    const A = array.concat().sort();
    if (!A) {
        return "";
    }
    const a1 = A[0];
    const a2 = A[A.length - 1];
    const L = a1.length;
    let i = 0;
    while (i < L && a1.charAt(i) === a2.charAt(i)) {
        i++;
    }
    return a1.substring(0, i);
}
