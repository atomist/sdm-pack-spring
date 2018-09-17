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

import { Project } from "@atomist/automation-client";
import * as os from "os";

export function determineMavenCommand(p: Project): string {
    if (os.platform() === "win32") {
        if (process.env.JAVA_HOME && p.fileExistsSync("mvnw.cmd")) {
            return "mvnw";
        } else {
            return "mvn";
        }
    } else if (p.fileExistsSync("mvnw")) {
        return "./mvnw";
    } else {
        return "mvn";
    }
}