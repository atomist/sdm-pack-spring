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

import {
    predicatePushTest,
    PredicatePushTest,
} from "@atomist/sdm";
import { hasDeclaredDependency } from "../../maven/pushtest/pushTests";
import { SpringBootProjectStructure } from "../generate/SpringBootProjectStructure";
import { SpringBootVersionInspection } from "../inspect/springBootVersionInspection";

/**
 * Does this project have a Spring Boot application class?
 * This is a robust but expensive test as it needs
 * to scan all Java sources
 */
export const HasSpringBootApplicationClass: PredicatePushTest = predicatePushTest(
    "Has Spring Boot @Application class",
    async p => !!(await SpringBootProjectStructure.inferFromJavaOrKotlinSource(p)));

/**
 * Does this project's POM use Spring boot?
 * @type {PredicatePushTest}
 */
export const HasSpringBootPom: PredicatePushTest = predicatePushTest(
    "Has Spring Boot POM",
    async p => {
        const pom = await p.getFile("pom.xml");
        if (!pom) {
            return false;
        }
        return (await pom.getContent()).includes("spring-boot");
    },
);

/**
 * Does this project's POM use Spring Framework (including
 * Spring Boot).
 * @type {PredicatePushTest}
 */
export const HasSpringPom: PredicatePushTest = predicatePushTest(
    "Has Spring POM",
    async p => {
        const pom = await p.getFile("pom.xml");
        if (!pom) {
            return false;
        }
        return (await pom.getContent()).includes("springframework");
    },
);

/**
 * Does this project directly declare the given Spring Boot starter
 * @param {string} artifact
 * @param {string} group
 * @return {PredicatePushTest}
 */
export function hasStarter(artifact: string,
                           group: string = "org.springframework.boot"): PredicatePushTest {
    return predicatePushTest(
        `has-starter=${group}-${group}`,
        hasDeclaredDependency({ artifact, group }).predicate,
    );
}

/**
 * Does this project's POM use Spring Framework 5
 * @type {PredicatePushTest}
 */
export const IsSpringBoot2Project: PredicatePushTest = predicatePushTest(
    "IsSpringBoot2Project",
    async p => {
        const versions = await SpringBootVersionInspection(p, null);
        return versions.versions.filter(v => v.version.startsWith("2.")).length > 0;
    },
);
