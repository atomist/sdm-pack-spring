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
import { Project } from "@atomist/automation-client/project/Project";
import { renameClass } from "../../java/javaProjectUtils";
import { SpringBootProjectStructure } from "./SpringBootProjectStructure";

/**
 * Infer the Spring Boot structure and rename the class.
 * @param {string} serviceClassName
 * @param {Project} p
 * @return {Promise<Project>}
 */
export async function inferSpringStructureAndRename(serviceClassName: string, p: Project): Promise<Project> {
    const structure = await SpringBootProjectStructure.inferFromJavaOrKotlinSource(p);
    if (structure) {
        return renameClass(p, structure.applicationClassStem, serviceClassName);
    } else {
        logger.warn("Spring Boot project structure not found");
        return p;
    }
}
