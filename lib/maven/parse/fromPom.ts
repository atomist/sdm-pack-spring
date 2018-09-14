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

import { Project } from "@atomist/automation-client/project/Project";
import { gatherFromMatches } from "@atomist/automation-client/tree/ast/astUtils";
import { FunctionRegistry } from "@atomist/tree-path";
import { XmldocFileParser, XmldocTreeNode } from "../../xml/XmldocFileParser";
import { Dependencies } from "../inspection/findDependencies";
import { VersionedArtifact } from "../VersionedArtifact";

/**
 * Dependencies under dependencies
 */
export async function findDeclaredDependencies(p: Project, glob: string = "pom.xml"): Promise<Dependencies> {
    return findDeclaredDependenciesWith(p,
        "//project/dependencies/dependency",
        glob, {});
}

async function findDeclaredDependenciesWith(p: Project,
                                            pathExpression: string,
                                            glob: string = "pom.xml",
                                            functionRegistry: FunctionRegistry): Promise<Dependencies> {
    const dependencies = await gatherFromMatches(p, new XmldocFileParser(),
        glob,
        pathExpression,
        m => {
            return extractVersionedArtifact(m as any as XmldocTreeNode);
        }, functionRegistry);
    return { dependencies };
}

/*

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jetty</artifactId>
</dependency>

 */
function extractVersionedArtifact(n: XmldocTreeNode): VersionedArtifact {
    const groupId = n.$children.find(c => c.$value.startsWith("<groupId>"));
    const artifactId = n.$children.find(c => c.$value.startsWith("<artifactId>"));
    const version = n.$children.find(c => c.$value.startsWith("<version>"));
    if (!(!!groupId && !!artifactId)) {
        throw new Error(`groupId and artifactId are required in [${n.$value}]`);
    }
    return {
        group: groupId.innerValue,
        artifact: artifactId.innerValue,
        version: !!version ? version.innerValue : undefined,
    };
}
