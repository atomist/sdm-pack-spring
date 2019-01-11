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

import { SeedDrivenGeneratorParameters } from "@atomist/automation-client";
import { ParametersObject } from "@atomist/sdm";
import {
    JavaPackageRegExp,
    MavenArtifactIdRegExp,
    MavenGroupIdRegExp,
} from "../javaPatterns";

/**
 * Parameter interface for Java project creation.
 */
export interface JavaProjectCreationParameters extends SeedDrivenGeneratorParameters {

    enteredArtifactId?: string;

    groupId: string;

    rootPackage: string;

    version: string;

    description?: string;
}

/**
 * Java project generator parameters definitions.
 */
export const JavaProjectCreationParameterDefinitions: ParametersObject<any, any> = {

    enteredArtifactId: {
        ...MavenArtifactIdRegExp,
        displayName: "artifactId",
        required: false,
        defaultValue: "",
        order: 51,
    },

    groupId: {
        ...MavenGroupIdRegExp,
        required: true,
        order: 50,
    },

    rootPackage: {
        ...JavaPackageRegExp,
        required: true,
        order: 53,
    },

    version: {
        pattern: /.*/,
        description: "Version to use",
        required: false,
        defaultValue: "0.1.0-SNAPSHOT",
    },

};

/**
 * Compute the artifact id to use from the given parameters.
 * Falls back to repo name if not provided
 * @param {JavaProjectCreationParameters} params
 * @return {string}
 */
export function computeArtifactId(params: JavaProjectCreationParameters): string {
    return params.enteredArtifactId || params.target.repoRef.repo;
}
