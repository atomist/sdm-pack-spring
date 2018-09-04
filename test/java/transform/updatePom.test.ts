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

import * as assert from "power-assert";

import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import { updatePom } from "../../../lib/maven/generate/updatePom";

describe("updatePom", () => {

    it("should not error on no POM", done => {
        const p = new InMemoryProject();
        p.addFileSync("src/main/java/Foo.java", "public class Foo {}");
        updatePom(p, p.name, "art", "group", "version", "desc").then(_ =>
            p.flush()
                .then(() => {
                    const found = p.findFileSync("src/main/java/Foo.java");
                    assert(found.getContentSync() === "public class Foo {}");
                })).then(done, done);
    });

    it("should edit simple POM", done => {
        const p = InMemoryProject.from(
            { owner: "wicked", repo: "defying-gravity", url: "" },
            { path: "pom.xml", content: SimplePom },
        );
        p.addFileSync("src/main/java/Foo.java", "public class Foo {}");
        updatePom(p, p.name, "art", "group", "version", "desc")
            .then(_ => {
                const found = p.findFileSync("pom.xml");
                const newPom = found.getContentSync();
                assert(newPom.includes("<artifactId>art</artifactId>"));
                assert(newPom.includes(`<name>defying-gravity</name>`));
                assert(newPom.includes("<groupId>group</groupId>"));
                assert(newPom.includes("<version>version</version>"));
                assert(newPom.includes("<description>desc</description>"));
                assert(!newPom.includes("<artifactId>flux-flix-service</artifactId>"));
                assert(!newPom.includes("<name>flux-flix-service</name>"));
                assert(!newPom.includes("<groupId>com.example</groupId>"));
                assert(!newPom.includes("<version>0.0.1-SNAPSHOT</version>"));
                assert(!newPom.includes("<description>Demo project for Spring Boot</description>"));
            }).then(done, done);
    });

    // TODO this should succeed
    it.skip("should edit POM with second artifact and out of order", done => {
        const p = InMemoryProject.from(
            { owner: "wicked", repo: "defying-gravity", url: "" },
            { path: "pom.xml", content: PomWithDualArtifact },
        );
        p.addFileSync("src/main/java/Foo.java", "public class Foo {}");
        updatePom(p, p.name, "art", "group", "version", "desc")
            .then(_ => {
                const found = p.findFileSync("pom.xml");
                const newPom = found.getContentSync();
                assert(newPom.includes("<artifactId>art</artifactId>"));
                // Shouldn't have changed this one
                assert(newPom.includes("<artifactId>maven-assembly-plugin</artifactId>"));
            }).then(done, done);
    });

});

export const SimplePom = `<?xml version="1.0" encoding="UTF-8"?>
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

/* tslint:disable */

export const PomWithDualArtifact = `<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>atomist</groupId>
    <name>java-hello-world-maven</name>
    <version>0.1.0-SNAPSHOT</version>
    <url>http://maven.apache.org</url>
    <packaging>jar</packaging>

    <properties>
        <java-version>1.8</java-version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <build>
        <plugins>
            <!-- Maven Assembly Plugin -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-assembly-plugin</artifactId>
                <version>2.4.1</version>
                <configuration>

                    <!-- get all project dependencies -->
                    <descriptorRefs>
                        <descriptorRef>jar-with-dependencies</descriptorRef>
                    </descriptorRefs>

                    <!-- MainClass in mainfest make a executable jar -->
                    <archive>
                        <manifest>
                            <mainClass>com.myorganization.app.Main</mainClass>
                        </manifest>
                    </archive>

                </configuration>
                <executions>
                    <execution>
                        <id>make-assembly</id>
                        <!-- bind to the packaging phase -->
                        <phase>package</phase>
                        <goals>
                            <goal>single</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>

        </plugins>
    </build>

    <artifactId>myapp</artifactId>
</project>
`;
