import { Project } from "@atomist/automation-client/project/Project";

export function determineMavenCommand(p: Project): string {
    if (p.fileExistsSync("mvnw") || p.fileExistsSync("mvnw.cmd")) {
       return "mvnw";
    } else {
        return "mvn";
    }
}
