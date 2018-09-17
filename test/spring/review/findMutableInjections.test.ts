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

import { InMemoryProject } from "@atomist/sdm";

import * as assert from "power-assert";
import { findMutableInjections, MutableInjection } from "../../../lib/spring/review/findMutableInjections";

describe("find mutable injections", () => {

    it("finds none in empty project", async () => {
        const p = new InMemoryProject();
        const pr = await findMutableInjections(p);
        assert(pr.comments.length === 0);
    });

    it("finds none in a Java file", async () => {
        const path = "src/main/java/Foo.java";
        const content = "public class MyApp { private String dog; @Autowired public MyApp(Thing t) {} }";
        const p = InMemoryProject.of(
            { path, content });
        const pr = await findMutableInjections(p);
        assert(pr.comments.length === 0);
    });

    it("finds @Autowired field", async () => {
        const path = "src/main/java/Foo.java";
        const content = "public class MyApp { @Autowired private String dog; @Autowired public MyApp(Thing t) {} }";
        const p = InMemoryProject.of(
            { path, content });
        const pr = await findMutableInjections(p);
        assert(pr.comments.length === 1);
        const c = pr.comments[0] as MutableInjection;
        assert(c.name === "dog");
        assert(c.type === "field");
        assert(c.sourceLocation.path === path);
        assert(c.sourceLocation.lineFrom1 === 1);
        assert(c.sourceLocation.columnFrom1 > 1);
    });

    it("finds @Inject field", async () => {
        const path = "src/main/java/Foo.java";
        const content = "public class MyApp { @Inject private String dog; @Autowired public MyApp(Thing t) {}}";
        const p = InMemoryProject.of(
            { path, content });
        const r = await findMutableInjections(p);
        assert(r.comments.length === 1);
        assert((r.comments[0] as MutableInjection).name === "dog");
        r.comments.forEach(c => {
            const f = c as MutableInjection;
            assert(f.sourceLocation.offset > 0);
            assert(content.substr(f.sourceLocation.offset, f.name.length) === f.name);
        });
    });

    it("finds @Autowired setter", async () => {
        const path = "src/main/java/Foo.java";
        const content = "public class MyApp { private String dog; " +
            "@Autowired public void setDog(String dog) { this.dog = dog; } @Autowired public MyApp(Thing t) {} }";
        const p = InMemoryProject.of(
            { path, content });
        const r = await findMutableInjections(p);
        assert.equal(r.comments.length, 1);
        assert.equal((r.comments[0] as MutableInjection).type, "setter");
        assert.equal((r.comments[0] as MutableInjection).name,  "setDog");
    });
});
