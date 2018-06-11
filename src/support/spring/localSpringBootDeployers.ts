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

import { Deployer, ProjectLoader } from "@atomist/sdm";
import { StartupInfo } from "@atomist/sdm/internal/delivery/deploy/local/LocalDeployerOptions";
import { ManagedDeploymentTargetInfo } from "@atomist/sdm/internal/delivery/deploy/local/ManagedDeployments";
import { mavenDeployer } from "../maven/mavenDeployer";
import { executableJarDeployer } from "../java/executableJarDeployer";

// JESS: MOVED from sample-sdm

/** Successs patterns when Spring Boot starts
 * @type {RegExp}
 */
export const SpringBootSuccessPatterns = [
    /Tomcat started on port/,
    /Started [A-Za-z0-9_$]+ in [0-9]+.[0-9]+ seconds/,
];

export const LocalExecutableJarDeployer: Deployer<ManagedDeploymentTargetInfo> = executableJarDeployer({
    baseUrl: "http://localhost",
    lowerPort: 8082,
    commandLineArgumentsFor: springBootExecutableJarArgs,
    successPatterns: SpringBootSuccessPatterns,
});

function springBootExecutableJarArgs(si: StartupInfo): string[] {
    return [
        `--server.port=${si.port}`,
        `--server.contextPath=${si.contextRoot}`,
    ];
}

export function mavenSourceDeployer(projectLoader: ProjectLoader): Deployer<ManagedDeploymentTargetInfo> {
    return mavenDeployer(projectLoader, {
        baseUrl: "http://localhost",
        lowerPort: 9090,
        commandLineArgumentsFor: springBootMavenArgs,
        successPatterns: SpringBootSuccessPatterns,
    });
}

function springBootMavenArgs(si: StartupInfo): string[] {
    return [
        `-Dserver.port=${si.port}`,
        `-Dserver.contextPath=${si.contextRoot}`,
    ];
}
