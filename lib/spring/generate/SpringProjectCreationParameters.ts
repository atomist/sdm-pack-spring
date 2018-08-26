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
 * distributed unders the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ParametersObject } from "@atomist/sdm";
import {
    artifactId,
    JavaProjectCreationParameterDefinitions,
    JavaProjectCreationParameters,
} from "../../java/generate/JavaProjectCreationParameters";
import { JavaIdentifierRegExp } from "../../java/javaPatterns";

/**
 * Parameter interface for Spring Boot project creation
 */
export interface SpringProjectCreationParameters extends JavaProjectCreationParameters {

    /**
     * Service class name to use. Derived from artifact name
     * if not defined.
     */
    enteredServiceClassName?: string;

}

/**
 * Parameters for creating Spring Boot apps.
 * Based on Java project creation parameters.
 */
export const SpringProjectCreationParameterDefinitions: ParametersObject = {

    ...JavaProjectCreationParameterDefinitions,

    enteredServiceClassName: {
        displayName: "Class Name",
        description: "name for the service class",
        ...JavaIdentifierRegExp,
        required: false,
    },
};

export function serviceClassName(params: SpringProjectCreationParameters) {
    return !!params.enteredServiceClassName ?
        toInitialCap(params.enteredServiceClassName) :
        toInitialCap(camelize(artifactId(params)));
}

function toInitialCap(s: string) {
    return s.charAt(0).toUpperCase() + s.substr(1);
}

/**
 * Replace hyphens in a rule name by upper-casing the letter after them.
 * E.g. "foo-bar" -> "fooBar"
 */
function camelize(stringWithHyphens: string): string {
    return stringWithHyphens.replace(/-(.)/g, (_, nextLetter) => (nextLetter as string).toUpperCase());
}
