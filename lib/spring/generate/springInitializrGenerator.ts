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

import { RemoteLocator } from "@atomist/automation-client/operations/common/params/RemoteLocator";
import { RepoCreationParameters } from "@atomist/automation-client/operations/generate/RepoCreationParameters";
import {
    SmartParameters,
    ValidationResult,
} from "@atomist/automation-client/SmartParameters";
import { doWithRetry } from "@atomist/automation-client/util/retry";
import {
    NodeFsLocalProject,
    Parameter,
    Parameters,
    Project,
    SoftwareDeliveryMachine,
} from "@atomist/sdm";
import axios from "axios";
import * as decompress from "decompress";
import * as fs from "fs";
import * as path from "path";
import * as tmp from "tmp-promise";
import {
    JavaIdentifierRegExp,
    JavaPackageRegExp,
    MavenArtifactIdRegExp,
    MavenGroupIdRegExp,
} from "../../java/javaPatterns";
import { SetAtomistTeamInApplicationYml } from "./springBootTransforms";
import {
    SpringProjectCreationParameters,
} from "./SpringProjectCreationParameters";
import { TransformSeedToCustomProject } from "./transformSeedToCustomProject";

let metaData: any;

export function addSpringInitializrGenerator(sdm: SoftwareDeliveryMachine) {
    getSpringInitializrMetaData();
    sdm.addGeneratorCommand<SpringInitializrProjectCreationParameters>({
        name: "start.spring.io",
        intent: "spring initializr",
        description: "Create a new Spring Boot project using Spring Initializr",
        paramsMaker: SpringInitializrProjectCreationParameters,
        startingPoint: params => springInitializrProject(sdm, params),
        transform: [
            SetAtomistTeamInApplicationYml,
            TransformSeedToCustomProject,
        ],
    });
}

function getSpringInitializrMetaData(): any {
    return doWithRetry(() => axios.get("https://start.spring.io", {
        headers: {
            Accept: "application/vnd.initializr.v2.1+json",
        }}), "metadata").then(response => metaData = response.data);
}

function springInitializrProject(sdm: SoftwareDeliveryMachine, params: SpringInitializrProjectCreationParameters): Promise<Project> {
    const url = "https://start.spring.io/starter.zip";
    const tmpDir = tmp.dirSync({unsafeCleanup: true});
    const cwd = tmpDir.name;
    const lastSlash = url.lastIndexOf("/");
    const filename = url.substring(lastSlash + 1);
    const zipFile = path.join(cwd, filename);
    const urlParameters = getUrlParameters(params);
    const packageJson = require("../../../package.json");
    const headers = {
        "User-Agent": "atomist/sdm-pack-spring-" + packageJson.version,
    };
    return downloadFileAs(url, zipFile, urlParameters, headers)
        .then(() => decompress(zipFile, cwd))
        .then(() => fs.unlinkSync(zipFile))
        .then(() => new NodeFsLocalProject("spring-initializr-project", cwd));
}

function downloadFileAs(url: string, outputFilename: string, params?: any, headers?: any): Promise<any> {
    return doWithRetry(() => axios.get(url, {
        params,
        headers: {
            ...headers,
            "Accept": "application/octet-stream",
            "Content-Type": "application/zip",
        },
        responseType: "arraybuffer",
    }), `Download ${url} to ${outputFilename}`, {
        minTimeout: 10000,
        maxTimeout: 10100,
        retries: 10,
    })
        .then(result => {
            return fs.writeFileSync(outputFilename, result.data);
        });
}

function getUrlParameters(params: SpringInitializrProjectCreationParameters): any {
    return {
        artifactId: params.enteredArtifactId,
        type: params.projectType,
        groupId: params.groupId,
        packageName: params.rootPackage,
        dependencies: params.dependencies,
        language: params.language,
        bootVersion: params.bootVersion,
        packaging: params.packaging,
        javaVersion: params.javaVersion,
    };
}

@Parameters()
export class SpringInitializrProjectCreationParameters implements SmartParameters, SpringProjectCreationParameters {

    @Parameter({
        displayName: "Project Type",
        description: "type of project",
        required: false,
    })
    public projectType?: string;

    @Parameter({
        displayName: "Spring Boot dependencies",
        description: "comma separated list of dependencies",
        required: false,
    })
    public dependencies?: string;

    @Parameter({
        displayName: "Programming language",
        description: "language (java, kotlin or groovy, default java)",
        required: false,
    })
    public language?: string;

    @Parameter({
        displayName: "Spring Boot version",
        description: "Version of Spring Boot you want to use",
        required: false,
    })
    public bootVersion?: string;

    @Parameter({
        displayName: "Packaging",
        description: "packaging (jar or war, default jar)",
        required: false,
    })
    public packaging?: string;

    @Parameter({
        displayName: "Java version level",
        description: "Java version level (8 or 10, default 8)",
        required: false,
    })
    public javaVersion?: string;

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

    @Parameter({
        pattern: /.*/,
        description: "Version to use",
        required: false,
    })
    public version: string = "0.1.0-SNAPSHOT";

    @Parameter({
        displayName: "Class Name",
        description: "name for the service class",
        ...JavaIdentifierRegExp,
        required: false,
    })
    public enteredServiceClassName?: string;

    public addAtomistWebhook: boolean = true;
    public source: RemoteLocator;
    public target: RepoCreationParameters;
    public description?: string;

    @Parameter({
        ...MavenArtifactIdRegExp,
        displayName: "artifactId",
        required: false,
        order: 51,
    })
    public enteredArtifactId?: string = "";

    public bindAndValidate(): ValidationResult | Promise<ValidationResult> {
        const validationErrors = [];
        if (this.bootVersion) {
            const springBootVersions = metaData.bootVersion.values.map((v: any) => v.id) as string[];
            if (!springBootVersions.includes(this.bootVersion)) {
                validationErrors.push("Spring Boot version is invalid, should be one of: " + springBootVersions.join(", "));
            }
        }
        if (this.packaging) {
            const packagings = metaData.packaging.values.map((v: any) => v.id) as string[];
            if (!packagings.includes(this.packaging)) {
                validationErrors.push("Packaging is invalid, should be one of: " + packagings.join(", "));
            }
        }
        if (this.language) {
            const languages = metaData.language.values.map((v: any) => v.id) as string[];
            if (!languages.includes(this.language)) {
                validationErrors.push("Language is invalid, should be one of: " + languages.join(", "));
            }
        }
        if (this.projectType) {
            const types = metaData.type.values.map((v: any) => v.id) as string[];
            if (!types.includes(this.projectType)) {
                validationErrors.push("Project type is invalid, should be one of: " + types.join(", "));
            }
        }
        if (this.javaVersion) {
            const versions = metaData.javaVersion.values.map((v: any) => v.id) as string[];
            if (!versions.includes(this.javaVersion)) {
                validationErrors.push("Java version is invalid, should be one of: " + versions.join(", "));
            }
        }
        if (this.javaVersion) {
            const versions = metaData.javaVersion.values.map((v: any) => v.id) as string[];
            if (!versions.includes(this.javaVersion)) {
                validationErrors.push("Java version is invalid, should be one of: " + versions.join(", "));
            }
        }
        if (this.dependencies) {
            const dependencyGroups = metaData.dependencies.values.map((v: any) => v.values) as any[];
            const knownDependencies = [].concat(...dependencyGroups).map((v: any) => v.id) as string[];
            const dependencies = this.dependencies.split(",");
            const wrongDependencies = dependencies.filter(d => !knownDependencies.includes(d));
            if (wrongDependencies) {
                validationErrors.push("Unknown dependencies found: " + wrongDependencies.join(", "));
            }
        }
        if (validationErrors && validationErrors.length > 0) {
            return { message: validationErrors.join("\n")};
        }
    }
}