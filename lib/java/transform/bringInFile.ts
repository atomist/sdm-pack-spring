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

import { JavaFileParser } from "@atomist/antlr";
import {
    doWithAllMatches,
    doWithFiles,
    InMemoryProject,
    logger,
} from "@atomist/automation-client";
import {
    CodeTransform,
    InMemoryProjectFile,
} from "@atomist/sdm";
import axios from "axios";
import * as _ from "lodash";
import {
    packageToPath,
} from "../javaProjectUtils";
import { JavaPackage } from "../query/javaPathExpressions";
import { packageInfo } from "../query/packageInfo";

/**
 * Add the downloaded content to the given project,
 * putting it in the appropriate package. Assumes the file is
 * self-contained. URL must end with path of the Java file.
 * Does not change the package in the file:
 * refactor in a separate transform if you want to do this.
 * @param {string} url url of the content. Must be publicly accessible
 * @param sourceRoot source root to place the file under
 */
export function bringInFile(url: string,
                            sourceRoot: string = "src/main/java",
                            targetPackage?: string): CodeTransform {
    return async p => {
        const response = await axios.get(url);
        const content: string = response.data;
        // Parse it to find the package
        const tempPath = "Some.java";
        const p1 = InMemoryProject.of(new InMemoryProjectFile(tempPath, content));
        const pack = await packageInfo(p1, tempPath);
        if (!pack) {
            throw new Error("in default package??");
        }
        const className = _.last(url.split("/"));
        const path = sourceRoot + "/" + packageToPath(pack.fqn) + "/" + className;
        logger.info("Package is %s: Writing file from %s to %s, class name is %s", pack.fqn, url, path, className);
        await p.addFile(path, content);
        if (!!targetPackage) {
            await doWithAllMatches(p, JavaFileParser, path, JavaPackage, m => {
                m.$children.find(c => c.$name === "qualifiedName").$value = targetPackage;
            });
            await doWithFiles(p, tempPath, async f => {
                await f.setPath(f.path.replace(packageToPath(pack.fqn), packageToPath(targetPackage)));
            });
        }
    };
}
