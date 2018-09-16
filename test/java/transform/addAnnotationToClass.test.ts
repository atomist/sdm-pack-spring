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
import { addAnnotationToClass, addAnnotationToClassRaw } from "../../../lib/java/transform/addAnnotationToClass";

import * as assert from "assert";

describe("addAnnotationToClass", () => {

    describe("addAnnotationToClassRaw", () => {

        it("should do nothing when no class found", async () => {
            const p = InMemoryProject.of();
            await addAnnotationToClassRaw({ sourceFilePath: "not/there", className: "Foo", annotationName: "com.foo.Bar" })(p, undefined);
        });

        it("should add annotation", async () => {
            const path = "src/main/java/Thing.java";
            const p = InMemoryProject.of(
                new InMemoryProjectFile(path, "public class Thing {}"),
            );
            await addAnnotationToClassRaw({ sourceFilePath: path, className: "Thing", annotationName: "com.foo.Bar" })(p, undefined);
            const f = p.findFileSync(path);
            const content = f.getContentSync();
            assert.strictEqual(content, "@com.foo.Bar\npublic class Thing {}");
        });

    });

    describe("addAnnotationToClass", () => {

        it("should do nothing when no class found", async () => {
            const p = InMemoryProject.of();
            await addAnnotationToClass({ sourceFilePath: "not/there", className: "Foo", annotationFqn: "com.foo.Bar" })(p, undefined);
        });

        it("should add annotation", async () => {
            const path = "src/main/java/Thing.java";
            const p = InMemoryProject.of(
                new InMemoryProjectFile(path, "public class Thing {}"),
            );
            await addAnnotationToClass({ sourceFilePath: path, className: "Thing", annotationFqn: "com.foo.Bar" })(p, undefined);
            const f = p.findFileSync(path);
            const content = f.getContentSync();
            assert.strictEqual(content, "import com.foo.Bar;\n@Bar\npublic class Thing {}");
        });

        it ("should handle class in default package");

    });

});
