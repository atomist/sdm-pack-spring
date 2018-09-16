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
            logger.warn("Not a Spring Boot project: %j: Cannot add annotation to Spring Boot class", p.id);
            return;
        }
        return addAnnotationToClass({
            sourceFilePath: sbs.appClassFile.path,
            className: sbs.applicationClass,
            annotationFqn,
        })(p, ci);
    };
}
