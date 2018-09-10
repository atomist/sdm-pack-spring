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

import { Fingerprint } from "@atomist/automation-client/project/fingerprint/Fingerprint";
import { computeShaOf } from "@atomist/sdm/api-helper/misc/sha";
import {
    toVersionedArtifact,
} from "../parse/artifact";
import { coordinates } from "../parse/grammar/VersionedArtifactMatch";
import { VersionedArtifact } from "../VersionedArtifact";

/**
 * Don't call except via mavenFingerprinter
 * @param epom xml2js parsed forml
 * @return {Promise<Fingerprint>}
 */
export async function dependenciesFingerprintsFromParsedPom(epom: any): Promise<Fingerprint> {
    const json = JSON.stringify(dependenciesFromParsedPom(epom));
    return {
        name: "dependencies",
        abbreviation: "deps",
        version: "0.1",
        sha: computeShaOf(json),
        data: json,
    };
}

export function dependenciesFromParsedPom(epom: any): VersionedArtifact[] {
    const dependencies: VersionedArtifact[] =
        epom.project.dependencies[0].dependency.map(toVersionedArtifact);
    const sorted = dependencies
        .sort((d1, d2) => coordinates(d1) > coordinates(d2) ? 1 : -1);
    return sorted;
}
