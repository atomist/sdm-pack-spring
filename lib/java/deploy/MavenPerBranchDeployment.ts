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
