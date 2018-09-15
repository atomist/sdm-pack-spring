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
