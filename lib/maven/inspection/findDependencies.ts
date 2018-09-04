import { isLocalProject } from "@atomist/automation-client/project/local/LocalProject";
import { CodeInspection } from "@atomist/sdm";
import * as _ from "lodash";
import { dependenciesFromParsedPom } from "../fingerprint/dependenciesFingerprintsFromParsedPom";
import { extractEffectivePom } from "../fingerprint/effectivePomExtractor";
import { coordinates } from "../parse/grammar/VersionedArtifactMatch";
import { VersionedArtifact } from "../VersionedArtifact";

/**
 * Dependencies of a project
 */
export interface Dependencies {
    dependencies: VersionedArtifact[];
}

export const FindDependencies: CodeInspection<Dependencies> = async p => {
    if (!isLocalProject(p)) {
        throw new Error(`Fingerprinting only works on local projects: had ${p.id.url}`);
    }

    try {
        await p.findFile("pom.xml");
        const epom = await extractEffectivePom(p);
        return { dependencies: dependenciesFromParsedPom(epom) };
    } catch {
        // If we can't find a pom, just exit
        return { dependencies: [] };
    }
};

export const FindDependenciesOfGroup: CodeInspection<Dependencies, { group: string }> = async (p, i) => {
    if (!isLocalProject(p)) {
        throw new Error(`Fingerprinting only works on local projects: had ${p.id.url}`);
    }

    try {
        await p.findFile("pom.xml");
        const epom = await extractEffectivePom(p);
        return {
            dependencies:
                dependenciesFromParsedPom(epom).filter(d => d.group === i.parameters.group),
        };
    } catch {
        // If we can't find a pom, just exit
        return { dependencies: [] };
    }
};

/**
 * Return unique dependencies found across all of these projects
 * @param {Dependencies[]} deps
 * @return {Dependencies}
 */
export function uniqueDependencies(deps: Dependencies[]): Dependencies {
    return {
        dependencies: _.uniqBy(
            _.flatten(deps.map(d => d.dependencies)),
            d => coordinates(d)),
    };
}
