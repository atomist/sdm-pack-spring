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

import {
    ExecuteGoal,
    Fulfillment,
    GoalWithFulfillment,
    IndependentOfEnvironment,
} from "@atomist/sdm";

// tslint:disable-next-line:no-empty-interface
export interface RiffDeploymentOptions {

    // Empty
}

/**
 * Goal for Riff deployment
 */
export class RiffDeployment extends GoalWithFulfillment {

    /**
     * Specify Riff deployment
     */
    constructor(opts: Partial<RiffDeploymentOptions> = {}) {
        super({
            // TODO calculate it
            uniqueName: `RiffDeployment`,
            environment: IndependentOfEnvironment,
            displayName: "Riff deployment",
        });

        const fulfillment: Fulfillment = {
            name: `RiffDeployment`,
            goalExecutor: executeRiffDeploy(opts),
        };
        super.with(fulfillment);
    }

}

function executeRiffDeploy(opts: Partial<RiffDeploymentOptions>): ExecuteGoal {
    return async gi => {
        await gi.addressChannels("Do Riff deployment with fields on GoalInvocation");
    };
}
