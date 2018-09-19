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
} from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import * as assert from "power-assert";
import { findDeclaredDependencies } from "../../../lib/maven/parse/fromPom";
import {
    addActuatorWebConfiguration,
    addSpringBootActuator,
    AddSpringBootActuatorStarter,
} from "../../../lib/spring/transform/addSpringBootActuator";

describe("addSpringActuator", () => {

    it("doesn't transform empty project", async () => {
        const p = new InMemoryProject();
        const transform = addSpringBootActuator().transform;
        (transform as CodeTransform[]).forEach(t => t(p, undefined));
    });

    it("transforms Spring Boot project POM", async () => {
        const starterName = "spring-boot-starter-actuator";
        const p = InMemoryProject.of({ path: "pom.xml", content: FromInitializr });
        await AddSpringBootActuatorStarter(p, undefined);
        const content = p.findFileSync("pom.xml").getContentSync();
        assert(content.includes(starterName));
        const deps = await findDeclaredDependencies(p);
        assert(deps.dependencies.some(d => d.artifact === starterName),
            "Found\n" + content);
    });

    it("transforms Spring Boot project appliction properties", async () => {
        const p = InMemoryProject.of({ path: "pom.xml", content: FromInitializr });
        await addActuatorWebConfiguration()(p, undefined);
        const content = p.findFileSync("src/main/resources/application.properties").getContentSync();
        assert(content.includes("management.endpoints.web.exposure.include=health,info"));
    });

    it("transforms Spring Boot project appliction properties with custom endpoints", async () => {
        const p = InMemoryProject.of({ path: "pom.xml", content: FromInitializr });
        await addActuatorWebConfiguration(["jolokia"])(p, undefined);
        const content = p.findFileSync("src/main/resources/application.properties").getContentSync();
        assert(content.includes("management.endpoints.web.exposure.include=jolokia"));
    });

    it("transforms Spring Boot project in registration", async () => {
        const starterName = "spring-boot-starter-actuator";
        const p = InMemoryProject.of({ path: "pom.xml", content: FromInitializr });
        const transforms = async () => {
            await asyncForEach( addSpringBootActuator().transform as CodeTransform[], async (t: CodeTransform) => {
                await t(p, undefined);
            });
        };
        await transforms();
        const content = p.findFileSync("src/main/resources/application.properties").getContentSync();
        assert(content.includes("management.endpoints.web.exposure.include=health,info"));
        const pomContent = p.findFileSync("pom.xml").getContentSync();
        assert(pomContent.includes(starterName));
    });
});

async function asyncForEach(array: any[], callback: any) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

/* tslint:disable */

const FromInitializr = `<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>

	<groupId>test</groupId>
	<artifactId>actuator</artifactId>
	<version>0.1.0-SNAPSHOT</version>
	<packaging>jar</packaging>

	<name>actuator</name>
	<description>actuator</description>

	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.0.5.RELEASE</version>
		<relativePath/> <!-- lookup parent from repository -->
	</parent>

	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
		<java.version>1.8</java.version>
	</properties>

	<dependencies>
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
</project>
`;