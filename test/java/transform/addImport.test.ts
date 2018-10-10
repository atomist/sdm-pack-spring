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
import { addImport } from "../../../lib/java/transform/imports";

describe("addImport", () => {

    it("should do nothing when no class found", async () => {
        const p = InMemoryProject.of();
        await addImport({ sourceFilePath: "not/there", fqn: "com.foo.Bar" })(p, undefined);
    });

    it("should add import when no imports present", async () => {
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "public class Thing {}"),
        );
        await addImport({ sourceFilePath: path, fqn: "com.foo.Bar" })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, "import com.foo.Bar;\npublic class Thing {}");
    });

    it("should add import after existing imports", async () => {
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "import com.foo.Baz;\n\npublic class Thing {}"),
        );
        await addImport({ sourceFilePath: path, fqn: "com.foo.Bar" })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, "import com.foo.Baz;\nimport com.foo.Bar;\n\npublic class Thing {}");
    });

    it("should add import after existing imports with strange formatting", async () => {
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "import com.foo.Baz\n;\n\npublic class Thing {}"),
        );
        await addImport({ sourceFilePath: path, fqn: "com.foo.Bar" })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, "import com.foo.Baz\n;\nimport com.foo.Bar;\n\npublic class Thing {}");
    });

    it("should add import when no imports present, respecting package", async () => {
        const path = "src/main/java/foo/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "package foo;\n\npublic class Thing {}"),
        );
        await addImport({ sourceFilePath: path, fqn: "com.foo.Bar" })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        // TODO we can format afterwards
        assert.strictEqual(content, "package foo;\n\nimport com.foo.Bar;\n\n\npublic class Thing {}");
    });

    it.skip("should add import when no imports present, respecting comment", async () => {
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "/**\nFoo\n*/\n\npublic class Thing {}"),
        );
        await addImport({ sourceFilePath: path, fqn: "com.foo.Bar" })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, "/**\nFoo\n*/\n\nimport com.foo.Bar;\npublic class Thing {}");
    });

    it("should not add import when it is already present", async () => {
        const path = "src/main/java/Thing.java";
        const p = InMemoryProject.of(
            new InMemoryProjectFile(path, "import com.foo.Bar;\npublic class Thing {}"),
        );
        await addImport({ sourceFilePath: path, fqn: "com.foo.Bar" })(p, undefined);
        const f = p.findFileSync(path);
        const content = f.getContentSync();
        assert.strictEqual(content, "import com.foo.Bar;\npublic class Thing {}");
    });

});
