import { InMemoryProject, logger } from "@atomist/automation-client";
import { CodeTransform, InMemoryProjectFile } from "@atomist/sdm";
import axios from "axios";
import * as _ from "lodash";
import { packageToPath } from "../javaProjectUtils";
import { packageInfo } from "../query/packageInfo";

/**
 * Add the downloaded content to the given project,
 * putting it in the appropriate package. Assumes the file is
 * self-contained. URL must end with path of the Java file.
 * Does not change the package in the file:
 * refactor in a separate transform if you want to do this.
 * @param {string} url url of the content. Must be publicly accessible
 * @param sourceRoot source root to place the file under
 */
export function bringInFile(url: string,
                            sourceRoot: string = "src/main/java"): CodeTransform {
    return async p => {
        const response = await axios.get(url);
        const content: string = response.data;
        // Parse it to find the package
        const tempPath = "Some.java";
        const p1 = InMemoryProject.of(new InMemoryProjectFile(tempPath, content));
        const pack = await packageInfo(p1, tempPath);
        if (!pack) {
            throw new Error("in default package??");
        }
        const className = _.last(url.split("/"));
        const path = sourceRoot + "/" + packageToPath(pack.fqn) + "/" + className;
        logger.info("Package is %s: Writing file from %s to %s, class name is %s", pack.fqn, url, path, className);
        await p.addFile(path, content);
    };
}
