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

import { JavaPackageRegExp, MavenArtifactIdRegExp, MavenGroupIdRegExp } from "../javaPatterns";

/**
 * Java project generator parameters definitions.
 */
export const JavaProjectCreationParameters = {

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

    // get artifactId() {
    //     return this.enteredArtifactId || this.target.repo;
    // }

};
