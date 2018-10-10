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

import { ProjectFile } from "@atomist/automation-client";

/**
 * Indent the given content appropriately. it should have its
 * own internal indentation
 * @param {string} what
 * @param {string} indentToUse
 * @param {number} n
 * @return {string}
 */
export function indent(what: string, indentToUse: string, n: number): string {
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

/**
 * Insert at the given position
 * @param {File} f
 * @param {number} position
 * @param {string} what
 * @return {Promise<void>}
 */
export async function insertAt(f: ProjectFile, position: number, what: string): Promise<ProjectFile> {
    const oldContent = await f.getContent();
    const newContent = oldContent.substr(0, position) + what + oldContent.substr(position);
    return f.setContent(newContent);
}

/**
 * Return the count of characters till the desired character is found
 * @param {string} s
 * @param {string} char
 * @return {number}
 */
export function countTill(s: string, char: string): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i);
        if (c === char) {
            break;
        }
        count++;
    }
    return count;
}
