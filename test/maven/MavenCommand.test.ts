import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import * as assert from "power-assert";
import { determineMavenCommand } from "../../lib/maven/MavenCommand";

describe("MavenCommandTests", () => {

    it("should use maven if no wrapper is present", async () => {
        const project = InMemoryProject.of();
        const command = determineMavenCommand(project);
        assert(command === "mvn");
    });

    it("should use maven wrapper if POSIX wrapper is present", async () => {
        const project = InMemoryProject.of({path: "mvnw", content: ""});
        const command = determineMavenCommand(project);
        assert(command === "mvnw");
    });

    it("should use maven wrapper if Windows wrapper is present", async () => {
        const project = InMemoryProject.of({path: "mvnw.cmd", content: ""});
        const command = determineMavenCommand(project);
        assert(command === "mvnw");
    });

    it("should use maven wrapper if both wrappers are present", async () => {
        const project = InMemoryProject.of({path: "mvnw.cmd", content: ""}, {path: "mvnw", content: ""});
        const command = determineMavenCommand(project);
        assert(command === "mvnw");
    });
});
