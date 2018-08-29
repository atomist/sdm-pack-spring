
import {
    PredicatePushTest,
    predicatePushTest,
} from "@atomist/sdm";

/**
 * Is this a Maven project
 * @constructor
 */
export const IsMaven: PredicatePushTest = predicatePushTest(
    "Is Maven",
    async p => !!(await p.getFile("pom.xml")));
