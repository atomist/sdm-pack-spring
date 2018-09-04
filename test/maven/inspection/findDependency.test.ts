import { GitHubRepoRef } from "@atomist/automation-client/operations/common/GitHubRepoRef";
import { GitCommandGitProject } from "@atomist/automation-client/project/git/GitCommandGitProject";

import * as assert from "assert";
import { FindDependency } from "../../../lib/maven/inspection/findDependencyCommand";

describe("FindDependency", () => {

    it("when not found", async () => {
        const project = await GitCommandGitProject.cloned({ token: null },
            new GitHubRepoRef("atomist-seeds", "spring-rest-seed"));
        const va = await FindDependency(project, {
            parameters: { group: "foo", await: "bar"},
        } as any);
        assert.strictEqual(va, undefined);
        // f1.forEach((f: any) => assert.equal(f.group, "org.springframework.boot"));
    }).timeout(40000);

    it("when found", async () => {
        const project = await GitCommandGitProject.cloned({ token: null },
            new GitHubRepoRef("atomist-seeds", "spring-rest-seed"));
        const va = await FindDependency(project, {
            parameters: { group: "org.springframework.boot", artifact: "spring-boot-starter-web"},
        } as any);
        assert(!!va, "Artifact should be defined");
        // f1.forEach((f: any) => assert.equal(f.group, "org.springframework.boot"));
    }).timeout(40000);

});
