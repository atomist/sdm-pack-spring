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
