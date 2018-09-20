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
    LocalProject,
    NodeFsLocalProject,
    RepoId,
} from "@atomist/automation-client";
import { PushImpactListenerInvocation } from "@atomist/sdm";
import * as assert from "power-assert";
import * as tmp from "tmp";
import { MavenFingerprinter } from "../../../lib/maven/fingerprint/MavenFingerprinter";
import { VersionedArtifact } from "../../../lib/maven/VersionedArtifact";

describe("MavenFingerprinter", () => {

    it("should have name", () => {
        assert(!!new MavenFingerprinter().name);
    });

    it("should find some dependencies", async () => {
        const p = tempProject();
        p.addFileSync("pom.xml", testPom());
        const fp = await new MavenFingerprinter().action({ project: p } as PushImpactListenerInvocation);
        const f1 = JSON.parse(fp[0].data) as VersionedArtifact[];
        assert(f1.length > 0);
        assert(f1.some(f => f.group === "org.springframework.boot"));
        assert(f1.some(f => f.group === "org.springframework"));
    }).timeout(40000);

});

function tempProject(id?: RepoId): LocalProject {
    const dir = tmp.dirSync();
    return new NodeFsLocalProject(id || "temp", dir.name);
}

function testPom() {
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
	<modelVersion>4.0.0</modelVersion>
	<groupId>com.atomist.springteam</groupId>
	<artifactId>spring-rest-seed</artifactId>
	<version>0.1.0-SNAPSHOT</version>
	<packaging>jar</packaging>
	<name>spring-rest-seed</name>
	<description>Seed for creating Spring REST services</description>
	<parent>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-parent</artifactId>
		<version>2.0.0.RELEASE</version>
		<relativePath/>
	</parent>
	<properties>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<java.version>1.8</java.version>
		<timestamp>\${maven.build.timestamp}</timestamp>
		<maven.build.timestamp.format>yyyyMMddHHmmss</maven.build.timestamp.format>
	</properties>
	<dependencies>
		<dependency>
			<groupId>org.springframework.boot</groupId>
			<artifactId>spring-boot-starter-web</artifactId>
		</dependency>
	</dependencies>
</project>
`;
}
