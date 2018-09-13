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

import { Microgrammar } from "@atomist/microgrammar";
import * as assert from "power-assert";
import { DependencyFinder } from "../../../../lib/maven/parse/grammar/DependencyFinder";
import { XmlTag } from "../../../../lib/maven/parse/grammar/xmlGrammars";
import { springBootPom } from "../../../spring/generator/TestPoms";

describe("DependencyFinder", () => {

    it("should find no dependencies in invalid pom", () => {
        const invalidPom = "this ain't no pom";
        const df = new DependencyFinder();
        df.consume(invalidPom);
        assert(df.dependencies.length === 0);
    });

    it("should find dependencies in valid pom", () => {
        const df = new DependencyFinder();
        df.consume(springBootPom("1.5.9.RELEASE"));
        assert(df.dependencies.length > 0);
    });

    it("should keep offset of group in valid pom", () => {
        const df = new DependencyFinder();
        df.consume(springBootPom("1.5.9.RELEASE"));
        assert(df.dependencies.length > 0);
        assert(df.offset > 0);
    });

    it("should find and change group", () => {
        const oldGroup = "com.krakow";
        const newGroup = "com.moscow";
        const df = new DependencyFinder();
        df.consume(springBootPom("1.5.9.RELEASE"));
        const its = df.dependencies.filter(d => d.group === oldGroup);
        assert(its.length === 1);
        const it = Microgrammar.updatableMatch<XmlTag>(its[0].groupMatch, springBootPom("1.5.9.RELEASE"));
        it.value = newGroup;
        const updatedPom = it.newContent();
        assert(updatedPom.indexOf(newGroup) !== -1);
    });
});
