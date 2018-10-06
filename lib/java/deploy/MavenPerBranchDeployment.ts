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
    DefaultGoalNameGenerator,
    FulfillableGoalDetails,
    FulfillableGoalWithRegistrations,
    getGoalDefinitionFrom,
    GoalInvocation,
    Implementation,
    ImplementationRegistration,
    logger,
} from "@atomist/sdm";
import * as _ from "lodash";
import {
    executeMavenPerBranchSpringBootDeploy,
    MavenPerBranchSpringBootDeploymentGoal,
} from "./MavenPerBranchSpringBootDeploymentGoal";

export interface MavenPerBranchDeploymentRegistration extends Partial<ImplementationRegistration> {
    /**
     * Lower port of the range that will be scanned for a free port
     */
    lowerPort: number;

    /**
     * Base URL on which the deployment will be done
     */
    baseUrl: string;

    /**
     * Pattern to find in output to indicate that the server has come up successfully.
     * For example, matching something like "Started SpringRestSeedApplication in 3.931 seconds"
     */
    successPatterns: RegExp[];

    /**
     * Command line arguments for the startup process
     */
    commandLineArgumentsFor: (port: number, contextRoot: string) => string[];

    /**
     * The maximum number of concurrent deployments we allow. This is a valuable
     * safeguard as too many can crash the machine.
     */
    maxConcurrentDeployments: number;
}
/**
 * Maven per branch deployer goal. Intended only for local use
 * on a development machine. Use only one per SDM.
 * One deployment will be managed for each branch pushed.
 */
export class MavenPerBranchDeployment extends FulfillableGoalWithRegistrations<MavenPerBranchDeploymentRegistration> {
    constructor(goalDetailsOrUniqueName: FulfillableGoalDetails | string
                    = DefaultGoalNameGenerator.generateName("maven-per-branch-deploy")) {

        super({
            ...MavenPerBranchSpringBootDeploymentGoal.definition,
            ...getGoalDefinitionFrom(goalDetailsOrUniqueName, DefaultGoalNameGenerator.generateName("maven-per-branch-deploy")),
            displayName: "maven per branch deployment",
        });

        const fulfillment: Implementation = {
            name: `MavenPerBranchDeployment`,
            goalExecutor: async (invocation: GoalInvocation) => {
                if (this.registrations.length === 0) {
                    logger.info("No deployment registrations found, using defaults");
                    return executeMavenPerBranchSpringBootDeploy({})(invocation);
                } else {
                    if (this.registrations.length > 1) {
                        logger.warn("Multiple deployment registrations are not yet support, only the first will be taken into account");
                    }
                    return executeMavenPerBranchSpringBootDeploy(_.head(this.registrations))(invocation);
                }
            },
        };
        this.addFulfillment(fulfillment);
    }

}
