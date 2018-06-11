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

import { JavaParenthesizedExpression } from "@atomist/microgrammar/matchers/lang/cfamily/java/JavaBody";
import { Microgrammar } from "@atomist/microgrammar/Microgrammar";
import { Opt } from "@atomist/microgrammar/Ops";

// moved from spring-automation

export const CLASS_NAME = /^[a-zA-Z_$][a-zA-Z0-9_$]+/;
export const PACKAGE_NAME = /^[a-zA-Z0-9$.]+/;

/**
 * Package part of a FQN. Includes the final dot before the class name
 * @type {RegExp}
 */
export const PACKAGE_OF_CLASS = /^[a-zA-Z0-9$.]+\./;

export const JavaPackageDeclaration = Microgrammar.fromDefinitions<{name: string}>({
    _pkg: "package",
    name: PACKAGE_NAME,
});

export const PUBLIC_CLASS = Microgrammar.fromDefinitions<{name: string}>({
    _public: "public",
    _class: "class",
    name: CLASS_NAME,
});

/**
 * Discard annotation with content
 * @type {Microgrammar<T>}
 */
export const DISCARDED_ANNOTATION = Microgrammar.fromDefinitions({
    _at: "@",
    _annotationName: CLASS_NAME,
    _content: new Opt(JavaParenthesizedExpression),
});
