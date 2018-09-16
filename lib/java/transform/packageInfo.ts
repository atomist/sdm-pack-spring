import { JavaFileParser } from "@atomist/antlr";
import { gatherFromMatches, Project } from "@atomist/automation-client";
import { BoundedElement } from "../../util/BoundedElement";
import { JavaPackage } from "../path-expressions/javaPathExpressions";

export interface PackageInfo extends BoundedElement {

    fqn: string;
}

/**
 * Return the imports already in this project
 * @param {Project} p
 * @param {string} path
 * @return {Promise<Import[]>}
 */
export async function packageInfo(p: Project, path: string): Promise<PackageInfo> {
    const packages = await gatherFromMatches(p, JavaFileParser, path, JavaPackage, m => {
        return {
            fqn: m.$children.find(c => c.$name === "qualifiedName").$value,
            offset: m.$offset,
            insertAfter: m.$offset + m.$value.length,
        };
    });
    return packages.length === 1 ? packages[0] : undefined;
}
