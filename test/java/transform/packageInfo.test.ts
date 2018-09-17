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
import { packageInfo } from "../../../lib/java/transform/packageInfo";

describe("packageInfo", () => {

    it("should be undefined when no class found", async () => {
        const p = InMemoryProject.of();
        const pi = await packageInfo(p, "not/there");
        assert(!pi);
    });

    it("should be undefined in default package", async () => {
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "public class Thing {}"),
        );
        const pi = await packageInfo(p, path);
        assert(!pi);
    });

    it("should be defined at 0", async () => {
        const path = "src/main/java/foo/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "package foo;\npublic class Thing {}"),
        );
        const pi = await packageInfo(p, path);
        assert(!!pi);
        assert.strictEqual(pi.offset, 0);
        assert.strictEqual(pi.fqn, "foo");
        assert.strictEqual(pi.insertAfter, "package foo;".length);
    });

    it("should be defined at > 0", async () => {
        const path = "src/main/java/foo/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "/** And this is a comment **/\n\n\npackage foo.bar;\npublic class Thing {}"),
        );
        const pi = await packageInfo(p, path);
        assert(!!pi);
        assert(pi.offset > 0);
        assert.strictEqual(pi.fqn, "foo.bar");
        assert.strictEqual(pi.insertAfter, pi.offset + "package foo.bar;".length);
    });

});
