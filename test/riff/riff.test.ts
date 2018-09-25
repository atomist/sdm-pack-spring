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

import { InMemoryProject } from "@atomist/automation-client";
import { InMemoryProjectFile } from "@atomist/sdm";
import * as assert from "assert";
import {
    RiffProjectCreationParameters,
    RiffProjectCreationTransform,
} from "../../lib/riff/riffGeneration";

describe("riff transform", () => {

    it("should not fail on empty project", async () => {
        const p = InMemoryProject.of();
        const parameters: RiffProjectCreationParameters = { fqn: "foo.Bar" };
        await RiffProjectCreationTransform(p, { parameters } as any);
    });

    it("should rename class and file, changing package", async () => {
        const p = InMemoryProject.of(
            new InMemoryProjectFile("riff.toml", "handler=func.Upper"),
            new InMemoryProjectFile("src/main/java/func/Upper.java", "package func; public class Upper {}"),
        );
        const parameters: RiffProjectCreationParameters = { fqn: "foo.Bar" };
        await RiffProjectCreationTransform(p, { parameters } as any);
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
        await RiffProjectCreationTransform(p, { parameters } as any);
        const toml = p.findFileSync("riff.toml");
        assert.strictEqual(toml.getContentSync(), "handler=foo.Bar");
    });

});
