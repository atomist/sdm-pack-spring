import { InMemoryProject } from "@atomist/automation-client";
import { InMemoryProjectFile } from "@atomist/sdm";
import * as assert from "assert";
import { renamePropertyAndClass, RiffProjectCreationParameters } from "../../lib/riff/riff";

describe("riff transform", () => {

    it("should not fail on empty project", async () => {
        const p = InMemoryProject.of();
        const parameters: RiffProjectCreationParameters = { fqn: "foo.Bar" };
        await renamePropertyAndClass(p, { parameters } as any);
    });

    it("should rename class and file, changing package", async () => {
        const p = InMemoryProject.of(
            new InMemoryProjectFile("riff.toml", "handler=func.Upper"),
            new InMemoryProjectFile("src/main/java/func/Upper.java", "package func; public class Upper {}"),
        );
        const parameters: RiffProjectCreationParameters = { fqn: "foo.Bar" };
        await renamePropertyAndClass(p, { parameters } as any);
        const old = p.findFileSync("src/main/java/func/Upper.java");
        assert.strictEqual(old, undefined);
        const now = p.findFileSync("src/main/java/foo/Bar.java");
        assert(!!now,
            "Files are " + p.filesSync.map(f => f.path).join(","));
        assert.strictEqual(now.getContentSync(),
            "package foo; public class Bar {}");
    });

    it("should rename class and file, changing to default package");

    it("should update property", async () => {
        const p = InMemoryProject.of(
            new InMemoryProjectFile("riff.toml", "handler=func.Upper"),
            new InMemoryProjectFile("src/main/java/func/Upper.java", "package func; public class Upper {}"),
        );
        const parameters: RiffProjectCreationParameters = { fqn: "foo.Bar" };
        await renamePropertyAndClass(p, { parameters } as any);
        const toml = p.findFileSync("riff.toml");
        assert.strictEqual(toml.getContentSync(), "handler=foo.Bar");
    });

});
