import { InMemoryProject } from "@atomist/automation-client";
import { InMemoryProjectFile } from "@atomist/sdm";
import * as assert from "assert";
import { hasDeclaredDependency, hasDependency, IsMaven } from "../../../lib/maven/pushtest/pushTests";
import { springBootPom } from "../../spring/generator/TestPoms";
import { tempProject } from "../../spring/transform/setSpringBootVersionTransform.test";

describe("Maven pushtests", () => {

    describe("IsMaven", () => {

        it("should be false for empty project", async () => {
            const p = InMemoryProject.of();
            assert(!(await IsMaven.predicate(p)));
        });

        it("should be true with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(await IsMaven.predicate(p));
        });

    });

    describe("hasDeclaredDependency", () => {

        it("should be false for empty project", async () => {
            const p = InMemoryProject.of();
            assert(!(await hasDeclaredDependency({}).predicate(p)));
        });

        it("should be true with any dependency with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(await hasDeclaredDependency({}).predicate(p));
        });

        it("should be true with group dependency with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(await hasDeclaredDependency({ group: "org.springframework.boot" }).predicate(p));
        });

        it("should be false with group dependency with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(!await hasDeclaredDependency({ group: "not.a.group" }).predicate(p));
        });

        it("should be true with artifact dependency with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(await hasDeclaredDependency({ artifact: "spring-boot-starter-test" }).predicate(p));
        });

        it("should be false with artifact dependency with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(!await hasDeclaredDependency({ artifact: "not.an.artifact" }).predicate(p));
        });

        it("should be true with artifact and group dependency with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(await hasDeclaredDependency({ group: "org.springframework.boot", artifact: "spring-boot-starter-test" }).predicate(p));
        });

        it("should be true with artifact and group and version dependency with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(!await hasDeclaredDependency({
                group: "org.springframework.boot",
                artifact: "spring-boot-starter-test",
                version: "1.3.5",
            }).predicate(p));
        });

        it("should handle versions from property");

        it("should handle inherited versions");

    });

    describe("hasDependency", () => {

        it("should be false for empty project", async () => {
            const p = tempProject({ owner: "frank", repo: "underhill", url: "1600 Pennsylvania Ave"});
            assert(!(await hasDependency({}).predicate(p)));
        });

        it("should be true with any dependency with pom", async () => {
            const p = tempProject({ owner: "frank", repo: "underhill", url: "1600 Pennsylvania Ave"});
            p.addFileSync("pom.xml", springBootPom());
            assert(await hasDependency({}).predicate(p));
        });

        it("should be true with any dependency with pom", async () => {
            const p = tempProject({ owner: "frank", repo: "underhill", url: "1600 Pennsylvania Ave"});
            p.addFileSync("pom.xml", springBootPom());
            assert(await hasDependency({ group: "org.springframework.boot", artifact: "spring-boot-starter-test" }).predicate(p));
        });

    });

});
