import {
    PredicatePushTest,
    predicatePushTest,
} from "@atomist/sdm";

/**
 * Is this a Gradle project
 * @constructor
 */
export const IsGradle: PredicatePushTest = predicatePushTest(
    "Is Gradle",
    async p => !!(await p.getFile("build.gradle")) || !!(await p.getFile("build.gradle.kt")));
