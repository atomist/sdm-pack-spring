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

import { editModes } from "@atomist/automation-client";
import {
    CodeTransform,
    CodeTransformRegistration,
} from "@atomist/sdm";
import { addDependencyTransform } from "../../maven/transform/addDependencyTransform";

const DefaultGroup = "org.springframework.boot";

/**
 * Return a code transform that will add the given Spring Boot starter to a project.
 * Do nothing if it's already there, or the project isn't a Spring Boot project.
 * @param {string} artifact starter name
 * @param {string} group group the starter is from. Defaults to org.springframework.boot
 * @return {CodeTransform}
 */
export function addSpringBootStarterTransform(artifact: string,
                                              group: string = DefaultGroup): CodeTransform {
    return addDependencyTransform({ artifact, group, version: undefined });
}

/**
 * Command to add a Spring Boot starter to the project
 */
export const AddSpringBootStarter: CodeTransformRegistration<{ artifact: string, group?: string }> = {
    name: "add-spring-boot-starter",
    intent: ["add spring boot starter", "add starter"],
    description: "Add a Spring Boot starter to the project",
    parameters: {
        artifact: { description: "Starter artifact" },
        group: { description: `Startup group. Defaults to ${DefaultGroup}`, required: false },
    },
    transform: [
        async (p, ci) =>
            addSpringBootStarterTransform(
                ci.parameters.artifact,
                ci.parameters.group)(p, ci),
    ],
    transformPresentation: ci => new editModes.PullRequest(
        `add-spring-boot-starter-${ci.parameters.artifact}`,
        `Add spring boot starter ${ci.parameters.artifact}`,
    ),
};
