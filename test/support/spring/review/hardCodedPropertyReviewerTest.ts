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
import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";

import { InMemoryFile } from "@atomist/automation-client/project/mem/InMemoryFile";
import * as assert from "power-assert";
import { HardCodedPropertyReviewer, HardcodePropertyCategory } from "../../../../src/support/spring/review/hardcodedPropertyReviewer";
import { fakeListenerInvocation } from "../../fakeListenerInvocation";



describe("HardCodePropertyReviewer", () => {

    it("should not find any problems in empty project", async () => {
        const id = new GitHubRepoRef("a", "b");
        const p = InMemoryProject.from(id);
        const r = await HardCodedPropertyReviewer.action(fakeListenerInvocation(p) as any);
        assert.equal(r.comments.length, 0);
    });

    it("pass harmless properties file", async () => {
        const id = new GitHubRepoRef("a", "b");
        const p = InMemoryProject.from(id, new InMemoryFile("src/main/resources/application.properties", "thing=1"));
        const r = await HardCodedPropertyReviewer.action(fakeListenerInvocation(p) as any);
        assert.equal(r.comments.length, 0);
    });

    it("flag bad port property", async () => {
        const id = new GitHubRepoRef("a", "b");
        const f = new InMemoryFile("src/main/resources/application.properties", "server.port=8080");
        const p = InMemoryProject.from(id, f);
        const r = await HardCodedPropertyReviewer.action(fakeListenerInvocation(p) as any);
        assert.equal(r.comments.length, 1);
        const comment =  r.comments[0];
        assert.equal(comment.category, HardcodePropertyCategory);
        assert.equal(comment.sourceLocation.path, f.path);
    });

    it("accept good port property", async () => {
        const id = new GitHubRepoRef("a", "b");
        const p = InMemoryProject.from(id, new InMemoryFile("src/main/resources/application.properties", "server.port=${PORT}"));
        const r = await HardCodedPropertyReviewer.action(fakeListenerInvocation(p) as any);
        assert.equal(r.comments.length, 0);
    });

    it("reject hard-coded password", async () => {
        const id = new GitHubRepoRef("a", "b");
        const p = InMemoryProject.from(id, new InMemoryFile("src/main/resources/application.properties", "spring.datasource.password=tiger"));
        const r = await HardCodedPropertyReviewer.action(fakeListenerInvocation(p) as any);
        assert.equal(r.comments.length, 1);
    });

});

