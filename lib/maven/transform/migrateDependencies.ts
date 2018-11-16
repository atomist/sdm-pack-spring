/**
 * Add the given dependency to projects. It's not an error
 * if the project doesn't have a POM. The transform will do nothing
 * in this case.
 * @param {VersionedArtifact} va
 * @return {SimpleProjectEditor}
 */
import { projectUtils } from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";

export function migrateGroupIdTransform(old: RegExp, replacement: string): CodeTransform {
    return async p => {
        await projectUtils.doWithFiles(p, "**/pom.xml", async f => {
            const content = await f.getContent();
            const toReplace = new RegExp(`<groupId>${old.source}</groupId>`, "g");
            const replace = `<groupId>${replacement}</groupId>`;
            await f.setContent(content.replace(toReplace, replace));
        });
        return p;
    };
}

export function migrateArtifactIdTransform(old: RegExp, replacement: string): CodeTransform {
    return async p => {
        await projectUtils.doWithFiles(p, "**/pom.xml", async f => {
            const content = await f.getContent();
            const toReplace = new RegExp(`<artifactId>${old.source}</artifactId>`, "g");
            const replace = `<artifactId>${replacement}</artifactId>`;
            await f.setContent(content.replace(toReplace, replace));
        });
        return p;
    };
}
