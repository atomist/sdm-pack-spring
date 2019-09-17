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

import { KotlinFileParser } from "@atomist/antlr";
import {
    astUtils,
    InMemoryProject,
} from "@atomist/automation-client";
import { evaluateExpression } from "@atomist/tree-path";
import * as assert from "power-assert";
import {
    JavaSourceFiles,
    KotlinSourceFiles,
} from "../../../lib/java/javaProjectUtils";
import {
    SpringBootAppClassInKotlin,
    SpringBootProjectStructure,
} from "../../../lib/spring/generate/SpringBootProjectStructure";
import {
    GishJavaPath,
    GishKotlinPath,
    GishProject,
    GishProjectWithComment,
    GishProjectWithLambda,
    GishProjectWithLocalTypeInference,
    javaSource,
    KotlinGishProject,
    ProblemProject,
} from "./springProjects";

describe("SpringBootProjectStructure: Java inference", () => {

    describe("java support", () => {

        it("infer not a spring project", async () => {
            const p = InMemoryProject.of();
            const structure = await SpringBootProjectStructure.inferFromJavaSource(p);
            assert(!structure);
        });

        it("should not be fooled by foo.kotlin.txt", async () => {
            const p = InMemoryProject.of(
                {
                    path: "src/main/kotlin/com/smashing/pumpkins/Gish.kt.txt",
                    content: javaSource,
                },
            );
            const structure = await SpringBootProjectStructure.inferFromJavaSource(p);
            assert(!structure);
        });

        it("infer application package and class when present", async () => {
            const structure = await SpringBootProjectStructure.inferFromJavaSource(GishProject());
            assert(structure.applicationPackage === "com.smashing.pumpkins");
            assert(structure.applicationClass === "GishApplication",
                `Expected name not to be ${structure.appClassFile.name}`);
            assert(structure.appClassFile.path === GishJavaPath);
        });

        it("infer application package and class when present using lambda", async () => {
            const structure = await SpringBootProjectStructure.inferFromJavaSource(GishProjectWithLambda());
            assert(structure.applicationPackage === "com.smashing.pumpkins");
            assert(structure.applicationClass === "GishApplication",
                `Expected name not to be ${structure.appClassFile.name}`);
            assert(structure.appClassFile.path === GishJavaPath);
        });

        it("infer application package and class when present using local type inference", async () => {
            const structure = await SpringBootProjectStructure.inferFromJavaSource(GishProjectWithLocalTypeInference());
            assert(structure.applicationPackage === "com.smashing.pumpkins");
            assert(structure.applicationClass === "GishApplication",
                `Expected name not to be ${structure.appClassFile.name}`);
            assert(structure.appClassFile.path === GishJavaPath);
        });

        it("infer application package and class when present, ignoring extraneous comment", async () => {
            const structure = await SpringBootProjectStructure.inferFromJavaSource(GishProjectWithComment());
            assert(structure.applicationPackage === "com.smashing.pumpkins");
            assert(structure.appClassFile.path === GishJavaPath);
        });

        it("infer application package in root package", async () => {
            const structure = await SpringBootProjectStructure.inferFromJavaSource(
                InMemoryProject.of(
                    { path: "pom.xml", content: "<xml>" },
                    { path: "src/main/java/App.java", content: "@SpringBootApplication public class App {}" },
                ),
            );
            assert(!!structure);
            assert(structure.applicationPackage === "");
            assert(structure.appClassFile.path === "src/main/java/App.java");
        });

        it("handle ill-formed application class", async () => {
            const structure = await SpringBootProjectStructure.inferFromJavaSource(ProblemProject());
            assert(structure.applicationPackage === "com.av");
            assert(structure.applicationClass === "AardvarkApplication",
                `Expected name not to be ${structure.appClassFile.name}`);
            assert(structure.appClassFile.path === "src/main/java/com/av/AardvarkApplication.java");
        });

        it("should throw an exception if more than one spring boot app found", async () => {
            let caught = false;
            try {
                await SpringBootProjectStructure.inferFromJavaSource(
                    InMemoryProject.of(
                        { path: "pom.xml", content: "<xml>" },
                        { path: "src/main/java/App.java", content: "@SpringBootApplication public\nclass App {}" },
                        { path: "src/main/java/Oop.java", content: "@SpringBootApplication public\nclass Oop {}" },
                    ),
                );
                assert.fail("Expected an exception to be thrown, but it was not");
            } catch (e) {
                caught = true;
                assert(/Found more than one Spring Boot application annotation in files:/.test(e.message));
            }
            assert(caught, "Expected an exception to be thrown, but it was not");
        });

        it("should find more than one spring boot app", async () => {
            const found = await SpringBootProjectStructure.inferFromJavaOrKotlin(
                InMemoryProject.of(
                    { path: "pom.xml", content: "<xml>" },
                    { path: "src/main/java/App.java", content: "@SpringBootApplication public\nclass App {}" },
                    { path: "src/main/java/Oop.java", content: "@SpringBootApplication public\nclass Oop {}" },
                ),
            );
            assert.strictEqual(found.length, 2);
            assert(found.some(f => f.applicationClass === "App"));
            assert(found.some(f => f.applicationClass === "Oop"));
        });

        it("should exclude unwanted files in project", async () => {
            const structure = await SpringBootProjectStructure.inferFromJavaSource(
                InMemoryProject.of(
                    { path: "pom.xml", content: "<xml>" },
                    { path: "src/main/java/App.java", content: "@SpringBootApplication public\nclass App {}" },
                    { path: "example/main/java/Oop.java", content: "@SpringBootApplication public\nclass Oop {}" },
                ),
                [JavaSourceFiles, "!(example/**/*)"],
            );
            assert(structure.applicationPackage === "");
            assert(structure.appClassFile.path === "src/main/java/App.java");
        });

    });

    describe("kotlin support", () => {

        it("parses Kotlin in file", async () => {
            const ast = await KotlinFileParser.toAst(KotlinGishProject().findFileSync(GishKotlinPath));
            // console.log(ast);
            const results = evaluateExpression(ast, SpringBootAppClassInKotlin);
            assert.strictEqual(results.length, 1);
        });

        it("parses Kotlin in project", async () => {
            const matches = await astUtils.findFileMatches(KotlinGishProject(), KotlinFileParser, KotlinSourceFiles, SpringBootAppClassInKotlin);
            assert.strictEqual(matches.length, 1);
        });

        it("infer application package and class when present", async () => {
            const structure = await SpringBootProjectStructure.inferFromKotlinSource(KotlinGishProject());
            assert(!!structure);
            assert.equal(structure.applicationPackage, "com.smashing.pumpkins");
            assert.equal(structure.applicationClass, "GishApplication",
                `Expected name not to be ${structure.appClassFile.name}`);
            assert.equal(structure.appClassFile.path, GishKotlinPath);
        });

        it("finds Kotlin after Java", async () => {
            const structure = await SpringBootProjectStructure.inferFromJavaOrKotlinSource(KotlinGishProject());
            assert(!!structure);
            assert.equal(structure.applicationPackage, "com.smashing.pumpkins");
            assert.equal(structure.applicationClass, "GishApplication",
                `Expected name not to be ${structure.appClassFile.name}`);
            assert.equal(structure.appClassFile.path, GishKotlinPath);
        });
    });

});
