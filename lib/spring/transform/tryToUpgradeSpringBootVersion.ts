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

import { CodeTransformRegistration, PullRequest } from "@atomist/sdm";
import { pack } from "@atomist/sdm-core";
import { SetSpringBootVersionTransform } from "./setSpringBootVersionTransform";

export interface UpgradeSpringBootParameters {

    /**
     * Version to upgrade to
     */
    desiredBootVersion: string;
}

/**
 * Wrap Spring Boot set version editor in a dryRunEditor, causing an event
 * handler to respond to the build with either a PR and Issue
 * @type {HandleCommand<EditOneOrAllParameters>}
 */
export const TryToUpgradeSpringBootVersion: CodeTransformRegistration<UpgradeSpringBootParameters> = pack.buildAware.makeBuildAware({
    transform: SetSpringBootVersionTransform,
    parameters: {
        desiredBootVersion: {
            displayName: "Desired Spring Boot version",
            description: "The desired Spring Boot version across these repos",
            pattern: /^.+$/,
            validInput: "Semantic version",
            required: false,
            defaultValue: "2.0.5.RELEASE",
        },
    },
    name: "boot-upgrade",
    description: `Upgrade Spring Boot version`,
    intent: "try to upgrade Spring Boot",
    transformPresentation: ci => new PullRequest(
        `boot-upgrade-${ci.parameters.desiredBootVersion}-${guid()}`,
        `Upgrade Spring Boot version to ${ci.parameters.desiredBootVersion}`,
    ),
});

function guid() {
    return "" + new Date().getTime();
}
