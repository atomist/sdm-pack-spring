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

import { KotlinFileParser } from "@atomist/antlr/tree/ast/antlr/kotlin/KotlinFileParser";
import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import { Project } from "@atomist/automation-client/project/Project";
import { findFileMatches } from "@atomist/automation-client/tree/ast/astUtils";
import { evaluateExpression } from "@atomist/tree-path/path/expressionEngine";
import * as assert from "power-assert";
import { SpringBootAppClassInKotlin, SpringBootProjectStructure } from "../../../../src/support/spring/generate/SpringBootProjectStructure";
import { KotlinSourceFiles } from "../../../../src/support/java/javaProjectUtils";
// JESS: Moved from spring-automation to sdm-pack-spring
describe("SpringBootProjectStructure: Java inference", () => {

    describe("java support", () => {

        it("infer not a spring project", done => {
            const p = InMemoryProject.of();
            SpringBootProjectStructure.inferFromJavaSource(p).then(structure => {
                assert(!structure);
                done();
            }).catch(done);
        });

        it("should not be fooled by foo.kotlin.txt", done => {
            const p = InMemoryProject.of(
                {
                    path: "src/main/kotlin/com/smashing/pumpkins/Gish.kt.txt",
                    content: javaSource,
                },
            );
            SpringBootProjectStructure.inferFromJavaSource(p).then(structure => {
                assert(!structure);
                done();
            }).catch(done);
        });

        it("infer application package and class when present", done => {
            SpringBootProjectStructure.inferFromJavaSource(GishProject).then(structure => {
                assert(structure.applicationPackage === "com.smashing.pumpkins");
                assert(structure.applicationClass === "GishApplication",
                    `Expected name not to be ${structure.appClassFile.name}`);
                assert(structure.appClassFile.path === GishJavaPath);
                done();
            }).catch(done);
        });

        it("infer application package and class when present, ignoring extraneous comment", done => {
            SpringBootProjectStructure.inferFromJavaSource(GishProjectWithComment).then(structure => {
                assert(structure.applicationPackage === "com.smashing.pumpkins");
                assert(structure.appClassFile.path === GishJavaPath);
                done();
            }).catch(done);
        });

        it("infer application package in root package", done => {
            SpringBootProjectStructure.inferFromJavaSource(
                InMemoryProject.of(
                    {path: "pom.xml", content: "<xml>"},
                    {path: "src/main/java/App.java", content: "@SpringBootApplication public class App {}"},
                ),
            ).then(structure => {
                assert(!!structure);
                assert(structure.applicationPackage === "");
                assert(structure.appClassFile.path === "src/main/java/App.java");
                done();
            }).catch(done);
        });
    });

    describe("kotlin support", () => {

        it("parses Kotlin in file", async () => {
            const ast = await KotlinFileParser.toAst(KotlinGishProject.findFileSync(GishKotlinPath));
            // console.log(ast);
            const results = evaluateExpression(ast, SpringBootAppClassInKotlin);
            assert(results.length === 1);
        });

        it("parses Kotlin in project", async () => {
            const matches = await findFileMatches(KotlinGishProject, KotlinFileParser, KotlinSourceFiles, SpringBootAppClassInKotlin);
            assert.equal(matches.length, 1);
        });

        it("infer application package and class when present", done => {
            SpringBootProjectStructure.inferFromKotlinSource(KotlinGishProject).then(structure => {
                assert(!!structure);
                assert.equal(structure.applicationPackage, "com.smashing.pumpkins");
                assert.equal(structure.applicationClass, "GishApplication",
                    `Expected name not to be ${structure.appClassFile.name}`);
                assert.equal(structure.appClassFile.path, GishKotlinPath);
                done();
            }).catch(done);
        });

        it("finds Kotlin after Java", done => {
            SpringBootProjectStructure.inferFromJavaOrKotlinSource(KotlinGishProject).then(structure => {
                assert(!!structure);
                assert.equal(structure.applicationPackage, "com.smashing.pumpkins");
                assert.equal(structure.applicationClass, "GishApplication",
                    `Expected name not to be ${structure.appClassFile.name}`);
                assert.equal(structure.appClassFile.path, GishKotlinPath);
                done();
            }).catch(done);
        });
    });

});

const javaSource =
    `package com.smashing.pumpkins;

@SpringBootApplication
class GishApplication {
}

`;

const kotlinSource =
    `package com.smashing.pumpkins

@SpringBootApplication
class GishApplication {
}

`;

const SimplePom = `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>flux-flix-service</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>jar</packaging>

    <name>flux-flix-service</name>
    <description>Demo project for Spring Boot</description>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.0.0.BUILD-SNAPSHOT</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
</project>
`;

export const GishJavaPath = "src/main/java/com/smashing/pumpkins/Gish.java";
export const GishProject: Project = InMemoryProject.from(
    {owner: "smashing-pumpkins", repo: "gish"},
    {
        path: GishJavaPath,
        content: javaSource,
    }, {
        path: "pom.xml",
        content: SimplePom,
    },
);

export const GishProjectWithComment: Project = InMemoryProject.from(
    {owner: "smashing-pumpkins", repo: "gish"},
    {
        path: GishJavaPath,
        content: javaSource.replace("@SpringBootApplication", "@SpringBootApplication // ha ha trying to fool you"),
    }, {
        path: "pom.xml",
        content: SimplePom,
    },
);

export const GishKotlinPath = "src/main/kotlin/com/smashing/pumpkins/Gish.kt";

export const KotlinGishProject: Project = InMemoryProject.from(
    {owner: "smashing-pumpkins", repo: "gish"},
    {
        path: GishKotlinPath,
        content: kotlinSource,
    }, {
        path: "pom.xml",
        content: SimplePom,
    },
);
