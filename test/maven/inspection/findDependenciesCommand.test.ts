import { GitHubRepoRef } from "@atomist/automation-client/operations/common/GitHubRepoRef";
import { GitCommandGitProject } from "@atomist/automation-client/project/git/GitCommandGitProject";
import { FindDependenciesCommand } from "../../../lib/maven/inspection/findDependenciesCommand";

import * as assert from "assert";

describe("FindDependenciesCommand", () => {

    it("should find some dependencies", async () => {
        const project = await GitCommandGitProject.cloned({ token: null },
            new GitHubRepoRef("atomist-seeds", "spring-rest-seed"));
        const deps = await FindDependenciesCommand.inspection(project, undefined);
        assert(deps.dependencies.length > 0);
        // f1.forEach((f: any) => assert.equal(f.group, "org.springframework.boot"));
    }).timeout(40000);

});
