/*
 * Copyright © 2019 Atomist, Inc.
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

import { projectUtils } from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { SpringProjectCreationParameters } from "../../spring/generate/SpringProjectCreationParameters";

export function migrateGroupIdTransform(old: RegExp, replacement?: string): CodeTransform<SpringProjectCreationParameters> {
    return async (p, context, params) => {
        await projectUtils.doWithFiles(p, "**/pom.xml", async f => {
            const content = await f.getContent();
            const toReplace = new RegExp(`<groupId>${old.source}</groupId>`, "g");
            const replace = !!replacement ? `<groupId>${replacement}</groupId>` : `<groupId>${params.groupId}</groupId>`;
            await f.setContent(content.replace(toReplace, replace));
        });
        return p;
    };
}

function hasGroups(old: RegExp) {
    return /\(.*\)/.test(old.source);
}

export function migrateArtifactIdTransform(old: RegExp, replacement?: string): CodeTransform<SpringProjectCreationParameters> {
    return async p => {
        await projectUtils.doWithFiles(p, "**/pom.xml", async f => {
            const content = await f.getContent();
            const toReplace = new RegExp(`<artifactId>${old.source}</artifactId>`, "g");
            if (hasGroups(old)) {
                const replace = !!replacement
                    ? `<artifactId>${replacement}</artifactId>`
                    : `<artifactId>${p.id.repo}-$1</artifactId>`;
                await f.setContent(content.replace(toReplace, replace));
            } else {
                const replace = !!replacement
                    ? `<artifactId>${replacement}</artifactId>`
                    : `<artifactId>${p.id.repo}</artifactId>`;
                await f.setContent(content.replace(toReplace, replace));
            }
        });
    };
}
