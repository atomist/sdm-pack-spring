/*
 * Copyright © 2018 Atomist, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { logger } from "@atomist/automation-client";
import { FileParser } from "@atomist/automation-client/tree/ast/FileParser";
import { ProjectFile } from "@atomist/sdm";
import { TreeNode } from "@atomist/tree-path";

import { XmlDocument, XmlElement } from "xmldoc";

/**
 * FileParser implementation that uses xmldoc library.
 * Preserves and exposes positions.
 */
export class XmldocFileParser implements FileParser<XmldocTreeNode> {

    public rootName = "xml";

    public async toAst(f: ProjectFile): Promise<XmldocTreeNode> {
        try {
            const document = new XmlDocument(await f.getContent());
            // console.log("DOC is " + JSON.stringify(document));
            return new XmldocTreeNodeImpl(document, undefined);
        } catch (err) {
            logger.warn("Could not parse XML document at '%s'", f.path, err);
            return undefined;
        }
    }

}

/**
 * Allows further operations specific to XML elements
 */
export interface XmldocTreeNode extends TreeNode {

    /**
     * Value inside the element: Not the same as it's value
     */
    innerValue: string;

    /**
     * Specialize return type
     * @return {XmldocTreeNode[]}
     */
    $children: XmldocTreeNode[];

}

export function isXmldocTreeNode(tn: TreeNode): tn is XmldocTreeNode {
    const maybe = tn as XmldocTreeNode;
    return !!maybe.innerValue;
}

class XmldocTreeNodeImpl implements XmldocTreeNode {

    public get $children(): XmldocTreeNode[] {
        return this.xd.children
            .filter(kid => kid.type === "element")
            .map(k =>
                new XmldocTreeNodeImpl(k as XmlElement, this));
    }

    public get $name(): string {
        return this.xd.name;
    }

    public get $offset(): number {
        return this.xd.startTagPosition - 1;
    }

    /**
     * This is the full element value
     * @return {string}
     */
    public get $value(): string {
        return this.xd.toString({ preserveWhitespace: true, compressed: false, trimmed: false });
    }

    public get innerValue(): string {
        return this.xd.val;
    }

    constructor(private readonly xd: XmlElement,
                public readonly $parent: TreeNode) {
        // Add attributes to this
        for (const propName of Object.getOwnPropertyNames(this.xd.attr)) {
            (this as any)[propName] = this.xd.attr[propName];
            logger.debug("Copying property '%s' of '%s': Now have %j", propName, this.xd.attr[propName], this);
        }
    }

}
