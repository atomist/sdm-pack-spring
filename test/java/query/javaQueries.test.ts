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
import * as assert from "assert";
import { existingAnnotations } from "../../../lib/java/query/javaQueries";

describe("javaQueries", () => {

    describe("existingAnnotations", async () => {

        it("should return empty array if class doesn't exist", async () => {
            const p = InMemoryProject.of();
            const annotations = await existingAnnotations(p, {
                sourceFilePath: "nonsense",
                className: "WhoCares",
            });
            assert.strictEqual(annotations.length, 0);
        });

        it("should find no annotations when class has none", async () => {
            const sourceFilePath = "src/main/java/Foo";
            const p = InMemoryProject.of(new InMemoryProjectFile(sourceFilePath, "public class Foo {}"));
            const annotations = await existingAnnotations(p, {
                sourceFilePath,
                className: "Foo",
            });
            assert.strictEqual(annotations.length, 0);
        });

        it("should find no annotations when class has none, despite having members", async () => {
            const sourceFilePath = "src/main/java/Foo";
            const p = InMemoryProject.of(
                new InMemoryProjectFile(sourceFilePath,
                    "public class Foo { private int i; public void foo() {} }"));
            const annotations = await existingAnnotations(p, {
                sourceFilePath,
                className: "Foo",
            });
            assert.strictEqual(annotations.length, 0);
        });

        it("should find no annotations when class has none, despite having additional modifiers", async () => {
            const sourceFilePath = "src/main/java/Foo";
            const p = InMemoryProject.of(
                new InMemoryProjectFile(sourceFilePath,
                    "public final class Foo { private int i; public void foo() {} }"));
            const annotations = await existingAnnotations(p, {
                sourceFilePath,
                className: "Foo",
            });
            assert.strictEqual(annotations.length, 0);
        });

        it("should find one annotation", async () => {
            const sourceFilePath = "src/main/java/Foo";
            const p = InMemoryProject.of(new InMemoryProjectFile(sourceFilePath, "@Bar public class Foo {}"));
            const annotations = await existingAnnotations(p, {
                sourceFilePath,
                className: "Foo",
            });
            assert.strictEqual(annotations.length, 1);
            assert.strictEqual(annotations[0].value, "@Bar");
        });

        it("should find two annotations", async () => {
            const sourceFilePath = "src/main/java/Foo";
            const p = InMemoryProject.of(new InMemoryProjectFile(sourceFilePath, "@Bar\n@Baz() public class Foo {}"));
            const annotations = await existingAnnotations(p, {
                sourceFilePath,
                className: "Foo",
            });
            assert.strictEqual(annotations.length, 2);
            assert.strictEqual(annotations[0].value, "@Bar");
            assert.strictEqual(annotations[1].value, "@Baz()");
        });
    });

});
