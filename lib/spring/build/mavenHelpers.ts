import {
    findFileMatches,
} from "@atomist/automation-client";
import {
    LocalProject,
} from "@atomist/sdm";
import * as path from "path";
import { VersionedArtifact } from "../../maven/VersionedArtifact";
import { XmldocFileParser } from "../../xml/XmldocFileParser";

export async function springBootDeploymentUnitFileLocator(p: LocalProject, mpi: VersionedArtifact): Promise<string> {
    const parser = new XmldocFileParser();
    const matches = await findFileMatches(p, parser, "**/pom.xml", `/project/build/plugins/plugin[artifactId='spring-boot-maven-plugin']`);
    if (matches.length === 1) {
        const matchedFile = matches[0].file;
        const directory = path.dirname(matchedFile.path);
        return path.join(directory, "target", `${mpi.artifact}-${mpi.version}.jar`);

    } else {
        return undefined;
    }
}
