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

import {
    InMemoryProject,
    InMemoryProjectFile,
    Project,
} from "@atomist/automation-client";
import * as assert from "power-assert";
import {
    migrateArtifactIdTransform,
    migrateGroupIdTransform,
} from "../../../lib/maven/transform/migrateDependencies";

describe("migrateDependenciesTest", () => {

    describe("migrateGroupIdTransform", () => {

        it("no POM causes no change, no error", async () => {
            const p = InMemoryProject.of();
            await migrateGroupIdTransform(/com\.atomist/, "io.atomist")(p, undefined, undefined);
            assert(!(await p.getFile("pom.xml")));
        });

        it("no POM causes no change, no error", async () => {
            const p = projectOfPom(Pom);

            await migrateGroupIdTransform(/com\.atomist/, "io.atomist")(p, undefined, undefined);
            const newPomContent = p.findFileSync("pom.xml").getContentSync();
            assert(newPomContent.indexOf("<groupId>com.atomist</groupId>") === -1);
            assert(newPomContent.indexOf("<groupId>io.atomist</groupId>") !== -1);
        });
    });

    describe("migrateArtifactIdTransform", () => {

        it("no POM causes no change, no error", async () => {
            const p = InMemoryProject.of();
            await migrateArtifactIdTransform(/atomist-(.*)/, "foo-$1")(p, undefined, undefined);
            assert(!(await p.getFile("pom.xml")));
        });

        it("no POM causes no change, no error", async () => {
            const p = projectOfPom(Pom);

            await migrateArtifactIdTransform(/atomist-(.*)/, "foo-$1")(p, undefined, undefined);
            const newPomContent = p.findFileSync("pom.xml").getContentSync();
            assert(newPomContent.indexOf("<artifactId>atomist-lib1</artifactId>") === -1);
            assert(newPomContent.indexOf("<artifactId>foo-lib1</artifactId>") !== -1);
            assert(newPomContent.indexOf("<artifactId>atomist-lib2</artifactId>") === -1);
            assert(newPomContent.indexOf("<artifactId>foo-lib2</artifactId>") !== -1);
        });
    });
});

export function projectOfPom(content: string): Project {
    return InMemoryProject.of(new InMemoryProjectFile("pom.xml", content));
}

const Pom =
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
		<dependency>
			<groupId>com.atomist</groupId>
			<artifactId>atomist-lib1</artifactId>
		</dependency>

		<dependency>
			<groupId>com.atomist</groupId>
			<artifactId>atomist-lib2</artifactId>
		</dependency>
	</dependencies>

	<dependencyManagement>
	    <dependencies>
            <dependency>
                <groupId>com.atomist</groupId>
                <artifactId>atomist-lib1</artifactId>
                <version>1.0.0-SNAPSHOT</version>
            </dependency>

            <dependency>
                <groupId>com.atomist</groupId>
                <artifactId>atomist-lib2</artifactId>
                <version>1.0.0-SNAPSHOT</version>
            </dependency>
        </dependencies>
	</dependencyManagement>

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
