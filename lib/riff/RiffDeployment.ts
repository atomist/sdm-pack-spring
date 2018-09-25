import { ExecuteGoal, Fulfillment, GoalWithFulfillment, IndependentOfEnvironment } from "@atomist/sdm";

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
        return gi.addressChannels("Do Riff deployment with fields on GoalInvocation");
    };
}
