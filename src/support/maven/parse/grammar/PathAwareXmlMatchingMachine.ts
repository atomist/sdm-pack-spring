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

import { MatchingLogic } from "@atomist/microgrammar/Matchers";
import { MatchingMachine } from "@atomist/microgrammar/Microgrammar";
import { PatternMatch } from "@atomist/microgrammar/PatternMatch";
import { OPEN_OR_CLOSE_TAG } from "./xmlGrammars";

// moved from spring-automation

/**
 * Convenient matching engine superclass for matching an XML document, keeping
 * track of the current path.
 * Single use, as it maintains state while processing the document.
 * We can choose to match anything we want, and are able to check the
 * path while processing matches.
 */
export abstract class PathAwareXmlMatchingMachine extends MatchingMachine {

    /**
     * Track element paths above the current path
     * @type {Array}
     */
    private readonly elementStack: string[] = [];

    /**
     * Pass in whatever we want to match within the document. We can query path state.
     * @param matcher we want to match
     */
    protected constructor(matcher: any) {
        super(matcher, OPEN_OR_CLOSE_TAG);
    }

    protected underOneOf(...elts: string[]) {
        return elts.filter(elt => this.elementStack.indexOf(elt) > -1).length > 0;
    }

    /**
     * Current path within the document, as in /dependencies/dependency
     * @returns {string}
     */
    protected path() {
        return this.elementStack.join("/");
    }

    /**
     * Current path elements within the document, as in [ dependencies, dependency ]
     * @returns {string[]}
     */
    protected pathElements() {
        return this.elementStack;
    }

    protected abstract onMatch(pm: PatternMatch);

    protected observeMatch(pm: { name: string, slash } & PatternMatch): MatchingLogic {
        if (pm.slash) {
            this.elementStack.pop();
            this.onCloseTag(pm);
        } else {
            this.elementStack.push(pm.name);
            this.onOpenTag(pm);
        }
        return this.matcher;
    }

    /**
     * Subclasses can override to add custom processing on the opening of this element
     * @param tag
     */
    protected onOpenTag(tag: { name: string } & PatternMatch): void {
        // empty default
    }

    /**
     * Subclasses can override to add custom processing on the closing of this element
     * @param tag
     */
    protected onCloseTag(tag: { name: string } & PatternMatch): void {
        // empty default
    }

}
