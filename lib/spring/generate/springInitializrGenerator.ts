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

export function addSpringInitializrGenerator(sdm: SoftwareDeliveryMachine) {
    sdm.addGeneratorCommand<SpringInitializrProjectCreationParameters>({
        name: "start.spring.io",
        intent: "spring initializr",
        description: "Create a new Spring Boot project using Spring Initializr",
        parameters: SpringInitializrProjectCreationParameterDefinitions,
        startingPoint: springInitializrProject,
        transform: [
            SetAtomistTeamInApplicationYml,
            TransformSeedToCustomProject,
        ],
    });
}

function springInitializrProject(params: SpringInitializrProjectCreationParameters): Promise<Project> {
    const url = "https://start.spring.io/starter.zip";
    const tmpDir = tmp.dirSync({unsafeCleanup: true});
    const cwd = tmpDir.name;
    const lastSlash = url.lastIndexOf("/");
    const filename = url.substring(lastSlash + 1);
    const zipFile = path.join(cwd, filename);
    const urlParameters = getUrlParameters(params);
    return downloadFileAs(url, zipFile, urlParameters)
        .then(() => decompress(zipFile, cwd))
        .then(() => fs.unlinkSync(zipFile))
        .then(() => new NodeFsLocalProject("spring-initializr-project", cwd));
}

function downloadFileAs(url: string, outputFilename: string, params?: any): Promise<any> {
    return doWithRetry(() => axios.get(url, {
        params,
        headers: {
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
        validInput: "maven-project or gradle-project",
        pattern: /^(maven-project|gradle-project)$/,
        required: false,
        defaultValue: "maven-project",
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
        pattern: /^(java|kotlin|groovy)$/,
        required: false,
        defaultValue: "java",
    },

    javaVersion: {
        displayName: "Java version level",
        description: "Java version level (8 or 10, default 8)",
        pattern: /^(8|10)$/,
        required: false,
        defaultValue: "8",
    },

    packaging: {
        displayName: "Packaging",
        description: "packaging (jar or war, default jar)",
        pattern: /^(jar|war)$/,
        required: false,
        defaultValue: "jar",
    },

    ...SpringProjectCreationParameterDefinitions,
};
