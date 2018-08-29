
import {
    predicatePushTest,
    PredicatePushTest,
} from "@atomist/sdm";
import { SpringBootProjectStructure } from "./generate/SpringBootProjectStructure";

/**
 * Does this project have a Spring Boot application class?
 * This is a robust but expensive test as it needs
 * to scan all Java sources
 */
export const HasSpringBootApplicationClass: PredicatePushTest = predicatePushTest(
    "Has Spring Boot @Application class",
    async p => await HasSpringBootPom.predicate(p) && !!(await SpringBootProjectStructure.inferFromJavaOrKotlinSource(p)));

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
