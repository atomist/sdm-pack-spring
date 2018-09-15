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

import { isLocalProject } from "@atomist/automation-client";
import { CodeInspection } from "@atomist/sdm";
import * as _ from "lodash";
import { dependenciesFromParsedPom } from "../fingerprint/dependenciesFingerprintsFromParsedPom";
import { extractEffectivePom } from "../fingerprint/effectivePomExtractor";
import {
    coordinates,
    VersionedArtifact,
} from "../VersionedArtifact";

/**
 * Dependencies of a project
 */
export interface Dependencies {
    dependencies: VersionedArtifact[];
}

/**
 * Find dependencies from the effective POM
 * @param {Project} p
 * @return {Promise<any>}
 * @constructor
 */
export const FindDependencies: CodeInspection<Dependencies> = async p => {
    if (!isLocalProject(p)) {
        throw new Error(`Fingerprinting only works on local projects: had ${p.id.url}`);
    }

    try {
        await p.findFile("pom.xml");
        const epom = await extractEffectivePom(p);
        return { dependencies: dependenciesFromParsedPom(epom) };
    } catch {
        // If we can't find a pom, just exit
        return { dependencies: [] };
    }
};

export const FindDependenciesOfGroup: CodeInspection<Dependencies, { group: string }> = async (p, i) => {
    const deps = await FindDependencies(p, i);
    return {
        dependencies: deps.dependencies
            .filter(d => d.group === i.parameters.group),
    };
};

/**
 * Return unique dependencies found across all of these projects
 * @param {Dependencies[]} deps
 * @return {Dependencies}
 */
export function uniqueDependencies(deps: Dependencies[]): Dependencies {
    return {
        dependencies: _.uniqBy(
            _.flatten(deps.map(d => d.dependencies)),
            d => coordinates(d)),
    };
}
