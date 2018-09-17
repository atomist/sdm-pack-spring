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
import { removeAutowiredOnSoleConstructor } from "../../../lib/spring/transform/removeUnnecessaryAutowiredAnnotations";
import { removeUnnecessaryComponentScanEditor } from "../../../lib/spring/transform/removeUnnecessaryComponentScanAnnotations";

describe("remove unnecessary annotations", () => {

    describe("removeUnnecessaryComponentScanEditor", () => {

        it("doesn't fail on empty project", async () => {
            const p = new InMemoryProject();
            await removeUnnecessaryComponentScanEditor(p, null);
        });

        it("removes unnecessary annotation", async () => {
            const path = "src/main/java/Foo.java";
            const content = "public @SpringBootApplication @ComponentScan class MyApp {}";
            const p = InMemoryProject.of(
                { path, content });
            await removeUnnecessaryComponentScanEditor(p, null);
            const f = p.findFileSync(path);
            assert(f.getContentSync() === content.replace("@ComponentScan ", ""));
        });

        it("also removes import if only one use");

        it("does not remove import if multiple uses");

        it("doesn't remove necessary annotation", async () => {
            const path = "src/main/java/Foo.java";
            const content = "public @ComponentScan class MyApp {}";
            const p = InMemoryProject.of(
                { path, content });
            await removeUnnecessaryComponentScanEditor(p, null);
            const f = p.findFileSync(path);
            assert(f.getContentSync() === content);
        });
    });

    describe("removeAutowiredOnSoleConstructor", async () => {

        it("doesn't fail on empty project", async () => {
            const p = new InMemoryProject();
            await removeAutowiredOnSoleConstructor(p, null);
        });

        it("removes unnecessary annotation", async () => {
            const path = "src/main/java/Foo.java";
            const content = "public class MyApp { @Autowired public MyApp(Thing t) {} }";
            const p = InMemoryProject.of(
                { path, content });
            await removeAutowiredOnSoleConstructor(p, null);
            const f = p.findFileSync(path);
            assert.strictEqual(f.getContentSync(), content.replace("@Autowired ", ""));
        });

        it("also removes import if only one use");

        it("does not remove import if multiple uses");

        it("doesn't remove necessary annotation", async () => {
            const path = "src/main/java/Foo.java";
            const content = "public class MyApp { @Autowired public MyApp(Thing t) {} @Autowired public MyApp(Thing t, OtherThing ot) {} }";
            const p = InMemoryProject.of(
                { path, content });
            await removeAutowiredOnSoleConstructor(p, null);
            const f = p.findFileSync(path);
            assert.strictEqual(f.getContentSync(), content);
        });
    });

});
