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

import { ReviewerRegistration } from "@atomist/sdm";
import { SpringBootVersionInspection } from "../inspect/springBootVersionInspection";
import { HasSpringBootPom } from "../pushtest/pushTests";
import { DesiredSpringBootVersion } from "../transform/tryToUpgradeSpringBootVersion";
import { SpringStyle } from "./springReviewCategories";

export const OldSpringBootVersion = "Old Spring Boot version";

/**
 * Check for old Spring Boot versions
 */
export const OldSpringBootVersionReviewer: ReviewerRegistration = {
    name: OldSpringBootVersion,
    pushTest: HasSpringBootPom,
    inspection: async (p, ci) => {
        const versions = await SpringBootVersionInspection(p, ci);
        const version = !!versions && versions.versions.length === 1 ?
            versions.versions[0].version :
            undefined;
        return {
            repoId: p.id,
            comments: !!version && version < DesiredSpringBootVersion ?
                [
                    {
                        category: SpringStyle,
                        subcategory: OldSpringBootVersion,
                        severity: "info",
                        detail: `Spring Boot version ${version} is old`,
                        sourceLocation: {
                            path: "pom.xml",
                            offset: -1,
                        },
                    },
                ] :
                [],
        };
    },
};
