import { CodeInspection, CodeInspectionRegistration, ParametersObject } from "@atomist/sdm";
import { MavenArtifactIdRegExp, MavenGroupIdRegExp } from "../../java/javaPatterns";
import { VersionedArtifact } from "../VersionedArtifact";
import { FindDependencies } from "./findDependencies";

export interface FindDependencyParameters {
    group: string;
    artifact: string;
}

export const FindDependencyParametersDefinitions: ParametersObject = {
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
