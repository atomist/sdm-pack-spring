import { logger } from "@atomist/automation-client";
import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { ProjectFile } from "@atomist/sdm";
import { TreeNode } from "@atomist/tree-path/TreeNode";

import * as xmldoc from "xmldoc";
import { XmlElement } from "xmldoc";

/**
 * FileParser implementation that uses xmldoc library.
 * Preserves and exposes positions.
 */
export class XmldocFileParser implements FileParser {

    public rootName = "xml";

    public async toAst(f: ProjectFile): Promise<TreeNode> {
        try {
            const document: xmldoc.XmlDocument = new xmldoc.XmlDocument(await f.getContent());
            // console.log("DOC is " + JSON.stringify(document));
            return new XmldocTreeNode(document, undefined);
        } catch (err) {
            logger.warn("Could not parse XML document at '%s'", f.path, err);
            return undefined;
        }
    }

}

class XmldocTreeNode implements TreeNode {

    public get $children(): TreeNode[] {
        return this.xd.children
            .filter(kid => kid.type === "element")
            .map(k =>
                new XmldocTreeNode(k as XmlElement, this));
    }

    public get $name(): string {
        return this.xd.name;
    }

    public get $offset(): number {
        return this.xd.startTagPosition - 1;
    }

    public get $value(): string {
        return this.xd.toString({ preserveWhitespace: true, compressed: false, trimmed: false });
    }

    constructor(private readonly xd: xmldoc.XmlElement,
                public readonly $parent: TreeNode) {
    }

}
