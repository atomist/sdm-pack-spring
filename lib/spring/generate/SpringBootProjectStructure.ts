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

import { Java9FileParser, KotlinFileParser, } from "@atomist/antlr";
import { astUtils, FileParser, FileParserRegistry, logger, Project, ProjectAsync, ProjectFile, } from "@atomist/automation-client";
import { evaluateScalarValue, PathExpression, } from "@atomist/tree-path";
import { KotlinPackage } from "../../java/JavaProjectStructure";
import { JavaSourceFiles, KotlinSourceFiles, } from "../../java/javaProjectUtils";
import { packageInfo } from "../../java/query/packageInfo";

/**
 * Path expression for a class name annotated with Spring Boot.
 * Uses Java formal grammar.
 * @type {string}
 */
export const SpringBootAppClassInJava = `//normalClassDeclaration
                                [//annotation[@value='@SpringBootApplication']]
                                /identifier`;

/**
 * Path expression for a class name annotated with Spring Boot.
 * Uses Kotlin formal grammar.
 * @type {string}
 */
export const SpringBootAppClassInKotlin = `//classDeclaration
                                [//annotation[@value='@SpringBootApplication']]
                                //Identifier`;

/**
 * Represents the structure of a Spring Boot project,
 * which can be inferred from its contents. Covers application class
 * and starters.
 */
export class SpringBootProjectStructure {

    /**
     * Infer the Spring project structure of the given project, if found
     * @param {ProjectAsync} p
     * @return {Promise<SpringBootProjectStructure>}
     */
    public static async inferFromJavaSource(p: ProjectAsync): Promise<SpringBootProjectStructure> {
        return this.inferFromSourceWithJavaLikeImports(p, Java9FileParser, JavaSourceFiles, SpringBootAppClassInJava);
    }

    public static async inferFromKotlinSource(p: ProjectAsync): Promise<SpringBootProjectStructure> {
        return this.inferFromSourceWithJavaLikeImports(p, KotlinFileParser, KotlinSourceFiles, SpringBootAppClassInKotlin);
    }

    public static async inferFromJavaOrKotlinSource(p: ProjectAsync): Promise<SpringBootProjectStructure> {
        return await this.inferFromJavaSource(p) || this.inferFromKotlinSource(p);
    }

    private static async inferFromSourceWithJavaLikeImports(p: Project,
                                                            parserOrRegistry: FileParser | FileParserRegistry,
                                                            globPattern: string,
                                                            pathExpression: string | PathExpression): Promise<SpringBootProjectStructure> {
        const fileHits = await astUtils.findFileMatches(p, parserOrRegistry, globPattern, pathExpression);
        if (fileHits.length === 0) {
            return undefined;
        }
        if (fileHits.length > 1) {
            return undefined;
        }
        const fh = fileHits[0];

        // It's in the default package if no match found
        const packageName: { name: string } = {
            name: fh.file.extension === "java" ?
                // TODO using package workaround for Antlr bug
                ((await packageInfo(p, fh.file.path)) || { fqn: "" }).fqn :
                evaluateScalarValue(fh.fileNode, KotlinPackage) ||
                "",
        };
        const appClass = fh.matches[0].$value;
        if (packageName && appClass) {
            logger.debug("Successful Spring Boot inference on %j: packageName '%s', '%s'",
                p.id, packageName.name, appClass);
            return new SpringBootProjectStructure(packageName.name, appClass, fh.file);
        } else {
            logger.debug("Unsuccessful Spring Boot inference on %j: packageName '%j', '%s'",
                p.id, packageName, appClass);
            return undefined;
        }
    }

    /**
     * The stem of the application class. Strip "Application" if present.
     */
    public applicationClassStem = this.applicationClass.replace(/Application$/, "");

    /**
     * @param applicationPackage The package with the Spring Boot application class in it.
     * @param applicationClass Name of the application class within the given package
     * @param appClassFile path to the file containing the @SpringBootApplication annotation
     */
    private constructor(public readonly applicationPackage: string,
                        public readonly applicationClass: string,
                        public readonly appClassFile: ProjectFile) {
    }

}
