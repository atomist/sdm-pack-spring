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

import { InMemoryProject } from "@atomist/automation-client";
import { InMemoryProjectFile } from "@atomist/sdm";
import * as assert from "assert";
import {
    addProperty,
    parseProperties,
} from "../../lib/properties/propertiesParser";

describe("propertyHandling", () => {

    describe("parseProperties", () => {

        it("returns no properties when no file", async () => {
            const p = InMemoryProject.of();
            const props = await parseProperties(p, "not.there.properties");
            assert.strictEqual(props.properties.length, 0);
        });

        it("adds file when no properties", async () => {
            const path = "thing.properties";
            const p = InMemoryProject.of();
            const props = await parseProperties(p, path);
            assert.strictEqual(props.properties.length, 0);
            await props.addProperty({ key: "foo", value: "bar" });
            assert.strictEqual(p.findFileSync(path).getContentSync(),
                "\nfoo=bar\n");
        });

        it("finds single property", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", "foo=bar"));
            const props = await parseProperties(p, "thing.properties");
            assert.strictEqual(props.properties.length, 1);
            assert.strictEqual(props.properties[0].key, "foo");
            assert.strictEqual(props.properties[0].value, "bar");
        });

        it("finds single property, ignoring blank lines and comment", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", OneWithComments));
            const props = await parseProperties(p, "thing.properties");
            assert.strictEqual(props.properties.length, 1);
            assert.strictEqual(props.properties[0].key, "foo");
            assert.strictEqual(props.properties[0].value, "bar");
        });

        it("finds two properties, ignoring blank lines and comment", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", TwoWithComments));
            const props = await parseProperties(p, "thing.properties");
            assert.strictEqual(props.properties.length, 2);
            assert.strictEqual(props.properties[0].key, "foo");
            assert.strictEqual(props.properties[0].value, "bar");
            assert.strictEqual(props.properties[1].key, "a.b.c");
            assert.strictEqual(props.properties[1].value, "20394029384029834$$$$abc");
        });

        it("changes property, ignoring blank lines and comment", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", TwoWithComments));
            const props = await parseProperties(p, "thing.properties");
            props.properties[1].value = "thing";
            await props.flush();
            assert.strictEqual(p.findFileSync("thing.properties").getContentSync(),
                TwoWithComments.replace("20394029384029834$$$$abc", "thing"));
        });

        it("adds property to existing properties", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", TwoWithComments));
            const props = await parseProperties(p, "thing.properties");
            await props.addProperty({ key: "x", value: "y" });
            assert.strictEqual(p.findFileSync("thing.properties").getContentSync(),
                TwoWithComments + `\n\nx=y\n`);
        });

        it("does not add property to existing properties when it's already there", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", TwoWithComments));
            const props = await parseProperties(p, "thing.properties");
            await props.addProperty({ key: "foo", value: "bar" });
            assert.strictEqual(p.findFileSync("thing.properties").getContentSync(),
                TwoWithComments);
        });

        it("changes property in existing properties when it's already there", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", TwoWithComments));
            const props = await parseProperties(p, "thing.properties");
            await props.addProperty({ key: "foo", value: "baz" });
            assert.strictEqual(p.findFileSync("thing.properties").getContentSync(),
                TwoWithComments.replace("bar", "baz"));
        });

    });

    describe("addProperty CodeTransform", () => {

        it("changes property, ignoring blank lines and comment", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", TwoWithComments));
            await addProperty({ key: "a.b.c", value: "thing" }, "thing.properties")(p, undefined);
            assert.strictEqual(p.findFileSync("thing.properties").getContentSync(),
                TwoWithComments.replace("20394029384029834$$$$abc", "thing"));
        });

        it("adds file when no properties", async () => {
            const path = "thing.properties";
            const p = InMemoryProject.of();
            await addProperty({ key: "foo", value: "bar" }, path)(p, undefined);
            assert.strictEqual(p.findFileSync(path).getContentSync(),
                "\nfoo=bar\n");
        });

        it("adds property to existing properties", async () => {
            const p = InMemoryProject.of(new InMemoryProjectFile("thing.properties", TwoWithComments));
            await addProperty({ key: "x", value: "y" }, "thing.properties")(p, undefined);
            assert.strictEqual(p.findFileSync("thing.properties").getContentSync(),
                TwoWithComments + `\n\nx=y\n`);
        });
    });

});

const OneWithComments = `
# These are my properties

foo=bar`;

const TwoWithComments = `
# These are my properties

foo=bar

# And another
# comment

a.b.c=20394029384029834$$$$abc

`;
