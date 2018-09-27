import { Tagger } from "@atomist/automation-client";

const SpringBootStarter = "spring-boot-starter-parent";

export const mavenTagger: Tagger = async p => {
    const tags: string[] = [];
    const pom = await p.getFile("pom.xml");
    if (!!pom) {
        tags.push("maven");
        const content = await pom.getContent();
        if (content.includes(SpringBootStarter)) {
            tags.push("spring-boot");
            tags.push("spring");
        } else if (content.includes("org.springframework")) {
            tags.push("spring");
        }
    }
    return { repoId: p.id, tags };
};
