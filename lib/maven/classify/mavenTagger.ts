import { Tagger } from "@atomist/automation-client";

/**
 * Emit tags based on contents of a Maven POM, if one is found
 * @param {Project} p
 */
export const mavenTagger: Tagger = async p => {
    const tags: string[] = [];
    const pom = await p.getFile("pom.xml");
    if (!!pom) {
        tags.push("maven");
        const content = await pom.getContent();
        if (content.includes("org.springframework")) {
            tags.push("spring");
        }
    }
    return { repoId: p.id, tags };
};
