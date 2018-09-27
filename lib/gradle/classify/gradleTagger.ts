import { Tagger } from "@atomist/automation-client";

/**
 * Emit tags based on contents of a Gradle build file, if one is found
 * @param {Project} p
 */
export const gradleTagger: Tagger = async p => {
    const tags: string[] = [];
    const gradleFile = await p.getFile("build.gradle") || await p.getFile("build.gradle.kts");
    if (!!gradleFile) {
        tags.push("gradle");
        const content = await gradleFile.getContent();
        if (content.includes("org.springframework")) {
            tags.push("spring");
        }
    }
    return { repoId: p.id, tags };
};
