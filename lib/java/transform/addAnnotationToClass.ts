import { JavaFileParser } from "@atomist/antlr";
import { doWithAllMatches } from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { classNameFromFqn } from "../javaProjectUtils";
import { addImport } from "./addImport";

export function classDeclarationWithName(name: string) {
    return `//typeDeclaration[//classDeclaration[//Identifier[@value='${name}']]]`;
}

/**
 * Add the given annotation to the given class.
 * Does not add an import or attempt to unpack annotation
 * Do nothing if not found
 * @return {CodeTransform}
 */
export function addAnnotationToClassRaw(opts: {
    sourceFilePath: string,
    className: string,
    annotationName: string,
}): CodeTransform {
    return async p => {
        return doWithAllMatches(p,
            JavaFileParser,
            opts.sourceFilePath,
            classDeclarationWithName(opts.className), m => {
                m.$value = `@${opts.annotationName}\n${m.$value}`;
            });
    };
}

/**
 * Add the given annotation to the given class.
 * Does not add an import or attempt to unpack annotation
 * Do nothing if not found
 * @return {CodeTransform}
 */
export function addAnnotationToClass(opts: {
    sourceFilePath: string,
    className: string,
    annotationFqn: string,
}): CodeTransform {
    return async (p, ci) => {
        await addImport({ sourceFilePath: opts.sourceFilePath, fqn: opts.annotationFqn })(p, ci);
        await addAnnotationToClassRaw({
            sourceFilePath: opts.sourceFilePath,
            className: opts.className,
            annotationName: classNameFromFqn(opts.annotationFqn),
        })(p, ci);
    };
}
