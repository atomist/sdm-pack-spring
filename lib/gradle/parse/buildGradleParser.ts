/*
 * Copyright © 2019 Atomist, Inc.
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
    LocalProject,
    Project,
} from "@atomist/automation-client";
import {
    StringCapturingProgressLog,
    SuccessIsReturn0ErrorFinder,
} from "@atomist/sdm";
import { ProjectIdentification } from "@atomist/sdm-core/lib/internal/delivery/build/local/projectIdentifier";
import { VersionedArtifact } from "../../maven/VersionedArtifact";
import { gradleCommand } from "../build/gradleBuilder";

export async function getGradleProjectInfo(p: Project) {
    const propertiesOutput = new StringCapturingProgressLog();
    if (!await p.hasFile(".atomist.gradle.json")) {
        await p.addFile("atomist.init.gradle", ATOMIST_INIT_GRADLE_SCRIPT);
        await gradleCommand(p as LocalProject,
            {
                progressLog: propertiesOutput,
                initScript: "atomist.init.gradle",
                tasks: ["printDepsTreeInJson"],
                errorFinder: SuccessIsReturn0ErrorFinder,
            });
    }
    return JSON.parse(await (await p.getFile(".atomist.gradle.json")).getContent());
}

/**
 * Return the identification of a project: name and version
 * @param {Project} p
 * @return {Promise<any>}
 * @constructor
 */
export const GradleProjectIdentifier: (p: Project) => Promise<VersionedArtifact & ProjectIdentification> = async p => {
    const projectInfo = await getGradleProjectInfo(p);
    const appName = projectInfo.name;
    const version = projectInfo.version;
    const group = projectInfo.group;
    return {
        name: appName,
        artifact: appName,
        version,
        group,
    };
};

export const ATOMIST_INIT_GRADLE_SCRIPT = `
rootProject {
    task printDepsTreeInJson {
        doLast {
            def jsonProject = new JsonProject()
            jsonProject.name = project.name
            jsonProject.version = project.version
            jsonProject.group = project.group
            jsonProject.dependencies = getDependencies(project)
            jsonProject.plugins = getPlugins(project)
            jsonProject.subProjects = project.subprojects.collect { p ->
                def sub = new JsonProject()
                sub.name = p.name
                sub.version = p.version
                sub.group = p.group
                sub.dependencies = getDependencies(p)
                sub.plugins = getPlugins(p)
                sub
            }
            def builder = new JsonBuilder(jsonProject)
            def jsonFile = project.file(".atomist.gradle.json")
            if(jsonFile.exists()) {
                jsonFile.delete()
            }
            jsonFile.createNewFile()
            jsonFile.append(builder.toPrettyString())
        }
    }
}

def getDependencies(Project p) {
    return p.configurations.runtimeClasspath.incoming.getResolutionResult().allDependencies.toArray().collect() { depResult ->
        def dep = new JsonDependency()
        dep.dependency = depResult.requested
        dep.from = depResult.from
        dep
    }
}

def getPlugins(Project p) {
    return p.plugins.collect { plugin ->
        def pl = new JsonPlugin()
        pl.plugin = plugin.class
        pl
    }
}

class JsonDependency {
    String dependency
    String from
}

class JsonPlugin {
    String plugin
}

class JsonProject {
    String group
    String name
    String version
    List<JsonProject> subProjects
    List<JsonDependency> dependencies
    List<JsonPlugin> plugins
}
`;
