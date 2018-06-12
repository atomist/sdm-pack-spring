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


import { Microgrammar } from "@atomist/microgrammar/Microgrammar";
import { optional } from "@atomist/microgrammar/Ops";

// JESS: MOVED from spring-automation to sdm-pack-spring

/**
 * Pattern for a legal XML element name
 * @type {RegExp}
 */
export const ELEMENT_NAME = /^[a-zA-Z_.0-9\-]+/;

export const ELEMENT_CONTENT = /^[a-zA-Z_.0-9\-]+/;

export const XML_TAG_WITH_SIMPLE_VALUE = {
    _l: "<",
    name: ELEMENT_NAME,
    _r: ">",
    value: ELEMENT_CONTENT,
    _l2: "</",
    _close: ELEMENT_NAME,
    _ok: ctx => ctx._close === ctx.name,
    _r2: ">",
};

export interface XmlTag {
    name: string;
    value: string;
}

export const OPEN_OR_CLOSE_TAG = Microgrammar.fromDefinitions<{ name: string, slash}>({
    _l: "<",
    slash: optional("/"),
    name: ELEMENT_NAME,
    _r: ">",
});
