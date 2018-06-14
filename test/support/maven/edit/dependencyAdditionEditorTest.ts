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

import { InMemoryFile } from "@atomist/automation-client/project/mem/InMemoryFile";
import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import { Project } from "@atomist/automation-client/project/Project";
import * as assert from "power-assert";
import { addDependencyEditor } from "../../../../src";
import * as xml from "fast-xml-parser";



describe("DependencyAdditionEditor", () => {

    it("no POM causes no change, no error", async () => {
        const dae = {
            group: "bigco",
            artifact: "software",
            version: "2.0.0",
        };
        // const pom = PomWithReplaceMe.replace("replaceMe", "");
        const p = InMemoryProject.of();
        await addDependencyEditor(dae)(p);
        assert(!(await p.getFile("pom.xml")));
    });

    it("makes addition when dependency not present", async () => {
        const dae = {
            group: "bigco",
            artifact: "software",
            version: "2.0.0",
        };
        const pom = PomWithReplaceMe.replace(ReplaceMe, "");
        const p = projectOfPom(pom);
        await addDependencyEditor(dae)(p);
        const newPomContent = p.findFileSync("pom.xml").getContentSync();
        // console.log(newPomContent);
        assert(xml.validate(newPomContent));
        assert(newPomContent.indexOf(dae.group) !== -1);
        assert(newPomContent.indexOf(dae.artifact) !== -1);
        assert(newPomContent.indexOf(dae.version) !== -1);
    });

    it("doesn't make addition when dependency already present", async () => {
        const dae = {
            group: "org.springframework.boot",
            artifact: "spring-boot-starter-web",
            version: "1.5.9.RELEASE", // TODO do we need this
        };
        const pom = PomWithReplaceMe.replace(ReplaceMe, "");
        const p = projectOfPom(pom);
        await addDependencyEditor(dae)(p);
        const newPomContent = p.findFileSync("pom.xml").getContentSync();
        assert(pom === newPomContent);
    });
});

export function projectOfPom(content: string): Project {
    return InMemoryProject.of(new InMemoryFile("pom.xml", content));
}

const ReplaceMe = "<!-- -->";

const PomWithReplaceMe =
    `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>com.example</groupId>
	<artifactId>multi</artifactId>
	<version>0.1.0</version>
	<packaging>jar</packaging>

	<name>multi</name>
	<description>Multi project for Spring Boot</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>1.5.3.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
        ${ReplaceMe}

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>

		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-test</artifactId>
			<scope>test</scope>
		</dependency>

		<dependency>
			<groupId>org.apache.commons</groupId>
			<artifactId>commons-lang3</artifactId>
			<version>3.5</version>
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

</project>
`;
