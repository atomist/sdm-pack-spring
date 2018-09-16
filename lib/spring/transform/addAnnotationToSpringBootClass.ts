import { logger } from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { addAnnotationToClass } from "../../java/transform/addAnnotationToClass";
import { SpringBootProjectStructure } from "../generate/SpringBootProjectStructure";

/**
 * Add the given annotation to the project's Spring Boot class.
 * Do nothing if not a Spring Boot project
 * @return {CodeTransform}
 */
export function addAnnotationToSpringBootClass(annotationFqn: string): CodeTransform {
    return async (p, ci) => {
        const sbs = await SpringBootProjectStructure.inferFromJavaOrKotlinSource(p);
        if (!sbs) {
            logger.warn("Not a Spring Boot project: %s: Cannot add annotation to Spring Boot class", p.id.url);
        }
        return addAnnotationToClass({
            sourceFilePath: sbs.appClassFile.path,
            className: sbs.applicationClass,
            annotationFqn,
        })(p, ci);
    };
}
