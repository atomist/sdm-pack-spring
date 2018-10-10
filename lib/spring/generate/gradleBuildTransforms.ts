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

import { projectUtils } from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";

export const AddGradleBootRunArgsSupport: CodeTransform = async (p, ci) => {
    return projectUtils.doWithFiles(p, "build.gradle", async buildFile => {
        const content = await buildFile.getContent();
        const bootRunArgsSupport = `
bootRun {
    if (project.hasProperty('args')) {
        args project.args.split(',')
    }
}
        `;
        await buildFile.setContent(content +  bootRunArgsSupport);
    });
};
