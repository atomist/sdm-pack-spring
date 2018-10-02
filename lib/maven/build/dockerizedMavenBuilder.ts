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
    ChildProcessResult,
    RemoteRepoRef,
    spawnAndWatch,
} from "@atomist/automation-client";
import {
    AppInfo,
    GitProject,
    LocalProject,
    ProgressLog,
} from "@atomist/sdm";
import {
    Builder,
    BuildInProgress,
} from "@atomist/sdm-pack-build";
import { MavenProjectIdentifier } from "../parse/pomParser";
import { VersionedArtifact } from "../VersionedArtifact";

/* tslint:disable:max-classes-per-file */

export const DefaultMavenDockerVersion = "3.5-jdk-8-alpine";

/**
 * Build with Maven in the local automation client.
 * This implementation uses Docker and does not require a Java or Maven installation.
 * Note it is NOT intended for use for multiple organizations. It's OK
 * for one organization to use inside its firewall, but there is potential
 * vulnerability in builds of unrelated tenants getting at each others
 * artifacts.
 */
export function dockerizedMavenBuilder(version: string = DefaultMavenDockerVersion,
                                       args: Array<{ name: string, value?: string }> = [],
                                       deploymentUnitFileLocator: (p: LocalProject, mpi: VersionedArtifact) => string =
                                        (p, mpi) => `${p.baseDir}/target/${mpi.artifact}-${mpi.version}.jar`): Builder {
    return async goalInvocation => {
        const { configuration, credentials, progressLog, id } = goalInvocation;
        return configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            const va = await MavenProjectIdentifier(p);
            const appId = { ...va, name: va.artifact, id };
            const buildResult = await dockerizedMavenPackage(p, progressLog, args, version);
            const rb = new UpdatingBuild(id, buildResult);
            rb.ai = appId;
            rb.deploymentUnitFile = deploymentUnitFileLocator(p, va);
            return rb;
        });
    };
}

class UpdatingBuild implements BuildInProgress {

    public ai: AppInfo;

    public deploymentUnitFile: string;

    constructor(public repoRef: RemoteRepoRef,
                public buildResult: ChildProcessResult) {
    }

    get appInfo(): AppInfo {
        return this.ai;
    }
}

/**
 * Perform a Maven package command running Maven in a Docker container. This command
 * does not require a Maven or JDK install, only Docker.
 */
export async function dockerizedMavenPackage(p: GitProject,
                                             progressLog: ProgressLog,
                                             args: Array<{ name: string, value?: string }> = [],
                                             version: string = DefaultMavenDockerVersion): Promise<ChildProcessResult> {
    const command = `docker run -it -v "$(pwd)":/usr/src/maven -w /usr/src/maven maven:${version} mvn`;
    return spawnAndWatch({
        command,
        args: ["package", ...args.map(a => `-D${a.name}${a.value ? `=${a.value}` : ""}`)],
    },
        {
            cwd: p.baseDir,
        },
        progressLog,
    );
}
