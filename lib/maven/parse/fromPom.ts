import { Dependencies } from "../inspection/findDependencies";
import { XmldocFileParser, XmldocTreeNode } from "../../xml/XmldocFileParser";
import { Project } from "@atomist/automation-client/project/Project";
import { gatherFromMatches } from "@atomist/automation-client/tree/ast/astUtils";
import { VersionedArtifact } from "../VersionedArtifact";
import { FunctionRegistry } from "@atomist/tree-path";

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
