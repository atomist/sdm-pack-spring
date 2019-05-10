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
    InMemoryProject,
    LocalProject,
    NodeFsLocalProject,
} from "@atomist/automation-client";
import * as _ from "lodash";
import {
    getCompileClasspath,
    getGradleModules,
    getRuntimeClasspath,
    GradleProjectIdentifier,
} from "../../../lib/gradle/parse/buildGradleParser";

import * as assert from "power-assert";
import * as tmp from "tmp";
import uuid = require("uuid");

describe("build gradle parser", () => {
    describe("parse versions", () => {
        it("should parse version from project with gradle properties", async () => {
            const propertiesContent = `
version=1.0.0-SNAPSHOT
`;
            const project = InMemoryProject.of({path: "gradle.properties", content: propertiesContent});
            const identifier = await GradleProjectIdentifier(project);
            assert.equal(identifier.version, "1.0.0-SNAPSHOT");
        });

        it("should not parse version from project with gradle properties if not exact match", async () => {
            const propertiesContent = `
node_version=1.0.0-SNAPSHOT
`;
            const project = InMemoryProject.of({path: "gradle.properties", content: propertiesContent});
            const identifier = await GradleProjectIdentifier(project);
            assert.equal(identifier.version, "0.0.1-SNAPSHOT");
        });

        it("should parse version from project with build.gradle (single quotes)", async () => {
            const buildGradle = `
version = '1.0.0-SNAPSHOT'
`;
            const project = InMemoryProject.of({path: "build.gradle", content: buildGradle});
            const identifier = await GradleProjectIdentifier(project);
            assert.equal(identifier.version, "1.0.0-SNAPSHOT");
        });

        it("should parse version from project with build.gradle (double quotes)", async () => {
            const buildGradle = `
version = "1.0.0-SNAPSHOT"
`;
            const project = InMemoryProject.of({path: "build.gradle", content: buildGradle});
            const identifier = await GradleProjectIdentifier(project);
            assert.equal(identifier.version, "1.0.0-SNAPSHOT");
        });

        it("should prefer version from project gradle.properties (double quotes)", async () => {
            const propertiesContent = `
version=1.0.0-SNAPSHOT
`;
            const buildGradle = `
version = "2.0.0-SNAPSHOT"
`;
            const project = InMemoryProject.of({path: "build.gradle", content: buildGradle}, {path: "gradle.properties", content: propertiesContent});
            const identifier = await GradleProjectIdentifier(project);
            assert.equal(identifier.version, "1.0.0-SNAPSHOT");
        });
    });

    describe("parse group", () => {
        it("should parse group from project with gradle properties", async () => {
            const propertiesContent = `
group=com.example
`;
            const project = InMemoryProject.of({path: "gradle.properties", content: propertiesContent});
            const identifier = await GradleProjectIdentifier(project);
            assert.equal(identifier.group, "com.example");
        });

        it("should parse group from project with build.gradle (single quotes)", async () => {
            const buildGradle = `
group = 'com.example'
`;
            const project = InMemoryProject.of({path: "build.gradle", content: buildGradle});
            const identifier = await GradleProjectIdentifier(project);
            assert.equal(identifier.group, "com.example");
        });

        it("should parse group from project with build.gradle (double quotes)", async () => {
            const buildGradle = `
group = "com.example"
`;
            const project = InMemoryProject.of({path: "build.gradle", content: buildGradle});
            const identifier = await GradleProjectIdentifier(project);
            assert.equal(identifier.group, "com.example");
        });
    });

    describe("module parser", () => {
       it("should get modules double quote", async () => {
           const settingsGradle = `
include "test"
include "test2"
`;
           const project = InMemoryProject.of({path: "settings.gradle", content: settingsGradle});
           const modules = await getGradleModules(project);
           assert(modules.every((s: string) => s === "test" || s === "test2"), "should have all modules");
       });

       it("should get modules single quote", async () => {
            const settingsGradle = `
include 'test'
include 'test2'
`;
            const project = InMemoryProject.of({path: "settings.gradle", content: settingsGradle});
            const modules = await getGradleModules(project);
            assert(modules.every((s: string) => s === "test" || s === "test2"), "should have all modules");
        });

       it("should get modules with submodules", async () => {
            const settingsGradle = `
include 'test:one'
include 'test:two'
`;
            const project = InMemoryProject.of({path: "settings.gradle", content: settingsGradle});
            const modules = await getGradleModules(project);
            assert(modules.every((s: string) => s === "test:one" || s === "test:two"), "should have all modules");
        });
    });

    describe("runtime classpath", () => {
        it("should get runtime classpath", async () => {
            const buildGradle = `
apply plugin: "java"

repositories {
    jcenter()
}

dependencies {
    runtime "com.h2database:h2:1.4.196"
}
`;
            const project = tempProject(uuid());
            project.addFileSync("build.gradle", buildGradle);
            const dependencies = await getRuntimeClasspath(project);
            assert(!!dependencies.find(d => !!d.match(/h2/)), "h2 dependency should be present");
        }).enableTimeouts(false);
    });

    describe("compile classpath", () => {
        it("should get compile classpath", async () => {
            const buildGradle = `
apply plugin: "java"

repositories {
    jcenter()
}

dependencies {
    implementation "com.h2database:h2:1.4.196"
    runtime "org.springframework.boot:spring-boot-starter-webflux:2.1.2.RELEASE"
}
`;
            const project = tempProject(uuid());
            project.addFileSync("build.gradle", buildGradle);
            const dependencies = await getCompileClasspath(project);
            assert(dependencies.find(d => !!d.match(/h2/)) !== undefined, "h2 dependency should be present");
            assert(dependencies.find(d => !!d.match(/spring/)) === undefined, "spring dependency should not be present");
        }).enableTimeouts(false);
    });
});

function tempProject(id: string): LocalProject {
    const dir = tmp.dirSync();
    return new NodeFsLocalProject(id || "temp", dir.name);
}
