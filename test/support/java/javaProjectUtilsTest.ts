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

import { InMemoryFile } from "@atomist/automation-client/project/mem/InMemoryFile";
import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import * as assert from "power-assert";
import { movePackage, renameClass } from "../../../src/support/java/javaProjectUtils";

describe("javaProjectUtils", () => {

    it("should not refactor on no match", done => {
        const t = new InMemoryProject();
        t.addFileSync("src/main/java/Foo.java", "public class Foo {}");
        movePackage(t, "com.foo", "com.bar")
            .then(_ => {
                const found = t.findFileSync("src/main/java/Foo.java");
                assert(found.getContentSync() === "public class Foo {}");
                done();
            }).catch(done);
    });

    it("should refactor on simple match", done => {
        const t = new InMemoryProject();
        t.addFileSync("src/main/java/com/foo/Foo.java", "package com.foo;\npublic class Foo {}");
        movePackage(t, "com.foo", "com.bar")
            .then(_ => {
                const found = t.findFileSync("src/main/java/com/bar/Foo.java");
                assert(found.getContentSync() === "package com.bar;\npublic class Foo {}");
                done();
            }).catch(done);
    });

    it("should refactor on deeper match", done => {
        const t = new InMemoryProject();
        t.addFileSync("src/main/java/com/foo/bar/Foo.java", "package com.foo.bar;\npublic class Foo {}");
        movePackage(t, "com.foo.bar", "com.something.else")
            .then(_ => {
                const found = t.findFileSync("src/main/java/com/something/else/Foo.java");
                assert(found);
                assert(found.getContentSync() === "package com.something.else;\npublic class Foo {}");
                done();
            }).catch(done);
    });

    it("should refactor using common path prefix", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/java/com/bands/smashing/pumpkins/Gish.java",
                content: "package com.bands.smashing.pumpkins; public class Gish {}",
            },
            {
                path: "src/main/java/com/bands/nirvana/Thing.java",
                content: "package com.bands.nirvana; public class Thing {}",
            },
        );
        movePackage(p, "com.bands", "com.nineties")
            .then(_ => {
                assert(!p.findFileSync("src/main/java/com/bands/smashing/pumpkins/Gish.java"));
                const nirvana = p.findFileSync("src/main/java/com/nineties/nirvana/Thing.java");
                assert(nirvana);
                assert(nirvana.getContentSync() === "package com.nineties.nirvana; public class Thing {}");
                const pumpkins = p.findFileSync("src/main/java/com/nineties/smashing/pumpkins/Gish.java");
                assert(pumpkins);
                assert(pumpkins.getContentSync() === "package com.nineties.smashing.pumpkins; public class Gish {}");

                done();
            }).catch(done);
    });

    it("should not work on Kotlin by default", done => {
        const t = new InMemoryProject();
        t.addFileSync("src/main/kotlin/com/foo/bar/Foo.kt", "package com.foo.bar\npublic class Foo {}");
        movePackage(t, "com.foo.bar", "com.something.else")
            .then(_ => {
                const found = t.findFileSync("src/main/java/com/something/else/Foo.kt");
                assert(!found);
                done();
            }).catch(done);
    });

    it("should work on Kotlin with correct glob pattern", done => {
        const t = new InMemoryProject();
        t.addFileSync("src/main/kotlin/com/foo/bar/Foo.kt", "package com.foo.bar\npublic class Foo {}");
        movePackage(t, "com.foo.bar", "com.something.else", "**/*.kt")
            .then(_ => {
                const found = t.findFileSync("src/main/kotlin/com/something/else/Foo.kt");
                assert(found);
                assert(found.getContentSync() === "package com.something.else\npublic class Foo {}");
                done();
            }).catch(done);
    });

    describe("renameClass", () => {

        it("shouldn't do anything on empty project", async () => {
            const p = new InMemoryProject();
            await renameClass(p, "Foo", "Bar");
            assert.equal(await p.totalFileCount(), 0);
        });

        it("rename Java in default package", async () => {
            const p = InMemoryProject.of(new InMemoryFile("src/main/java/Thing.java", "public class Thing {}"));
            await renameClass(p, "Thing", "OtherThing");
            const renamed = await p.findFile("src/main/java/OtherThing.java");
            assert(!!renamed);
            assert.equal(renamed.getContentSync(), "public class OtherThing {}");
        });

        it("rename Kotlin in default package", async () => {
            const p = InMemoryProject.of(new InMemoryFile("src/main/kotlin/Thing.kt", "public class Thing {}"));
            await renameClass(p, "Thing", "OtherThing");
            const renamed = await p.findFile("src/main/kotlin/OtherThing.kt");
            assert(!!renamed);
            assert.equal(renamed.getContentSync(), "public class OtherThing {}");
        });
    });

});
