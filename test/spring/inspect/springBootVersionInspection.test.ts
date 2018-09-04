import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import * as assert from "assert";
import {
    consolidateSpringBootVersions,
    SpringBootVersionInspection,
    SpringBootVersions,
} from "../../../lib/spring/inspect/springBootVersionInspection";
import { springBootPom } from "../generator/TestPoms";

describe("springBootVersionInspection", () => {

    describe("inspection", () => {

        it("should handle non-Spring project", async () => {
            const project = InMemoryProject.of();
            const r = await SpringBootVersionInspection(project, undefined);
            assert.strictEqual(r.versions.length, 0);
        });

        it("should find one Spring boot version", async () => {
            const bootVersion = "1.3.2";
            const project = InMemoryProject.of({
                path: "pom.xml",
                content: springBootPom(bootVersion),
            });
            const r = await SpringBootVersionInspection(project, undefined);
            assert.strictEqual(r.versions.length, 1);
            assert.strictEqual(r.versions[0].version, bootVersion);
        });

        it("should find two distinct Spring boot versions", async () => {
            const bootVersion1 = "1.3.2";
            const bootVersion2 = "1.5.8";
            const project = InMemoryProject.of({
                path: "first/pom.xml",
                content: springBootPom(bootVersion1),
            }, {
                path: "second/pom.xml",
                content: springBootPom(bootVersion2),
            });
            const results = await SpringBootVersionInspection(project, undefined);
            assert.strictEqual(results.versions.length, 2);
            assert(results.versions.map(r => r.version).includes(bootVersion1));
            assert(results.versions.map(r => r.version).includes(bootVersion2));
        });

        it("should find two distinct Spring boot versions with one repeat", async () => {
            const bootVersion1 = "1.3.2";
            const bootVersion2 = "1.5.8";
            const project = InMemoryProject.of({
                path: "first/pom.xml",
                content: springBootPom(bootVersion1),
            }, {
                path: "second/pom.xml",
                content: springBootPom(bootVersion2),
            }, {
                path: "third/pom.xml",
                content: springBootPom(bootVersion1),
            });
            const results = await SpringBootVersionInspection(project, undefined);
            assert.strictEqual(results.versions.length, 2);
            assert(results.versions.map(r => r.version).includes(bootVersion1));
            assert(results.versions.map(r => r.version).includes(bootVersion2));
            const v1 = results.versions.find(v => v.version === bootVersion1);
            assert.strictEqual(v1.count, 2);
        });

    });

    describe("consolidateSpringBootVersions", () => {

        it("should take one", () => {
            const version = "1.2.3";
            const svs: SpringBootVersions[] = [{ versions: [{ version, count: 1 }] }];
            const r = consolidateSpringBootVersions(svs);
            assert.strictEqual(r.versions.length, 1);
            assert.strictEqual(r.versions[0].version, version);
            assert.strictEqual(r.versions[0].count, 1);
        });

        it("should take two", () => {
            const version1 = "1.2.3";
            const version2 = "1.3.3";
            const svs: SpringBootVersions[] = [{
                versions: [
                    { version: version1, count: 1 },
                    { version: version2, count: 1 },
                ],
            }];
            const r = consolidateSpringBootVersions(svs);
            assert.strictEqual(r.versions.length, 2);
        });

    });

});
