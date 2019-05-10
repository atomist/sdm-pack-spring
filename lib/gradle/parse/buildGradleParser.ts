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

import {
    LocalProject,
    Project,
} from "@atomist/automation-client";
import {
    spawnLog,
    StringCapturingProgressLog,
} from "@atomist/sdm";
import { ProjectIdentification } from "@atomist/sdm-core/lib/internal/delivery/build/local/projectIdentifier";
import { VersionedArtifact } from "../../maven/VersionedArtifact";
import { determineGradleCommand } from "../gradleCommand";

export async function getProjectVersion(p: Project): Promise<string> {
    let version: string;
    const versionRegex = /^version\s?=\s?["']?([0-9a-zA-Z.-]*)['"]?/m;
    if (await p.hasFile("gradle.properties")) {
        const gradleProperties = await (await p.getFile("gradle.properties")).getContent();
        const match = gradleProperties.match(versionRegex);
        if (!!match) {
            version = gradleProperties.match(versionRegex)[1];
        }
    } else if (await p.hasFile("build.gradle")) {
        const gradleBuild = await (await p.getFile("build.gradle")).getContent();
        const match = gradleBuild.match(versionRegex);
        if (!!match) {
            version = gradleBuild.match(versionRegex)[1];
        }
    } else if (await p.hasFile("build.gradle.kts")) {
        const gradleBuild = await (await p.getFile("build.gradle.kts")).getContent();
        const match = gradleBuild.match(versionRegex);
        if (!!match) {
            version = gradleBuild.match(versionRegex)[1];
        }
    }
    return version || "0.0.1-SNAPSHOT";

}

export async function getProjectGroup(p: Project): Promise<string> {
    let group: string;
    const groupRegex = /^group\s?=\s?["']?([0-9a-zA-Z.-]*)['"]?/m;
    if (await p.hasFile("gradle.properties")) {
        const gradleProperties = await (await p.getFile("gradle.properties")).getContent();
        const match = gradleProperties.match(groupRegex);
        if (!!match) {
            group = gradleProperties.match(groupRegex)[1];
        }
    } else if (await p.hasFile("build.gradle")) {
        const gradleBuild = await (await p.getFile("build.gradle")).getContent();
        const match = gradleBuild.match(groupRegex);
        if (!!match) {
            group = gradleBuild.match(groupRegex)[1];
        }
    } else if (await p.hasFile("build.gradle.kts")) {
        const gradleBuild = await (await p.getFile("build.gradle.kts")).getContent();
        const match = gradleBuild.match(groupRegex);
        if (!!match) {
            group = gradleBuild.match(groupRegex)[1];
        }
    }
    return group;
}

export async function getGradleModules(p: Project): Promise<string[]> {
    if (p.hasFile("settings.gradle")) {
        const pattern = /include ["']([a-zA-Z0-9\-:]+)["']/;
        const settingsContent = await (await p.getFile("settings.gradle")).getContent();
        const matches = settingsContent.split(/\r?\n/)
            .map(line => line.match(pattern))
            .filter(m => m && m.length > 0)
            .map(m => m[1]);
        return matches;
    }
    return Promise.reject("Not a multimodule project");
}

export async function getRuntimeClasspath(p: LocalProject, module?: string): Promise<string[]> {
    const initScript = `
allprojects {
    task generateRuntimeClasspath {
        def output = new File(rootDir, ".atomist-dependencies.txt");

        doLast {
            output.text = configurations.runtimeClasspath.resolve()
        }
    }
}

    `;
    const log = new StringCapturingProgressLog();
    p.addFileSync(".atomist.gradle", initScript);
    if (module) {
        await spawnLog(await determineGradleCommand(p), ["--init-script", ".atomist.gradle", "-q", `:${module}:generateRuntimeClasspath`], {log, cwd: p.baseDir});
    } else {
        await spawnLog(await determineGradleCommand(p), ["--init-script", ".atomist.gradle", "-q", `:generateRuntimeClasspath`], {log, cwd: p.baseDir});
    }
    p.deleteFileSync(".atomist.gradle");
    const output = await (await p.getFile(".atomist-dependencies.txt")).getContent();
    p.deleteFileSync(".atomist-dependencies.txt");
    const dependencies = output.substring(1, output.length - 1);
    return dependencies.split(", ");
}

export async function getCompileClasspath(p: LocalProject, module?: string): Promise<string[]> {
    const initScript = `
allprojects {
    task generateCompileClasspath {
        def output = new File(rootDir, ".atomist-dependencies.txt");

        doLast {
            output.text = configurations.compileClasspath.resolve()
        }
    }
}

    `;
    const log = new StringCapturingProgressLog();
    p.addFileSync(".atomist.gradle", initScript);
    if (module) {
        await spawnLog(await determineGradleCommand(p), ["--init-script", ".atomist.gradle", "-q", `:${module}:generateCompileClasspath`], {log, cwd: p.baseDir});
    } else {
        await spawnLog(await determineGradleCommand(p), ["--init-script", ".atomist.gradle", "-q", `:generateCompileClasspath`], {log, cwd: p.baseDir});
    }
    p.deleteFileSync(".atomist.gradle");
    const output = await (await p.getFile(".atomist-dependencies.txt")).getContent();
    p.deleteFileSync(".atomist-dependencies.txt");
    const dependencies = output.substring(1, output.length - 1);
    return dependencies.split(", ");
}

/**
 * Return the identification of a project: name and version
 * @param {Project} p
 * @return {Promise<any>}
 * @constructor
 */
export const GradleProjectIdentifier: (p: Project) => Promise<VersionedArtifact & ProjectIdentification> = async p => {
    const appName = p.name;
    const version = await getProjectVersion(p);
    const group = await getProjectGroup(p);
    return {
        name: appName,
        artifact: appName,
        version,
        group,
    };
};
