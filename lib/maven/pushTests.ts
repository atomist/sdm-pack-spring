/**
 * Is this a Maven project
 * @constructor
 */
import {
    PredicatePushTest,
    predicatePushTest,
} from "@atomist/sdm";

export const IsMaven: PredicatePushTest = predicatePushTest(
    "Is Maven",
    async p => !!(await p.getFile("pom.xml")));
