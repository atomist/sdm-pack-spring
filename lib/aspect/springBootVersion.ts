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
    Aspect,
    DefaultTargetDiffHandler,
    FP,
} from "@atomist/sdm-pack-fingerprint";
import {
    applyParentPom,
    extractParentPom,
} from "./maven/parentPom";

const SpringBootVersionType = "spring-boot-version";

export interface BootVersion {
    version: string;
}

export const SpringBootVersion: Aspect<BootVersion> = {
    name: SpringBootVersionType,
    displayName: "Spring Boot version",
    extract: async p => {
        const fps = await extractParentPom(p);
        if (!!fps && fps.length > 0) {
            return fps.filter(fp => fp.data.artifact === "spring-boot-starter-parent" && fp.data.group === "org.springframework.boot").map(fp => ({
                ...fp,
                type: SpringBootVersionType,
                name: SpringBootVersionType,
                abbreviation: "sbv",
            }));
        }
        return undefined;
    },
    apply: (p, papi) => {
        return applyParentPom({
            artifact: "spring-boot-starter-parent",
            group: "org.springframework.boot",
            version: papi.parameters.fp.data.version,
        }, p);
    },
    toDisplayableFingerprintName: () => "Spring Boot version",
    toDisplayableFingerprint: fp => fp.data.version,
    workflows: [
        DefaultTargetDiffHandler,
    ],
};

export function isSpringBootVersionFingerprint(fp: FP): fp is FP<BootVersion> {
    return fp.type === SpringBootVersionType;
}
