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

import { InMemoryProject } from "@atomist/automation-client";
import * as os from "os";
import * as path from "path";
import * as assert from "power-assert";
import { determineMavenCommand } from "../../lib/maven/mavenCommand";

describe("mavenCommand", () => {

    describe("posix", () => {

        // tslint:disable:no-invalid-this
        before(function() {
            this.originalOsPlatform = Object.getOwnPropertyDescriptor(os, "platform");
            Object.defineProperty(os, "platform", {
                value: () => "linux",
            });
        });
        after(function() {
            Object.defineProperty(os, "platform", this.originalOsPlatform);
        });
        // tslint:enable:no-invalid-this

        it("should use mvn if no wrapper is present", async () => {
            const project = InMemoryProject.of();
            const command = await determineMavenCommand(project);
            assert(command === "mvn");
        });

        it("should use maven wrapper if it is present", async () => {
            const project = InMemoryProject.of({ path: "mvnw", content: "" });
            project.makeExecutable = async () => project;
            const command = await determineMavenCommand(project);
            assert(command === "./mvnw");
        });

        it("should use maven wrapper even if JAVA_HOME is not defined", async () => {
            const javaHome = process.env.JAVA_HOME;
            if (process.env.JAVA_HOME) {
                delete process.env.JAVA_HOME;
            }
            const project = InMemoryProject.of({ path: "mvnw", content: "" });
            project.makeExecutable = async () => project;
            const command = await determineMavenCommand(project);
            assert(command === "./mvnw");
            if (javaHome) {
                process.env.JAVA_HOME = javaHome;
            }
        });

    });

    describe("win32", () => {

        // tslint:disable:no-invalid-this
        before(function() {
            this.originalOsPlatform = Object.getOwnPropertyDescriptor(os, "platform");
            Object.defineProperty(os, "platform", {
                value: () => "win32",
            });
        });
        after(function() {
            Object.defineProperty(os, "platform", this.originalOsPlatform);
        });
        // tslint:enable:no-invalid-this

        it("should return mvn when there is no wrapper", async () => {
            const project = InMemoryProject.of();
            const command = await determineMavenCommand(project);
            assert(command === "mvn");
        });

        it("should use maven wrapper if it is present and JAVA_HOME set", async () => {
            let deleteJavaHome: boolean = false;
            if (!process.env.JAVA_HOME) {
                process.env.JAVA_HOME = path.join("some", "path", "to", "jdk");
                deleteJavaHome = true;
            }
            const project = InMemoryProject.of({ path: "mvnw.cmd", content: "" });
            const command = await determineMavenCommand(project);
            assert(command === "mvnw");
            if (deleteJavaHome) {
                delete process.env.JAVA_HOME;
            }
        });

        it("should not use maven wrapper if JAVA_HOME is not defined", async () => {
            const javaHome = process.env.JAVA_HOME;
            if (process.env.JAVA_HOME) {
                delete process.env.JAVA_HOME;
            }
            const project = InMemoryProject.of({ path: "mvnw.cmd", content: "" });
            const command = await determineMavenCommand(project);
            assert(command === "mvn");
            if (javaHome) {
                process.env.JAVA_HOME = javaHome;
            }
        });

    });

});
