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

import {InMemoryProject} from "@atomist/automation-client";
import {GradleProjectIdentifier} from "../../../lib/gradle/parse/buildGradleParser";

import * as assert from "power-assert";

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
});
