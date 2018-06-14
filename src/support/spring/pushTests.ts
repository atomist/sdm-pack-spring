/**
 * Does this project have a Spring Boot application class?
 * This is a robust but expensive test as it needs
 * to scan all Java sources
 */
import {
    predicatePushTest,
    PredicatePushTest,
} from "@atomist/sdm";
import { SpringBootProjectStructure } from "./generate/SpringBootProjectStructure";

export const HasSpringBootApplicationClass: PredicatePushTest = predicatePushTest(
    "Has Spring Boot @Application class",
    async p => await HasSpringBootPom.predicate(p) && !!(await SpringBootProjectStructure.inferFromJavaOrKotlinSource(p)));

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
