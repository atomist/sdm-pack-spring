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

import { InMemoryProjectFile, PushListenerInvocation } from "@atomist/sdm";
import * as assert from "power-assert";
import { hasDeclaredDependency } from "../../../lib/maven/pushtest/pushTests";
import {
    HasSpringBootApplicationClass, hasStarter,
    IsSpringBoot2Project,
} from "../../../lib/spring/pushtest/pushTests";
import { springBootPom } from "../generator/TestPoms";

describe("springPushTests", () => {

    describe("HasSpringBootApplicationClass", () => {

        it("should not find maven in empty repo", async () => {
            const project = InMemoryProject.of();
            const r = await HasSpringBootApplicationClass.mapping({ project } as any as PushListenerInvocation);
            assert(!r);
        });

        it("should find maven in repo with named pom but no Spring application", async () => {
            const project = InMemoryProject.of({ path: "pom.xml", content: "<xml>" });
            const r = await HasSpringBootApplicationClass.mapping({ project } as any as PushListenerInvocation);
            assert(!r);
        });

        it("should find in repo with named pom and Spring application class", async () => {
            const project = InMemoryProject.of(
                { path: "pom.xml", content: springBootPom("1.2.1") },
                { path: "src/main/java/App.java", content: "@SpringBootApplication public class App {}" },
            );
            const r = await HasSpringBootApplicationClass.mapping({ project } as any as PushListenerInvocation);
            assert(r);
        });
    });

    describe("IsSpringBoot2", () => {
        it("should be able to detect Spring Boot 2 dependency", async () => {
            const project = InMemoryProject.of({ path: "pom.xml", content: springBootPom("2.0.0.RELEASE") });
            const r = await IsSpringBoot2Project.mapping({ project } as any as PushListenerInvocation);
            assert(r);
        });

        it("should be able to detect Spring Boot 1 dependency", async () => {
            const project = InMemoryProject.of({ path: "pom.xml", content: springBootPom("1.5.8.RELEASE") });
            const r = await IsSpringBoot2Project.mapping({ project } as any as PushListenerInvocation);
            assert(!r);
        });
    });

    describe("hasStarter", () => {

        it("should be false for empty project", async () => {
            const p = InMemoryProject.of();
            assert(!(await hasStarter("foo-starter").predicate(p)));
        });

        it("should be true with any dependency with pom", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(await hasDeclaredDependency({}).predicate(p));
        });

        it("should be true with starter we have", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(await hasDeclaredDependency({ artifact: "spring-boot-starter-web"}).predicate(p));
        });

        it("should be false with bogus starter", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            assert(!await hasDeclaredDependency({ artifact: "not.there"}).predicate(p));
        });

    });

});
