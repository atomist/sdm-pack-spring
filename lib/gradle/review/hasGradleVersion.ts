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
    Project,
    ReviewComment,
    Severity,
} from "@atomist/automation-client";
import { ReviewerRegistration } from "@atomist/sdm";
import { IsGradle } from "../pushtest/gradlePushTests";

/**
 * Checks whether a project has a gradle.properties and if so, if a version
 * is defined in that properties file.
 */
export const GradleVersionDefinedInPropertiesInspection: ReviewerRegistration = {
    name: "gradle-version-properties-check",
    pushTest: IsGradle,
    inspection: async project => {
        return {
            repoId: project.id,
            comments: await findVersionDefinitionInGradleProperties(project),
        };
    },
};

async function findVersionDefinitionInGradleProperties(p: Project): Promise<ReviewComment[]> {
    const comments: ReviewComment[] = [];
    if (p.hasFile("gradle.properties")) {
        const gradlePropertiesContent = await (await p.getFile("gradle.properties")).getContent();
        if (!gradlePropertiesContent.match(/[version=].*/)) {
            comments.push({
                severity: "error" as Severity,
                category: "gradle",
                detail: `No version found in gradle.properties`,
            });
        }
    } else {
        comments.push({
            severity: "error" as Severity,
            category: "gradle",
            detail: `No gradle.properties found`,
        });
    }
    return comments;
}
