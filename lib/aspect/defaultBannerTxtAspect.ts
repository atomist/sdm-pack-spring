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
import { FP } from "@atomist/sdm-pack-fingerprint";

const DefaultBannerType = "default-banner";

export function isDefaultBannerFingerprint(fp: FP): fp is FP<GlobAspectData> {
    return fp.type === DefaultBannerType;
}

/**
 * Default banner text
 */
export const DefaultBannerAspect = globAspect({
    name: DefaultBannerType,
    displayName: "Spring Boot banner",
    glob: "**/src/main/resources/banner.txt",
});
