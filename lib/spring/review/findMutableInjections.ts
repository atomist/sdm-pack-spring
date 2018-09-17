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
    findMatches,
    Project,
    ProjectReview,
    ReviewComment,
    Severity,
    SourceLocation,
} from "@atomist/automation-client";
import { JavaSourceFiles } from "../../java/javaProjectUtils";

export class MutableInjection implements ReviewComment {

    public severity: Severity = "warn";
    public category = "Mutable injection";

    constructor(public name: string, public type: "field" | "setter",
                public sourceLocation: SourceLocation) {
    }

    get detail() {
        return `Improper Spring injection: Mutable ${this.type} ${this.name} is injected`;
    }

}

// TODO will eventually use OR predicates - for @Inject
const InjectedFields = `//classBodyDeclaration[//annotation[@value='@Autowired']]
                            //fieldDeclaration//variableDeclaratorId |
                         //classBodyDeclaration[//annotation[@value='@Inject']]
                            //fieldDeclaration//variableDeclaratorId |
                         //classBodyDeclaration[//annotation[@value='@Autowired']]
                            //methodDeclaration//Identifier[1] |
                         //classBodyDeclaration[//annotation[@value='@Inject']]
                            //methodDeclaration//Identifier[1]`;

const globPattern: string = JavaSourceFiles;

/**
 * Find all fields or setters annotated with @Autowired or @Inject in the codebase.
 * This is an undesirable usage pattern in application code, although
 * acceptable in tests.
 * @param {Project} p project to search
 * location of source tree.
 */
export async function findMutableInjections(p: Project): Promise<ProjectReview> {
    const fileHits = await findMatches(p, JavaFileParser, globPattern, InjectedFields);
    const comments = fileHits.map(m => new MutableInjection(
        m.$value,
        m.$value.startsWith("set") ? "setter" : "field",
        m.sourceLocation));
    return {
        repoId: p.id,
        comments,
    };
}