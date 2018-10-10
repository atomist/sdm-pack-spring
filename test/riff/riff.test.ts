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
    BaseParameter,
    InMemoryProject,
    InMemoryProjectFile,
} from "@atomist/automation-client";
import {
    AddressNoChannels,
} from "@atomist/sdm";
import * as assert from "assert";
import {
    RiffProjectCreationParameterDefinitions,
    RiffProjectCreationParameters,
    RiffProjectCreationTransform,
} from "../../lib/riff/riffGeneration";

describe("riff transform", () => {

    it("should not fail on empty project", async () => {
        const p = InMemoryProject.of();
        const parameters: RiffProjectCreationParameters = { fqn: "foo.Bar" };
        await RiffProjectCreationTransform(p, { parameters, addressChannels: AddressNoChannels } as any);
    });

    it("should rename class and file, changing package", async () => {
        const p = InMemoryProject.of(
            new InMemoryProjectFile("riff.toml", "handler=\"func.Upper\""),
            new InMemoryProjectFile("src/main/java/func/Upper.java", "package func; public class Upper {}"),
        );
        const parameters: RiffProjectCreationParameters = { fqn: "foo.Bar" };
        await RiffProjectCreationTransform(p, { parameters, addressChannels: AddressNoChannels } as any);
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
            new InMemoryProjectFile("riff.toml", "handler=\"func.Upper\""),
            new InMemoryProjectFile("src/main/java/func/Upper.java", "package func; public class Upper {}"),
        );
        const parameters: RiffProjectCreationParameters = { fqn: "foo.Bar" };
        await RiffProjectCreationTransform(p, { parameters, addressChannels: AddressNoChannels } as any);
        const toml = p.findFileSync("riff.toml");
        assert.strictEqual(toml.getContentSync(), "handler=\"foo.Bar\"");
    });

    it("should reject bad packages", () => {
        const bad = ["", "64442", "6a", "-888", "a"];
        for (const badness of bad) {
            assert(!(RiffProjectCreationParameterDefinitions.fqn as BaseParameter).pattern.test(badness),
                `Should have rejected '${badness}'`);
        }
    });

    it("should accept good packages", () => {
        const good = ["a.b", "c.d", "e.f.com"];
        for (const goodness of good) {
            assert((RiffProjectCreationParameterDefinitions.fqn as BaseParameter).pattern.test(goodness),
                `Should have accepted '${goodness}'`);
        }
    });

});
