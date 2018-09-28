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
import { removeUnusedImports } from "../../../lib/java/transform/imports";

describe("removeUnusedImports", () => {

    it("should do nothing when no class found", async () => {
        const p = InMemoryProject.of();
        await removeUnusedImports({ sourceFilePath: "not/there" })(p, undefined);
    });

    it("should do nothing when no imports present", async () => {
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "public class Thing {}"),
        );
        await removeUnusedImports({ sourceFilePath: path })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, "public class Thing {}");
    });

    it("should remove unused import", async () => {
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "import com.foo.Baz;\n\npublic class Thing {}"),
        );
        await removeUnusedImports({ sourceFilePath: path })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, "\n\npublic class Thing {}");
    });

    it("should not remove used import", async () => {
        const path = "src/main/java/Thing.java";
        const src = "import com.foo.Baz;\n\npublic class Thing { public Baz b;}";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, src),
        );
        await removeUnusedImports({ sourceFilePath: path })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, src);
    });

    it("should not remove .* import", async () => {
        const path = "src/main/java/Thing.java";
        const src = "import com.foo.*;\n\npublic class Thing { }";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, src),
        );
        await removeUnusedImports({ sourceFilePath: path })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, src);
    });
});
