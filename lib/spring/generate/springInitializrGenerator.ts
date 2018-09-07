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

import { doWithRetry } from "@atomist/automation-client/util/retry";
import { NodeFsLocalProject, ParametersObject, Project, SoftwareDeliveryMachine } from "@atomist/sdm";
import axios from "axios";
import * as decompress from "decompress";
import * as fs from "fs";
import * as path from "path";
import * as tmp from "tmp-promise";
import { SetAtomistTeamInApplicationYml } from "./springBootTransforms";
import {
    SpringProjectCreationParameterDefinitions,
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
        parameters: SpringInitializrProjectCreationParameterDefinitions,
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

function validateParameters(params: SpringInitializrProjectCreationParameters) {
    if (params.bootVersion) {
        const springBootVersions = metaData.bootVersion.values.map((v: any) => v.id) as string[];
        if (!springBootVersions.includes(params.bootVersion)) {
            throw new Error("Spring Boot version is invalid, should be one of: " + springBootVersions.join(", "));
        }
    }
    if (params.packaging) {
        const packagings = metaData.packaging.values.map((v: any) => v.id) as string[];
        if (!packagings.includes(params.packaging)) {
            throw new Error("Packaging is invalid, should be one of: " + packagings.join(", "));
        }
    }
    if (params.language) {
        const languages = metaData.language.values.map((v: any) => v.id) as string[];
        if (!languages.includes(params.language)) {
            throw new Error("Language is invalid, should be one of: " + languages.join(", "));
        }
    }
    if (params.projectType) {
        const types = metaData.type.values.map((v: any) => v.id) as string[];
        if (!types.includes(params.projectType)) {
            throw new Error("Project type is invalid, should be one of: " + types.join(", "));
        }
    }
    if (params.javaVersion) {
        const versions = metaData.javaVersion.values.map((v: any) => v.id) as string[];
        if (!versions.includes(params.javaVersion)) {
            throw new Error("Java version is invalid, should be one of: " + versions.join(", "));
        }
    }
    if (params.javaVersion) {
        const versions = metaData.javaVersion.values.map((v: any) => v.id) as string[];
        if (!versions.includes(params.javaVersion)) {
            throw new Error("Java version is invalid, should be one of: " + versions.join(", "));
        }
    }
    if (params.dependencies) {
        const knownDependencies = metaData.dependencies.values.flatMap((v: any) => v.values).map((v: any) => v.id) as string[]
        const dependencies = params.dependencies.split(",");
        const wrongDependencies = dependencies.filter(d => knownDependencies.includes(d))
        if(wrongDependencies) {
            throw new Error("Unknowm dependencies found: " + wrongDependencies.join(", "));
        }
    }
}

function springInitializrProject(sdm: SoftwareDeliveryMachine, params: SpringInitializrProjectCreationParameters): Promise<Project> {
    validateParameters(params);
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

interface SpringInitializrProjectCreationParameters extends SpringProjectCreationParameters {
    projectType: string;

    dependencies?: string;

    language: string;

    bootVersion?: string;

    packaging: string;

    javaVersion: string;
}

const SpringInitializrProjectCreationParameterDefinitions: ParametersObject = {
    projectType: {
        displayName: "Project Type",
        description: "type of project",
        required: false,
    },

    dependencies: {
        displayName: "Spring Boot dependencies",
        description: "comma separated list of dependencies",
        required: false,
    },

    bootVersion: {
        displayName: "Spring Boot version",
        description: "Version of Spring Boot you want to use",
        required: false,
    },

    language: {
        displayName: "Programming language",
        description: "language (java, kotlin or groovy, default java)",
        required: false,
    },

    javaVersion: {
        displayName: "Java version level",
        description: "Java version level (8 or 10, default 8)",
        required: false,
    },

    packaging: {
        displayName: "Packaging",
        description: "packaging (jar or war, default jar)",
        required: false,
    },

    ...SpringProjectCreationParameterDefinitions,
};
