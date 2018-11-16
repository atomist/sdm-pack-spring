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

import assert = require("power-assert");
import { FormatPomCodeTransform } from "../../../lib/maven/transform/formatPom";
import { projectOfPom } from "./addPluginTransform.test";

describe("formatPomTest", () => {

    it("no POM causes no change, no error", async () => {
        const xml = "<root><!-- content --><p><p>This is <b>some</b> content.</p></p></root>";
        const p = projectOfPom(xml);
        await FormatPomCodeTransform(p, {} as any);
        const pom = await p.getFile("pom.xml");
        const expected = `<root>
    <!-- content -->
    <p>
        <p>This is <b>some</b> content.</p>
    </p>
</root>`;
        assert(pom.getContentSync() === expected);
    });
});
