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
} from "@atomist/automation-client";
import { unifiedTagger } from "@atomist/automation-client/lib/operations/tagger/Tagger";
import * as assert from "assert";
import { mavenTagger } from "../../lib/maven/classify/mavenTagger";
import { springBootTagger } from "../../lib/spring/classify/springTagger";
import { springBootPom } from "./generator/TestPoms";

describe("springTagger", () => {

    it("should not tag empty project", async () => {
        const p = InMemoryProject.of();
        const tags = await springBootTagger(p, undefined, undefined);
        assert.strictEqual(tags.tags.length, 0);
    });

    it("should not tag spring boot project without source", async () => {
        const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
        const tags = await springBootTagger(p, undefined, undefined);
        assert.strictEqual(tags.tags.length, 0);
    });

    it("should tag spring and spring boot project with Java source", async () => {
        const p = InMemoryProject.of(
            new InMemoryProjectFile("pom.xml", springBootPom()),
            new InMemoryProjectFile("src/main/java/Thing.java", "@SpringBootApplication public class Thing {}"),
        );
        const tags = await unifiedTagger(mavenTagger, springBootTagger)(p, undefined, undefined);
        assert(tags.tags.includes("maven"));
        assert(tags.tags.includes("spring"));
        assert(tags.tags.includes("spring-boot"));
        assert(tags.tags.includes("java"));
        assert.strictEqual(tags.tags.length, 4);
    });

    it("should tag spring and spring boot project with Kotlin source", async () => {
        const p = InMemoryProject.of(
            new InMemoryProjectFile("pom.xml", springBootPom()),
            new InMemoryProjectFile("src/main/kotlin/Thing.kt", "@SpringBootApplication public class Thing {}"),
        );
        const tags = await unifiedTagger(mavenTagger, springBootTagger)(p, undefined, undefined);
        assert(tags.tags.includes("maven"));
        assert(tags.tags.includes("spring"));
        assert(tags.tags.includes("spring-boot"));
        assert(tags.tags.includes("kotlin"));
        assert.strictEqual(tags.tags.length, 4);
    });

});
