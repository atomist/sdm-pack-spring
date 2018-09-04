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

import { doWithMatches } from "@atomist/automation-client/project/util/parseUtils";
import { CodeInspection } from "@atomist/sdm";
import { parentStanzaOfGrammar } from "../../maven/parse/grammar/mavenGrammars";
import { SpringBootStarter } from "../springConstants";

import * as _ from "lodash";

/**
 * SpringBoot version
 */
export interface SpringBootVersion {

    version: string;

    count: number;

}

/**
 * Spring Boot versions found in a repository or organization
 */
export interface SpringBootVersions {

    versions: SpringBootVersion[];
}

/**
 * Find Spring Boot version or versions in this repo.
 * If it's not a Spring Boot project, there will be zero.
 * If it has a pom in the root directory, there will be one.
 * If it's a monorepo, there may be > 1. In this case,
 * only distinct versions will be reported.
 * @param {Project} p
 * @return {Promise<SpringBootVersion[]>}
 * @constructor
 */
export const SpringBootVersionInspection: CodeInspection<SpringBootVersions> = async p => {
    const versions: SpringBootVersion[] = [];
    await doWithMatches(p, "**/pom.xml",
        parentStanzaOfGrammar(SpringBootStarter), m => {
            const found = versions.find(v => v.version === m.version.value);
            if (!found) {
                versions.push({ version: m.version.value, count: 1 });
            } else {
                found.count = found.count + 1;
            }
        });
    return { versions };
};

/**
 * Consolidate the given SpringBootVersions into a single record
 * @param {SpringBootVersions[]} multiVersions
 * @return {SpringBootVersions}
 */
export function consolidateSpringBootVersions(multiVersions: SpringBootVersions[]): SpringBootVersions {
    const versions: SpringBootVersion[] = [];

    function record(version: SpringBootVersion) {
        const found = versions.find(v => v.version === version.version);
        if (!found) {
            versions.push(version);
        } else {
            found.count = found.count + version.count;
        }
    }

    for (const svs of multiVersions) {
        for (const sv of svs.versions) {
            record(sv);
        }
    }

    return { versions: _.sortBy(versions, ["version"]) };
}
