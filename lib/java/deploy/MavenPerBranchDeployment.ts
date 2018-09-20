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

import { Fulfillment, GoalWithFulfillment, IndependentOfEnvironment, SoftwareDeliveryMachine } from "@atomist/sdm";
import { executeMavenPerBranchSpringBootDeploy, MavenDeployerOptions } from "./MavenPerBranchSpringBootDeploymentGoal";

/**
 * Maven per branch deployer goal. Intended only for local use
 * on a development machine.
 * One deployment will be managed for each branch pushed.
 */
export class MavenPerBranchDeployment extends GoalWithFulfillment {

    /**
     * Specify Maven per branch local deployment
     * @param {SoftwareDeliveryMachine} sdm
     * @param {Partial<MavenDeployerOptions>} opts
     */
    constructor(sdm: SoftwareDeliveryMachine, opts: Partial<MavenDeployerOptions> = {}) {
        super({
            uniqueName: `MavenPerBranchDeployment`,
            environment: IndependentOfEnvironment,
        });

        const fulfillment: Fulfillment = {
            name: `MavenPerBranchDeployment`,
            goalExecutor: executeMavenPerBranchSpringBootDeploy(sdm.configuration.sdm.projectLoader, opts),
        };
        super.with(fulfillment);
    }

}
