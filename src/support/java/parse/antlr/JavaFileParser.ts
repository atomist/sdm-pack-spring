import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { JavaLexer } from "./antlr-gen/JavaLexer";
import { JavaParser } from "./antlr-gen/JavaParser";
import { AntlrFileParser } from "@atomist/antlr/tree/ast/antlr/AntlrFileParser";

// JESS: MOVED from antlr-ts to sdm-pack-spring

/**
 * ANTLR-based parser for Java files. Also serves as an example of
 * how to integrate with ANTLR.
 * @type {{rootName: string; toAst: ((f: File) => Promise<TreeNode>)}}
 */
export const JavaFileParser: FileParser =
    new AntlrFileParser("compilationUnit", JavaLexer, JavaParser);
