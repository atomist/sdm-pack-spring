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
    logger,
    Project,
} from "@atomist/automation-client";
import { CodeTransform } from "@atomist/sdm";
import { SpringProjectCreationParameters } from "../../..";
import { renameClass } from "../../java/javaProjectUtils";
import { SpringBootProjectStructure } from "./SpringBootProjectStructure";
import { serviceClassName } from "./SpringProjectCreationParameters";

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
export const inferSpringStructureAndRenameTransform: CodeTransform<SpringProjectCreationParameters> =
    (p, c, params) => inferSpringStructureAndRename(serviceClassName(params), p);
