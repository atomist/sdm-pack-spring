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
    globAspect,
    GlobAspectData,
} from "@atomist/sdm-pack-aspect";
import {
    Aspect,
    FP,
} from "@atomist/sdm-pack-fingerprint";

export function isMavenBuildFilesFingerprint(fp: FP): fp is FP<GlobAspectData> {
    return fp.type === MavenBuildFilesType;
}

export const MavenBuildFilesType = "maven-build-files";
export const MavenBuildFiles: Aspect<GlobAspectData> = globAspect({
    name: MavenBuildFilesType,
    displayName: "Maven POM files",
    glob: "**/pom.xml",
});
