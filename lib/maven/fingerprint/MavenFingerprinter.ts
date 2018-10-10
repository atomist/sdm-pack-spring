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

import { FingerprintData } from "@atomist/automation-client";
import {
    computeShaOf,
    FingerprinterRegistration,
    PushImpactListenerInvocation,
} from "@atomist/sdm";
import { findDependenciesFromEffectivePom } from "../inspection/findDependencies";
import { VersionedArtifact } from "../VersionedArtifact";

/**
 * Public entry point for all Maven fingerprints. Use mvn help:effective-pom
 * to generic effective POM then parse it and turn it into fingerprints.
 * @param {GitProject} p
 * @return {Promise<Fingerprint[]>}
 */
export class MavenFingerprinter implements FingerprinterRegistration {

    public readonly name = "MavenFingerprinter";

    public async action(cri: PushImpactListenerInvocation): Promise<FingerprintData[]> {
        const dependencies = await findDependenciesFromEffectivePom(cri.project);
        return Promise.all([
            dependenciesFingerprintsFromParsedPom(dependencies),
            // TODO add other Maven POM fingerprints
        ]);
    }
}

function dependenciesFingerprintsFromParsedPom(dependencies: VersionedArtifact[]): FingerprintData {
    const json = JSON.stringify(dependencies);
    return {
        name: "dependencies",
        abbreviation: "deps",
        version: "0.1",
        sha: computeShaOf(json),
        data: json,
    };
}
