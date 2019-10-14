/*
 * Copyright © 2019 Atomist, Inc.
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
    LocalProject,
    Project,
} from "@atomist/automation-client";
import {
    spawnLog,
    StringCapturingProgressLog,
} from "@atomist/sdm";
import {
    Aspect,
    fingerprintOf,
} from "@atomist/sdm-pack-fingerprint";
import * as fs from "fs-extra";
import * as path from "path";
import { TmpDir } from "temp-file";
import { determineGradleCommand } from "../gradle/gradleCommand";
import { determineMavenCommand } from "../maven/mavenCommand";

export const ClasspathDependencyType = "classpath-dependency";

async function getMavenClasspathDependencies(p: Project): Promise<string[]> {
    const lp = p as LocalProject;
    const log = new StringCapturingProgressLog();
    const tempFile = await new TmpDir().getTempFile({prefix: "classpath", suffix: ".txt"});
    await spawnLog(await determineMavenCommand(p), ["dependency:build-classpath", `-Dmdep.outputFile=${tempFile}`], {log, cwd: lp.baseDir});
    const classpath = await fs.readFile(tempFile, "UTF-8");
    return classpath
        .split(path.delimiter)
        .map(element => {
            return element.substr(element.lastIndexOf(path.sep) + 1);
        });
}

async function getGradleClasspathDependencies(p: Project): Promise<string[]> {
    const lp = p as LocalProject;
    const initScript = `allprojects {
    apply plugin: "java"
    task listCompilePath(dependsOn: configurations.compileClasspath) {
        doLast {
            println "classpath=\${configurations.testCompileClasspath.collect { File file -> file }.join('${path.delimiter}')}"
        }
    }
}`;
    const tempFile = await new TmpDir().getTempFile({prefix: "init", suffix: ".gradle"});
    await fs.writeFile(tempFile, initScript);
    const log = new StringCapturingProgressLog();
    await spawnLog(await determineGradleCommand(p), ["--init-script", tempFile, "listCompilePath"], {log, cwd: lp.baseDir});
    const result = /classpath=(.*)/.exec(log.log);
    if (result) {
        return result[1]
            .split(path.delimiter)
            .map(element => {
                return element.substr(element.lastIndexOf(path.sep) + 1);
            });
    } else {
        return [];
    }
}

export interface ClasspathElement {
    jarName: string;
}

export const ClasspathDependencyAspect: Aspect<ClasspathElement> = {
    name: "classpath-dependency-aspect",
    displayName: "Classpath dependencies",
    extract: async p => {
        if (await p.hasFile("pom.xml")) {
            return (await getMavenClasspathDependencies(p))
                .map(e => {
                    const cpElement: ClasspathElement = { jarName: e };
                    return cpElement;
                })
                .map(cp => fingerprintOf({type: ClasspathDependencyType, data: cp}));
        } else if (await p.hasFile("build.gradle")) {
            return (await getGradleClasspathDependencies(p))
                .map(e => {
                    const cpElement: ClasspathElement = { jarName: e };
                    return cpElement;
                })
                .map(cp => fingerprintOf({type: ClasspathDependencyType, data: cp}));
        } else {
            return [];
        }
    },
};
