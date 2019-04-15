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
