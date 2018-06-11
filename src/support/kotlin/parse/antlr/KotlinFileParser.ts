import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { KotlinLexer } from "./antlr-gen/KotlinLexer";
import { KotlinParser } from "./antlr-gen/KotlinParser";
import { AntlrFileParser } from "@atomist/antlr/tree/ast/antlr/AntlrFileParser";

// JESS: MOVED from antlr-ts to sdm-pack-spring, along with this whole directory

/**
 * Glob pattern for Kotlin source
 * @type {string}
 */
export const KotlinFiles = "**/*.kt";

export const KotlinFileParser: FileParser =
    new AntlrFileParser("kotlinFile", KotlinLexer, KotlinParser);

export const KotlinScriptParser: FileParser =
    new AntlrFileParser("script", KotlinLexer, KotlinParser);
