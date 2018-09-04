import { CodeInspectionRegistration } from "@atomist/sdm";
import { Dependencies, FindDependencies } from "./findDependencies";

export const FindDependenciesCommand: CodeInspectionRegistration<Dependencies> = {

    name: "mavenDependencies",
    intent: "fingerprint dependencies",
    inspection: FindDependencies,

};
