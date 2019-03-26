import {
    LocalProject,
    Project,
} from "@atomist/automation-client";
import { ProjectIdentification } from "@atomist/sdm-core/lib/internal/delivery/build/local/projectIdentifier";
import { VersionedArtifact } from "../../maven/VersionedArtifact";
import { StringCapturingProgressLog } from "@atomist/sdm";
import { gradleCommand } from "../build/GradleSingleModuleBuilder";
import {
    gradlePropertiesGroupGrammar,
    gradlePropertiesNameGrammar,
    gradlePropertiesVersionGrammar,
} from "../build/helpers";

/**
 * Return the identification of a project: name and version
 * @param {Project} p
 * @return {Promise<any>}
 * @constructor
 */
export const GradleProjectIdentifier: (p: Project) => Promise<VersionedArtifact & ProjectIdentification> = async p => {
    const propertiesOutput = new StringCapturingProgressLog();
    await gradleCommand(p as LocalProject, { progressLog: propertiesOutput, tasks: ["properties"]});
    const appName = gradlePropertiesNameGrammar.firstMatch(propertiesOutput.log).$matched;
    const version = gradlePropertiesVersionGrammar.firstMatch(propertiesOutput.log).$matched;
    const group = gradlePropertiesGroupGrammar.firstMatch(propertiesOutput.log).$matched;
    return {
        name: appName,
        artifact: appName,
        version,
        group,
    };
}