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

import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import { doWithAllMatches, findMatches } from "@atomist/automation-client/tree/ast/astUtils";
import { InMemoryProjectFile, ProjectFile } from "@atomist/sdm";
import { TreeNode, TreeVisitor, visit } from "@atomist/tree-path";
import * as assert from "assert";
import { isXmlDocTreeNode, XmldocFileParser, XmlDocTreeNode } from "../../lib/xml/XmldocFileParser";
import { springBootPom } from "../spring/generator/TestPoms";

function positionVerifier(rawdoc: string): TreeVisitor {
    return (n: TreeNode) => {
        if (!!n.$parent) {
            assert.strictEqual(n.$value, rawdoc.substr(n.$offset, n.$value.length),
                "Invalid node offset");
        }
        return true;
    };
}

describe("xmldocFileParser", () => {

    describe("direct use", () => {

        it("should parse empty to undefined", async () => {
            const f = new InMemoryProjectFile("a.xml", "");
            const parsed = await new XmldocFileParser().toAst(f);
            assert.strictEqual(parsed, undefined);
        });

        it("should parse root only", async () => {
            const f = new InMemoryProjectFile("a.xml", RootOnly);
            const parsed = await new XmldocFileParser().toAst(f);
            assert(!!parsed);
            visit(parsed, positionVerifier(RootAndSingleChildElement));
            assert.strictEqual(parsed.$name, "Root");
            assert.strictEqual(parsed.$children.length, 0);
        });

        it("should parse root and single element only", async () => {
            const f = new InMemoryProjectFile("a.xml", RootAndSingleChildElement);
            const parsed = await new XmldocFileParser().toAst(f);
            visit(parsed, positionVerifier(RootAndSingleChildElement));
            assert(!!parsed);
            assert.strictEqual(parsed.$name, "Root");
            assert.strictEqual(parsed.$children.length, 1);
            assert.strictEqual(parsed.$children[0].$name, "kid");
            assert.strictEqual(parsed.$children[0].$children.length, 0);
        });

        it("should parse root and single element only, retaining offsets", async () => {
            const f = new InMemoryProjectFile("a.xml", RootAndSingleChildElement);
            const parsed = await new XmldocFileParser().toAst(f);
            visit(parsed, positionVerifier(RootAndSingleChildElement));
            assert(!!parsed);
            assert.strictEqual(parsed.$name, "Root");
            assert.strictEqual(parsed.$offset, RootAndSingleChildElement.indexOf("<Root"));
            assert.strictEqual(parsed.$children.length, 1);
            assert.strictEqual(parsed.$children[0].$name, "kid");
            assert.strictEqual(parsed.$children[0].$children.length, 0);
        });

        it("should parse POM", async () => {
            const f = new InMemoryProjectFile("pom.xml", springBootPom());
            const parsed = await new XmldocFileParser().toAst(f);
            // visit(parsed, positionVerifier(RootAndSingleChildElement));
            assert(!!parsed);
        });

    });

    describe("with path expressions", () => {

        it("should parse POM", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("pom.xml", springBootPom()));
            const matches = await findMatches(p, new XmldocFileParser(),
                "pom.xml",
                "//parent/groupId");
            assert.strictEqual(matches.length, 1);
            assert.strictEqual(matches[0].$name, "groupId");
            assert.strictEqual(matches[0].$value, "<groupId>org.springframework.boot</groupId>");
        });

        it("should locate groupId", async () => {
            let f: ProjectFile = new InMemoryProjectFile("pom.xml", springBootPom());
            const p = InMemoryProject.of(f);
            const matches = await findMatches(p, new XmldocFileParser(),
                "pom.xml",
                "//parent/groupId");
            f = await p.getFile("pom.xml");
            assert.strictEqual(matches.length, 1);
            assert(f.getContentSync().substr(matches[0].$offset).startsWith("<groupId>org.springframework.boot"),
                f.getContentSync().substr(matches[0].$offset));
        });

        it("should locate node with attribute", async () => {
            const f: ProjectFile = new InMemoryProjectFile("pom.xml", RootAndSingleChildElementWithAttribute);
            const p = InMemoryProject.of(f);
            const matches = await findMatches(p, new XmldocFileParser(),
                "*.xml",
                "//kid");
            assert.strictEqual(matches.length, 1);
            assert.strictEqual(matches[0].$value, "<kid myAtt=\"whatever\">name</kid>");
        });

        it("should locate node with attribute narrowing by attribute", async () => {
            const f: ProjectFile = new InMemoryProjectFile("pom.xml", RootAndSingleChildElementWithAttribute);
            const p = InMemoryProject.of(f);
            const matches = await findMatches(p, new XmldocFileParser(),
                "*.xml",
                "//kid[@myAtt='whatever']");
            assert.strictEqual(matches.length, 1);
            assert.strictEqual(matches[0].$value, "<kid myAtt=\"whatever\">name</kid>");
        });

        it("should update groupId", async () => {
            let f: ProjectFile = new InMemoryProjectFile("pom.xml", springBootPom());
            const p = InMemoryProject.of(f);
            await doWithAllMatches(p, new XmldocFileParser(),
                "pom.xml",
                "//parent/groupId",
                m => {
                    assert.strictEqual(m.$value, "<groupId>org.springframework.boot</groupId>");
                    m.$value = m.$value.replace("org.springframework.boot", "atomist");
                });
            f = await p.getFile("pom.xml");
            assert(f.getContentSync().includes("<groupId>atomist"), f.getContentSync());
        });

    });

    // See https://www.w3schools.com/xml/xpath_examples.asp.
    // This shows how the same things can be achieved, if occasionally in
    // slightly different ways
    describe("xpath samples", () => {

        it("should select all titles", async () => {
            const f: ProjectFile = new InMemoryProjectFile("books.xml", BookSample);
            const p = InMemoryProject.of(f);
            const matches = await findMatches(p, new XmldocFileParser(),
                "*.xml",
                "/bookstore/book/title");
            assert.strictEqual(matches.length, 4);
            assert.deepStrictEqual(matches.map(m => (m as any as XmlDocTreeNode).innerValue), [
                "Everyday Italian",
                "Harry Potter",
                "XQuery Kick Start",
                "Learning XML"]);
        });

        it("select first title", async () => {
            const f: ProjectFile = new InMemoryProjectFile("books.xml", BookSample);
            const p = InMemoryProject.of(f);
            const matches = await findMatches(p, new XmldocFileParser(),
                "*.xml",
                "/bookstore/book[1]/title");
            assert.strictEqual(matches.length, 1);
            assert.deepStrictEqual(matches.map(m => (m as any as XmlDocTreeNode).innerValue), [
                "Everyday Italian"]);
        });

        // Original path expression was was /bookstore/book/price[text()]
        it("select all prices", async () => {
            const f: ProjectFile = new InMemoryProjectFile("books.xml", BookSample);
            const p = InMemoryProject.of(f);
            const matches = await findMatches(p, new XmldocFileParser(),
                "*.xml",
                "/bookstore/book/price");
            assert.strictEqual(matches.length, 4);
            assert.deepStrictEqual(matches.map(m => (m as any as XmlDocTreeNode).innerValue), [
                "30.00",
                "29.99",
                "49.99",
                "39.95"]);
        });

        // Original was bookstore/book/[price>25]/price
        it("select all prices above 35", async () => {
            const f: ProjectFile = new InMemoryProjectFile("books.xml", BookSample);
            const p = InMemoryProject.of(f);
            const matches = await findMatches(p, new XmldocFileParser(),
                "*.xml",
                "/bookstore/book/price[?above35]",
                {
                    above35: n => isXmlDocTreeNode(n) && parseInt(n.innerValue, 10) > 35,
                });
            assert.deepStrictEqual(matches.map(m => (m as any as XmlDocTreeNode).innerValue), [
                "49.99",
                "39.95"]);
        });

    });

});

/* tslint:disable */

const RootOnly = `<?xml version="1.0" encoding="utf-8"?>  
<Root xmlns="http://www.adventure-works.com">
</Root>`;

const RootAndSingleChildElement = `<?xml version="1.0" encoding="utf-8"?>  
<Root xmlns="http://www.adventure-works.com">
    <kid>name</kid>
</Root>`;

const RootAndSingleChildElementWithAttribute = `<?xml version="1.0" encoding="utf-8"?>  
<Root xmlns="http://www.adventure-works.com">
    <kid myAtt="whatever">name</kid>
</Root>`;

const BookSample = `<?xml version="1.0" encoding="UTF-8"?>

<bookstore>

<book category="cooking">
  <title lang="en">Everyday Italian</title>
  <author>Giada De Laurentiis</author>
  <year>2005</year>
  <price>30.00</price>
</book>

<book category="children">
  <title lang="en">Harry Potter</title>
  <author>J K. Rowling</author>
  <year>2005</year>
  <price>29.99</price>
</book>

<book category="web">
  <title lang="en">XQuery Kick Start</title>
  <author>James McGovern</author>
  <author>Per Bothner</author>
  <author>Kurt Cagle</author>
  <author>James Linn</author>
  <author>Vaidyanathan Nagarajan</author>
  <year>2003</year>
  <price>49.99</price>
</book>

<book category="web">
  <title lang="en">Learning XML</title>
  <author>Erik T. Ray</author>
  <year>2003</year>
  <price>39.95</price>
</book>

</bookstore>`;