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

import { MicrogrammarBasedFileParser } from "@atomist/automation-client";
import { microgrammar } from "@atomist/microgrammar";
import {
    GlobAspectData,
    matchAspect,
} from "@atomist/sdm-pack-aspect";
import { FP } from "@atomist/sdm-pack-fingerprint";

export const JavaVersionType = "java-version";

export interface JavaVersionData {
    javaVersion: string;
}

const JavaVersionGrammar = microgrammar({
    _prefix: "<java.version>",
    javaVersion: /[a-zA-Z0-9.]+/,
    _suffix: "</java.version>",
});

export function isJavaVersionFingerprint(fp: FP): fp is FP<GlobAspectData<JavaVersionData>> {
    return fp.type === JavaVersionType;
}

/**
 * Look for Java Version in a Maven file
 * @type {Aspect<GlobAspectData<JavaVersionData>>}
 */
export const JavaVersion = matchAspect<JavaVersionData>({
    name: JavaVersionType,
    displayName: "Java version",
    glob: "**/pom.xml",
    pathExpression: "//javaVersion",
    parseWith: new MicrogrammarBasedFileParser("pom", "version", JavaVersionGrammar),
    mapper: mr => {
        return { javaVersion: mr.$value };
    },
    toDisplayableFingerprint: fp => {
        return (fp as FP<GlobAspectData<JavaVersionData>>).data.matches.map(m => m.javaVersion).join(",");
    },
});
