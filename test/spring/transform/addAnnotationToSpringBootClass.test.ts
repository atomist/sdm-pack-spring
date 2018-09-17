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
import { InMemoryProjectFile } from "@atomist/sdm";

import * as assert from "assert";
import { addAnnotationToSpringBootClass } from "../../../lib/spring/transform/addAnnotationToSpringBootClass";
import {
    GishJavaPath,
    GishProject,
} from "../generator/SpringBootProjectStructure.test";

describe("addAnnotationToSpringBootClass", () => {

    it("should do nothing when no class found", async () => {
        const p = InMemoryProject.of();
        await addAnnotationToSpringBootClass("com.foo.Bar")(p, undefined);
    });

    it("should do nothing when not a Spring Boot project", async () => {
        const content = "public class Thing {}";
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, content),
        );
        await addAnnotationToSpringBootClass("com.foo.Bar")(p, undefined);
        const f = p.findFileSync(path);
        assert.strictEqual(f.getContentSync(), content);
    });

    it("should add annotation and import to existing project", async () => {
        const p = GishProject();
        await addAnnotationToSpringBootClass("com.foo.Bar")(p, undefined);
        const f = await p.getFile(GishJavaPath);
        assert(f.getContentSync().includes("@Bar"));
        assert(f.getContentSync().includes("import com.foo.Bar"));
    });

});
