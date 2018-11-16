/**
 * Add the given dependency to projects. It's not an error
 * if the project doesn't have a POM. The transform will do nothing
 * in this case.
 * @param {VersionedArtifact} va
 * @return {SimpleProjectEditor}
 */
import { projectUtils } from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { SpringProjectCreationParameters } from "../../spring/generate/SpringProjectCreationParameters";

export function migrateGroupIdTransform(old: RegExp, replacement?: string): CodeTransform<SpringProjectCreationParameters> {
    return async (p, context, params) => {
        await projectUtils.doWithFiles(p, "**/pom.xml", async f => {
            const content = await f.getContent();
            const toReplace = new RegExp(`<groupId>${old.source}</groupId>`, "g");
            const replace = !!replacement ? `<groupId>${replacement}</groupId>` : `<groupId>${params.groupId}</groupId>`;
            await f.setContent(content.replace(toReplace, replace));
        });
        return p;
    };
}

function hasGroups(old: RegExp) {
    return /\(.*\)/.test(old.source);
}

export function migrateArtifactIdTransform(old: RegExp, replacement?: string): CodeTransform<SpringProjectCreationParameters> {
    return async (p, context, params) => {
        await projectUtils.doWithFiles(p, "**/pom.xml", async f => {
            const content = await f.getContent();
            const toReplace = new RegExp(`<artifactId>${old.source}</artifactId>`, "g");
            if (hasGroups(old)) {
                const replace = !!replacement
                    ? `<artifactId>${replacement}</artifactId>`
                    : `<artifactId>${params.target.repoRef.repo}-$1</artifactId>`;
                await f.setContent(content.replace(toReplace, replace));
            } else {
                const replace = !!replacement
                    ? `<artifactId>${replacement}</artifactId>`
                    : `<artifactId>${params.target.repoRef.repo}</artifactId>`;
                await f.setContent(content.replace(toReplace, replace));
            }
        });
    };
}
