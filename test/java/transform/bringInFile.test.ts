import { InMemoryProject } from "@atomist/automation-client";
import * as assert from "assert";
import { bringInFile } from "../../../lib/java/transform/bringInFile";

describe("bringInFile", () => {

    it("should bring in file to empty project", async () => {
        const p = InMemoryProject.of();
        const trans = bringInFile(
            "https://raw.githubusercontent.com/spring-guides/gs-securing-web/master/complete/src/main/java/hello/WebSecurityConfig.java",
            "src/main/java");
        await trans(p, undefined);
        const path = "src/main/java/hello/WebSecurityConfig.java";
        const f = p.findFileSync(path);
        assert(!!f, `Found ${await p.totalFileCount()} files`);
    });

});
