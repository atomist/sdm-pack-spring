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

import {
    ProjectFile,
    projectUtils,
} from "@atomist/automation-client";
import {
    AutofixRegistration,
    CodeTransform,
} from "@atomist/sdm";
import * as format from "xml-formatter";
import { IsMaven } from "../pushtest/pushTests";

function formatXml(f: ProjectFile) {
    f.setContentSync(format(f.getContentSync(), {indentation: "    ", stripComments: false, debug: false}));
}

export const FormatPomCodeTransform: CodeTransform = p => {
    return projectUtils.doWithFiles(p, "**/pom.xml", formatXml);
};

export const FormatPomAutofix: AutofixRegistration = {
    name: "format-poms",
    pushTest: IsMaven,
    transform: FormatPomCodeTransform,
};
