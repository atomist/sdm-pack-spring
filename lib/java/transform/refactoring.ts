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

import { AllJavaAndKotlinFiles, movePackage, renameClass } from "../javaProjectUtils";
import { CodeTransform } from "@atomist/sdm";

/**
 * Move files from one package to another. Defaults to
 * working on all Java and Kotlin source. Will work for Scala
 * if you pass in the appropriate glob pattern to select the files you want.
 *
 * @param oldPackage   name of package to move from
 * @param newPackage   name of package to move to
 * @param globPattern  glob to select files. Defaults to all Java files in the project
 */
export function movePackageTransform(oldPackage: string,
                                     newPackage: string,
                                     globPattern: string = AllJavaAndKotlinFiles): CodeTransform {
    return async p => movePackage(p, oldPackage, newPackage, globPattern);
}

export function renameClassTransform(oldClass: string,
                                     newClass: string): CodeTransform {
    return async p => renameClass(p, oldClass, newClass);
}
