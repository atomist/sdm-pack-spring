import { InMemoryProject } from "@atomist/automation-client";
import { InMemoryProjectFile } from "@atomist/sdm";
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
