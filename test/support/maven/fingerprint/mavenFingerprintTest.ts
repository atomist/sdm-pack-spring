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

import * as assert from "power-assert";
import { PushImpactListenerInvocation } from "@atomist/sdm";
import { MavenFingerprinter } from "../../../../src/support/maven/fingerprint/MavenFingerprinter";



describe("MavenFingerprinter", () => {

    it("should have name", () => {
        assert(!!new MavenFingerprinter().name);
    });

    it("should find some dependencies", async () => {
        const Seed = await GitCommandGitProject.cloned({token: null},
            new GitHubRepoRef("atomist-seeds", "spring-rest-seed"));
        const fp = await new MavenFingerprinter().action({ project: Seed} as PushImpactListenerInvocation);
        const f1 = JSON.parse(fp[0].data);
        assert(f1.length > 0);
        f1.forEach(f => assert.equal(f.group, "org.springframework.boot"));
    }).timeout(40000);

});
