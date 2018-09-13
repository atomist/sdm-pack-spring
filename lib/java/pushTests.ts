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
import { fileExists } from "@atomist/automation-client/project/util/projectUtils";
import {
    predicatePushTest,
    pushTest,
    PushTest,
} from "@atomist/sdm";
import {
    anyFileChangedWithExtension,
    filesChangedSince,
} from "@atomist/sdm/api-helper/misc/git/filesChangedSince";

export const IsJava: PushTest = predicatePushTest(
    "Is Java",
    async p =>
        fileExists(p, "**/*.java", () => true));

const FileToWatch = ["java", "html", "json", "yml", "xml", "sh", "kt", "properties"];

/**
 * Veto if change to deployment unit doesn't seem important enough to
 * build and deploy
 */
export const MaterialChangeToJavaRepo: PushTest = pushTest("Material change to Java repo", async pci => {
    const changedFiles = await filesChangedSince(pci.project, pci.push);
    if (!changedFiles) {
        logger.info("Cannot determine if change is material on %j: can't enumerate changed files", pci.id);
        return true;
    }
    logger.debug(`MaterialChangeToJavaRepo: Changed files are [${changedFiles.join(",")}]`);
    if (anyFileChangedWithExtension(changedFiles, FileToWatch)) {
        logger.debug("Change is material on %j: changed files=[%s]", pci.id, changedFiles.join(","));
        return true;
    }
    logger.debug("Change is immaterial on %j: changed files=[%s]", pci.id, changedFiles.join(","));
    return false;
});
