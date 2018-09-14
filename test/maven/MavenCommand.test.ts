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
import * as assert from "power-assert";
import { determineMavenCommand } from "../../lib/maven/MavenCommand";

describe("MavenCommandTests", () => {

    it("should use maven if no wrapper is present", async () => {
        const project = InMemoryProject.of();
        const command = determineMavenCommand(project);
        assert(command === "mvn");
    });

    it("should use maven wrapper if POSIX wrapper is present", async () => {
        const project = InMemoryProject.of({path: "mvnw", content: ""});
        const command = determineMavenCommand(project);
        assert(command === "./mvnw");
    });
});
