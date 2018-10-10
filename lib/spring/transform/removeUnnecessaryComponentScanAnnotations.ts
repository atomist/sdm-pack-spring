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

import { JavaFileParser } from "@atomist/antlr";
import {
    astUtils,
    ProjectReview,
    Severity,
} from "@atomist/automation-client";
import { ZapTrailingWhitespace } from "@atomist/automation-client/lib/tree/ast/FileHits";
import {
    AutofixRegistration,
    CodeInspection,
    CodeTransform,
    ReviewerRegistration,
} from "@atomist/sdm";
import { JavaSourceFiles } from "../../java/javaProjectUtils";
import { SpringStyle } from "../review/springReviewCategories";

/**
 * An @ComponentScan annotation isn't necessary on a @SpringBootApplication class.
 * Remove it.
 * @type {string}
 */
const UnnecessaryComponentScanAnnotations = `//typeDeclaration[/classDeclaration]
                            [//annotation[@value='@SpringBootApplication']]
                            //annotation[@value='@ComponentScan']`;

export const removeUnnecessaryComponentScanTransform: CodeTransform = p => {
    return astUtils.zapAllMatches(p, JavaFileParser, JavaSourceFiles,
        UnnecessaryComponentScanAnnotations,
        ZapTrailingWhitespace);
};

export const UnnecessaryComponentScanCategory = "unnecessary annotations";

export const unnecessaryComponentScanReviewer: CodeInspection<ProjectReview> = async p => {
        const matches = await astUtils.findMatches(p, JavaFileParser, JavaSourceFiles, UnnecessaryComponentScanAnnotations);
        return {
            repoId: p.id,
            comments: matches.map(m => {
                return {
                    severity: "info" as Severity,
                    category: SpringStyle,
                    subcategory: UnnecessaryComponentScanCategory,
                    detail: "`@ComponentScan` annotations are not necessary on `@SpringBootApplication` classes as they are inherited",
                    sourceLocation: m.sourceLocation,
                    fix: {
                        command: "RemoveUnnecessaryComponentScanAnnotations",
                        params: {
                            "target.owner": p.id.owner,
                            "target.repo": p.id.repo,
                        },
                    },
                };
            }),
        };
    };

export const UnnecessaryComponentScanReviewer: ReviewerRegistration = {
    name: "unnecessary-component-scan-reviewer",
    inspection: unnecessaryComponentScanReviewer,
};

export const UnnecessaryComponentScanAutofix: AutofixRegistration = {
    name: "Unnecessary @ComponentScan",
    transform: removeUnnecessaryComponentScanTransform,
};
