import { JavaFileParser } from "@atomist/antlr";
import { gatherFromMatches, Project } from "@atomist/automation-client";
import { BoundedElement, toBoundedElement } from "../../util/BoundedElement";
import { annotationsOnJavaClass } from "./javaPathExpressions";

export type Annotation = BoundedElement;

export async function existingAnnotations(p: Project, opts: {
    sourceFilePath: string,
    className: string,
}): Promise<Annotation[]> {
    return gatherFromMatches(p, JavaFileParser, opts.sourceFilePath,
        annotationsOnJavaClass(opts.className),
        toBoundedElement);
}
