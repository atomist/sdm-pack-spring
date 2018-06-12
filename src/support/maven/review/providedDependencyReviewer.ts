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

import { DefaultReviewComment, ReviewComment } from "@atomist/automation-client/operations/review/ReviewResult";
import { File } from "@atomist/automation-client/project/File";
import { Project } from "@atomist/automation-client/project/Project";
import { ReviewerRegistration } from "@atomist/sdm";
import { promisify } from "util";
import * as xml2js from "xml2js";

import * as _ from "lodash";
import { IsMaven } from "../pushTests";

// JESS: Moved from sample-sdm to sdm-pack-spring

export const ProvidedDependencyCategory = "Use of `provided` dependencies in Maven POM";

/**
 * Ban Maven "provided" properties
 */
export const ProvidedDependencyReviewer: ReviewerRegistration = {
    name: ProvidedDependencyCategory,
    pushTest: IsMaven,
    action: async pil => {
        return {
            repoId: pil.id,
            comments: await findProvidedProperties(pil.project),
        };
    },
};

async function findProvidedProperties(p: Project): Promise<ReviewComment[]> {
    const pom = await p.getFile("pom.xml");
    if (!pom) {
        return [];
    }
    const parsed = await parsePom(pom);
    const dependencies = _.get<Array<{ dependency: { scope: string[] } }>>(parsed, "project.dependencies", []);
    return dependencies
        .map(d => d.dependency[0])
        .filter(dep => !!dep.scope && dep.scope.length === 1 && dep.scope[0] === "provided")
        .map(dep => new DefaultReviewComment("error",
            ProvidedDependencyCategory,
            `Provided dependency: ${JSON.stringify(dep)}`,
            {
                path: "pom.xml",
                lineFrom1: 1,
                offset: -1,
            }));
}

async function parsePom(pom: File): Promise<any> {
    const xml = await pom.getContent();
    const parser = new xml2js.Parser();
    return promisify(parser.parseString)(xml);
}
