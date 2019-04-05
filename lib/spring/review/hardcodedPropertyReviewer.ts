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

import {
    logger,
    Project,
    ProjectFile,
    projectUtils,
    ReviewComment,
} from "@atomist/automation-client";
import { ReviewerRegistration } from "@atomist/sdm";
import * as _ from "lodash";
import { CloudNative } from "../../common/review/reviewCategories";
import { parseProperties } from "../../properties/propertiesParser";
import { HasSpringBootApplicationClass } from "../pushtest/pushTests";

const PropertyKeysToCheck = [
    "server.port",
    "spring.datasource.url",
    "spring.datasource.username",
    "spring.datasource.password",
];

export const HardcodePropertyCategory = "Hardcoded properties";

/**
 * Reviewer that finds hard-coded properties
 */
export const HardcodedPropertyReviewer: ReviewerRegistration = {
    name: HardcodePropertyCategory,
    pushTest: HasSpringBootApplicationClass,
    inspection: async project => {
        return {
            repoId: project.id,
            comments: await badPropertiesStrings(project),
        };
    },
};

async function badPropertiesStrings(p: Project): Promise<ReviewComment[]> {
    const arrArr = projectUtils.gatherFromFiles(p, "src/main/resources/*.properties",
        f => badPropertiesIn(p, f));
    return _.flatten(await arrArr);
}

async function badPropertiesIn(p: Project, f: ProjectFile): Promise<ReviewComment[]> {
    const comments: ReviewComment[] = [];
    const parsed = await parseProperties(p, f.path);
    for (const prop of parsed.properties) {
        if (PropertyKeysToCheck.includes(prop.key) && !!prop.value) {
            if (hardcoded(prop.value)) {
                logger.info("Value of %s: '%s' is hard coded", prop.key, prop.value);
                comments.push({
                    severity: "info",
                    category: CloudNative,
                    subcategory: HardcodePropertyCategory,
                    detail: `Hardcoded property ${prop.key} should be sourced from environment`,
                    sourceLocation: {
                        path: f.path,
                        lineFrom1: 1,
                        offset: -1,
                    },
                });
            } else {
                logger.info("Value of %s: '%s' is not hard coded", prop.key, prop.value);
            }
        }
    }

    return comments;
}

function hardcoded(value: string) {
    return !value.includes("${");
}
