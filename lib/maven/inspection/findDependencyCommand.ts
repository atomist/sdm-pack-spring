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
    CodeInspection,
    CodeInspectionRegistration,
    ParametersObject,
} from "@atomist/sdm";
import {
    MavenArtifactIdRegExp,
    MavenGroupIdRegExp,
} from "../../java/javaPatterns";
import { VersionedArtifact } from "../VersionedArtifact";
import { FindDependencies } from "./findDependencies";

export interface FindDependencyParameters {
    group: string;
    artifact: string;
}

export const FindDependencyParametersDefinitions: ParametersObject<any, any> = {
    artifact: {
        ...MavenArtifactIdRegExp,
    },
    group: {
        ...MavenGroupIdRegExp,
    },
};

/**
 * Find the dependency (if any) of the given group and artifact
 * @param {Project} p
 * @param {ParametersInvocation<FindDependencyParameters>} i
 * @return {Promise<VersionedArtifact | undefined>}
 * @constructor
 */
export const FindDependency: CodeInspection<VersionedArtifact, FindDependencyParameters> = async (p, i) => {
    const dependencies = await FindDependencies(p, i);
    return dependencies.dependencies.find(d => d.artifact === i.parameters.artifact && d.group === i.parameters.group);
};

export const FindDependencyCommand: CodeInspectionRegistration<VersionedArtifact, FindDependencyParameters> = {
    name: "findDependency",
    intent: "find dependency",
    parameters: FindDependencyParametersDefinitions,
    inspection: FindDependency,
    // onInspectionResults: async results => {
    // },
};
