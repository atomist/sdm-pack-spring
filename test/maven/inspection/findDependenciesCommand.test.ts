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
    GitCommandGitProject,
    GitHubRepoRef,
} from "@atomist/automation-client";
import { FindDependenciesCommand } from "../../../lib/maven/inspection/findDependenciesCommand";

import * as assert from "assert";

describe("FindDependenciesCommand", () => {

    it("should find some dependencies", async () => {
        const project = await GitCommandGitProject.cloned({ token: null },
            new GitHubRepoRef("atomist-seeds", "spring-rest-seed"));
        const deps = await FindDependenciesCommand.inspection(project, undefined);
        assert(deps.dependencies.length > 0);
        // f1.forEach((f: any) => assert.equal(f.group, "org.springframework.boot"));
    }).timeout(90000);

});
