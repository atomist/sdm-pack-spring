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

import { Java9FileParser } from "@atomist/antlr";
import {
    astUtils,
    Project,
    ProjectReview,
    ReviewComment,
    Severity,
    SourceLocation,
} from "@atomist/automation-client";
import { ReviewerRegistration } from "@atomist/sdm";
import { JavaSourceFiles } from "../../java/javaProjectUtils";
import * as category from "./springReviewCategories";

export class NonSpecificMvcAnnotation implements ReviewComment {

    public readonly severity: Severity = "info";
    public readonly category: string = category.SpringStyle;
    public readonly subcategory: string = "Old style MVC annotation";

    constructor(public raw: string, public sourceLocation: SourceLocation) {
    }

    get detail(): string {
        return `Old style Spring MVC \`@RequestAnnotation\`: Use specific mapping`;
    }
}

const RequestMappingAnnotation = `//annotation[//typeName[@value='RequestMapping']]`;

/**
 * Find all non specific, old style @RequestMapping annotations
 * @param {Project} p project to search
 * @param globPattern glob pattern. Defaults to Maven convention Java source files
 * location of source tree.
 */
export async function findNonSpecificMvcAnnotations(p: Project, globPattern: string = JavaSourceFiles): Promise<ProjectReview> {
    return {
        repoId: p.id,
        comments: await astUtils.gatherFromMatches(p, Java9FileParser, globPattern, RequestMappingAnnotation,
            m => new NonSpecificMvcAnnotation(
                m.$value,
                m.sourceLocation)),
    };
}

export const NonSpecificMvcAnnotationsReviewer: ReviewerRegistration = {
    name: "non-specific-mvc-annotations-reviewer",
    inspection: async p => findNonSpecificMvcAnnotations(p),
};
