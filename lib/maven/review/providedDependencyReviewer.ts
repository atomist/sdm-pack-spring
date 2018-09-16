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

import {
    DefaultReviewComment,
    Project,
    ReviewComment,
} from "@atomist/automation-client";
import { ReviewerRegistration } from "@atomist/sdm";
import { findDeclaredDependencies } from "../parse/fromPom";
import { IsMaven } from "../pushTests";

export const ProvidedDependencyCategory = "Use of `provided` dependencies in Maven POM";

/**
 * Ban Maven "provided" properties
 */
export const ProvidedDependencyReviewer: ReviewerRegistration = {
    name: ProvidedDependencyCategory,
    pushTest: IsMaven,
    inspection: async project => {
        return {
            repoId: project.id,
            comments: await findProvidedProperties(project),
        };
    },
};

async function findProvidedProperties(p: Project): Promise<ReviewComment[]> {
    const dependencies = await findDeclaredDependencies(p);
    return dependencies.dependencies
        .filter(dep => !!dep.scope && dep.scope === "provided")
        .map(dep => new DefaultReviewComment("error",
            ProvidedDependencyCategory,
            `Provided dependency: ${JSON.stringify(dep)}`,
            {
                path: "pom.xml",
                lineFrom1: 1,
                offset: -1,
            }));
}
