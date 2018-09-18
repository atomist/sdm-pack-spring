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

import { InMemoryProject } from "@atomist/automation-client";
import * as assert from "power-assert";
import { findDeclaredDependencies } from "../../../lib/maven/parse/fromPom";
import { addSpringBootStarterTransform } from "../../../lib/spring/transform/addSpringBootStarterTransform";
import { springBootPom } from "../generator/TestPoms";

describe("addSpringBootStarterTransform", () => {

    it("doesn't transform empty project", async () => {
        const p = new InMemoryProject();
        await addSpringBootStarterTransform("starter-whatever")(p, undefined, undefined);
    });

    it("transforms Spring Boot project", async () => {
        const starterName = "thing-x";
        const p = InMemoryProject.of({ path: "pom.xml", content: FromInitializr });
        await addSpringBootStarterTransform(starterName)(p, undefined);
        const content = p.findFileSync("pom.xml").getContentSync();
        assert(content.includes(starterName));
        const deps = await findDeclaredDependencies(p);
        assert(deps.dependencies.some(d => d.artifact === starterName),
            "Found\n" + content);
    });

    it("transforms Spring Boot project with another POM", async () => {
        const starterName = "thing-x";
        const p = InMemoryProject.of({ path: "pom.xml", content: springBootPom() });
        await addSpringBootStarterTransform(starterName)(p, undefined);
        const content = p.findFileSync("pom.xml").getContentSync();
        assert(content.includes(starterName));
        const deps = await findDeclaredDependencies(p);
        assert(deps.dependencies.some(d => d.artifact === starterName),
            "Found\n" + content);
    });

    it("transforms Spring Boot project with dependency management block before dependencies", async () => {
        const starterName = "thing-x";
        const p = InMemoryProject.of({
            path: "pom.xml",
            content: FromInitializr.replace(placeHolder(1), DependencyManagementBlock),
        });
        await addSpringBootStarterTransform(starterName)(p, undefined);
        const content = p.findFileSync("pom.xml").getContentSync();
        assert(content.includes(starterName), content);
        const deps = await findDeclaredDependencies(p);
        assert(deps.dependencies.some(d => d.artifact === starterName));
    });

    it("transforms Spring Boot project with dependency management block after dependencies", async () => {
        const starterName = "thing-x";
        const p = InMemoryProject.of({
            path: "pom.xml",
            content: FromInitializr.replace(placeHolder(2), DependencyManagementBlock),
        });
        await addSpringBootStarterTransform(starterName)(p, undefined);
        const content = p.findFileSync("pom.xml").getContentSync();
        assert(content.includes(starterName), "Found\n" + content);
        const deps = await findDeclaredDependencies(p);
        assert(deps.dependencies.some(d => d.artifact === starterName),
            "Found\n" + content);
    });

});

function placeHolder(n: number) {
    return `<!-- #${n} -->`;
}

/* tslint:disable */

export const FromInitializr = `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.example</groupId>
	<artifactId>demo</artifactId>
	<version>0.0.1-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>spring-rest-seed</name>
	<description>Seed for Spring Boot REST services</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.5.8.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
	</properties>
	
	${placeHolder(1)}

	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-actuator</artifactId>
		</dependency>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>
	</dependencies>

	<build>
		<plugins>
			<plugin>
				<groupId>org.springframework.boot</groupId>
				<artifactId>spring-boot-maven-plugin</artifactId>
			</plugin>
		</plugins>
	</build>
	
	${placeHolder(2)}

</project>
`;

const DependencyManagementBlock = `<dependencyManagement>
    <dependencies>
      <dependency>
        <groupId>commons-io</groupId>
        <artifactId>commons-io</artifactId>
        <version>1.4</version>
      </dependency>
</dependencies>
</dependencyManagement>`;