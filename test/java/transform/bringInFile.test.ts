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
import * as assert from "assert";
import { bringInFile } from "../../../lib/java/transform/bringInFile";

describe("bringInFile", () => {

    it("should bring in file to empty project", async () => {
        const p = InMemoryProject.of();
        const trans = bringInFile(
            "https://raw.githubusercontent.com/spring-guides/gs-securing-web/master/complete/src/main/java/hello/WebSecurityConfig.java",
            "src/main/java");
        await trans(p, undefined);
        const path = "src/main/java/hello/WebSecurityConfig.java";
        const f = p.findFileSync(path);
        assert(!!f, `Found ${await p.totalFileCount()} files`);
    });

});
