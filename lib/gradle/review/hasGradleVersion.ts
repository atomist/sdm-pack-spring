import {Project, ReviewComment, Severity} from "@atomist/automation-client";
import {ReviewerRegistration} from "@atomist/sdm";
import {IsGradle} from "../pushtest/gradlePushTests";

/**
 * Checks whether a project has a gradle.properties and if so, if a version
 * is defined in that properties file.
 */
export const HasVersionDefinedInGradleProperties: ReviewerRegistration = {
    name: "gradle-version-check",
    pushTest: IsGradle,
    inspection: async project => {
        return {
            repoId: project.id,
            comments: await findVersionDefinitionInGradleProperties(project),
        };
    },
};

async function findVersionDefinitionInGradleProperties(p: Project): Promise<ReviewComment[]> {
    const comments: ReviewComment[] = [];
    if (p.hasFile("gradle.properties")) {
        const gradlePropertiesContent = await (await p.getFile("gradle.properties")).getContent();
        if (!gradlePropertiesContent.match(/[version=].*/)) {
            comments.push({
                severity: "error" as Severity,
                category: "gradle",
                detail: `No version found in gradle.properties`,
            });
        }
    } else {
        comments.push({
            severity: "error" as Severity,
            category: "gradle",
            detail: `No gradle.properties found`,
        });
    }
    return comments;
}
