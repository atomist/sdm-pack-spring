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
import {
    DefaultReviewComment,
    ReviewComment,
} from "@atomist/automation-client/operations/review/ReviewResult";
import { File } from "@atomist/automation-client/project/File";
import { Project } from "@atomist/automation-client/project/Project";
import { saveFromFilesAsync } from "@atomist/automation-client/project/util/projectUtils";
import { ReviewerRegistration } from "@atomist/sdm";
import * as _ from "lodash";

import * as props from "properties-reader";
import { HasSpringPom } from "../pushTests";

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
export const HardCodedPropertyReviewer: ReviewerRegistration = {
    name: HardcodePropertyCategory,
    pushTest: HasSpringPom,
    action: async pil => {
        return {
            repoId: pil.id,
            comments: await badPropertiesStrings(pil.project),
        };
    },
};

async function badPropertiesStrings(p: Project): Promise<ReviewComment[]> {
    const arrArr = saveFromFilesAsync(p, "src/main/resources/*.properties",
        badPropertiesIn);
    return _.flatten(await arrArr);
}

async function badPropertiesIn(f: File): Promise<ReviewComment[]> {
    const content = await f.getContent();
    const read = props(undefined);
    read.read(content);
    const comments: ReviewComment[] = [];
    const obj = read.getAllProperties();
    for (const toLookAt of PropertyKeysToCheck) {
        const val = obj[toLookAt];
        if (!!val) {
            if (hardcoded(val)) {
                logger.info("Value of %s: '%s' is hard coded", toLookAt, val);
                comments.push(new DefaultReviewComment("info",
                    HardcodePropertyCategory,
                    `Hardcoded property ${toLookAt} should be sourced from environment`,
                    {
                        path: f.path,
                        lineFrom1: 1,
                        offset: -1,
                    }));
            } else {
                logger.info("Value of %s: '%s' is not hard coded", toLookAt, val);
            }
        }
    }

    return comments;
}

function hardcoded(value: props.Value) {
    const s = value.toString();
    return !s.includes("${");
}
