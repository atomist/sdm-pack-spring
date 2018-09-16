import { InMemoryProject } from "@atomist/automation-client";
import { InMemoryProjectFile } from "@atomist/sdm";
import * as assert from "assert";
import { addImport } from "../../../lib/java/transform/addImport";

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
