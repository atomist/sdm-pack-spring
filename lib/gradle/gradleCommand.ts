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

export function determineGradleCommand(p: Project): string {
    if (p.fileExistsSync("gradlew.bat") && os.platform() === "win32") {
       return "gradlew";
    } else if (p.fileExistsSync("gradlew")) {
        return "./gradlew";
    } else {
        return "gradle";
    }
}
