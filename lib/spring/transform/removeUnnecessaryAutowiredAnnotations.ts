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
} from "@atomist/automation-client";
import {
    allSatisfied,
    AutofixRegistration,
    CodeTransform,
} from "@atomist/sdm";
import { JavaSourceFiles } from "../../java/javaProjectUtils";
import { IsSpringBoot2Project } from "../pushtest/pushTests";

// TODO this path expression is non-performant as it doesn't use @Value
// The logic in this class is also probably incorrect
const Constructors = `//classBodyDeclaration[//constructorDeclaration]`;

/**
 * A single constructor doesn't need an @Autowired annotation
 * @param {Project} p
 * @return {Promise<void>}
 */
export const removeAutowiredOnSoleConstructor: CodeTransform = async p => {
    const constructors = await astUtils.findMatches(p, Java9FileParser, JavaSourceFiles, Constructors);
    if (constructors.length === 1 && constructors[0].$value.includes("@Autowired")) {
        await astUtils.doWithAllMatches(p, Java9FileParser, JavaSourceFiles, Constructors, constructor =>
            constructor.$value = constructor.$value.replace(/@Autowired[\s]+/, ""));
    }
};

export const FixAutowiredOnSoleConstructor: AutofixRegistration = {
    name: "Unnecessary @Autowired",
    pushTest: allSatisfied(IsSpringBoot2Project),
    transform: removeAutowiredOnSoleConstructor,
    options: {
        ignoreFailure: false,
    },
};
