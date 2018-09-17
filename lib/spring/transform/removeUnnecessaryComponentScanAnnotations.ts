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
import { findMatches, zapAllMatches } from "@atomist/automation-client";
import { ProjectReviewer } from "@atomist/automation-client/lib/operations/review/projectReviewer";
import { ZapTrailingWhitespace } from "@atomist/automation-client/lib/tree/ast/FileHits";
import { DefaultReviewComment } from "@atomist/automation-client/operations/review/ReviewResult";
import { CodeTransform } from "@atomist/sdm";
import { JavaSourceFiles } from "../../java/javaProjectUtils";

const UnnecessaryComponentScanAnnotations = `//typeDeclaration[/classDeclaration]
                            [//annotation[@value='@SpringBootApplication']]
                            //annotation[@value='@ComponentScan']`;

export const removeUnnecessaryComponentScanEditor: CodeTransform = p => {
    return zapAllMatches(p, JavaFileParser, JavaSourceFiles,
        UnnecessaryComponentScanAnnotations,
        ZapTrailingWhitespace);
};

export const unnecessaryComponentScanReviewer: ProjectReviewer<any> = p => {
    return findMatches(p, JavaFileParser, JavaSourceFiles,
        UnnecessaryComponentScanAnnotations)
        .then(matches => {
            return {
                repoId: p.id,
                comments: matches.map(m => {
                    return new DefaultReviewComment("info", "unnecessary annotations",
                        "`@ComponentScan` annotations are not necessary on `@SpringBootApplication` classes as they are inherited",
                        m.sourceLocation,
                        {
                            command: "RemoveUnnecessaryComponentScanAnnotations",
                            params: {
                                "target.owner": p.id.owner,
                                "target.repo": p.id.repo,
                            },
                        });
                }),
            };
        });
};
