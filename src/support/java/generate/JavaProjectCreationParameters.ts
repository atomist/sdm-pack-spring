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

import { Parameter } from "@atomist/automation-client";
import { Parameters } from "@atomist/automation-client/decorators";
import { SeedDrivenGeneratorParametersSupport } from "@atomist/sdm";
import {
    JavaPackageRegExp,
    MavenArtifactIdRegExp,
    MavenGroupIdRegExp,
} from "@atomist/sdm/handlers/commands/support/java/javaPatterns";

/**
 * Superclass for all Java project generator parameters.
 */
@Parameters()
export abstract class JavaProjectCreationParameters extends SeedDrivenGeneratorParametersSupport {

    @Parameter({
        ...MavenArtifactIdRegExp,
        displayName: "artifactId",
        required: false,
        order: 51,
    })
    public enteredArtifactId: string = "";

    @Parameter({
        ...MavenGroupIdRegExp,
        required: true,
        order: 50,
    })
    public groupId: string;

    @Parameter({
        ...JavaPackageRegExp,
        required: true,
        order: 53,
    })
    public rootPackage: string;

    get artifactId() {
        return this.enteredArtifactId || this.target.repo;
    }

}
