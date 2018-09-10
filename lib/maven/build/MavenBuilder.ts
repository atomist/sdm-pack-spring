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

import { ProjectOperationCredentials } from "@atomist/automation-client/operations/common/ProjectOperationCredentials";
import { RemoteRepoRef } from "@atomist/automation-client/operations/common/RepoId";
import {
    GitProject,
    LocalProject,
    SoftwareDeliveryMachine,
} from "@atomist/sdm";
import {
    LocalBuilder,
    LocalBuildInProgress,
} from "@atomist/sdm-core";
import {
    asSpawnCommand,
    ChildProcessResult,
    spawnAndWatch,
} from "@atomist/sdm/api-helper/misc/spawned";
import { AddressChannels } from "@atomist/sdm/api/context/addressChannels";
import { AppInfo } from "@atomist/sdm/spi/deploy/Deployment";
import {
    InterpretLog,
    LogInterpretation,
} from "@atomist/sdm/spi/log/InterpretedLog";
import { ProgressLog } from "@atomist/sdm/spi/log/ProgressLog";
import { identification } from "../parse/pomParser";
import { VersionedArtifact } from "../VersionedArtifact";
import { MavenLogInterpreter } from "./mavenLogInterpreter";

/* tslint:disable:max-classes-per-file */

/**
 * Build with Maven in the local automation client.
 * This implementation requires Java and maven on the classpath.
 * Note it is NOT intended for use for multiple organizations. It's OK
 * for one organization to use inside its firewall, but there is potential
 * vulnerability in builds of unrelated tenants getting at each others
 * artifacts.
 */
export class MavenBuilder extends LocalBuilder implements LogInterpretation {

    public logInterpreter: InterpretLog = MavenLogInterpreter;

    constructor(sdm: SoftwareDeliveryMachine,
                private readonly skipTests: boolean = false,
                private readonly deploymentUnitFileLocator: (p: LocalProject, mpi: VersionedArtifact) => string =
                    (p, mpi) => `${p.baseDir}/target/${mpi.artifact}-${mpi.version}.jar`) {
        super("MavenBuilder", sdm);
    }

    protected async startBuild(credentials: ProjectOperationCredentials,
                               id: RemoteRepoRef,
                               atomistTeam: string,
                               log: ProgressLog,
                               addressChannels: AddressChannels): Promise<LocalBuildInProgress> {
        return this.sdm.configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            // Find the artifact info from Maven
            const pom = await p.findFile("pom.xml");
            const content = await pom.getContent();
            const va = await identification(content);
            const appId = { ...va, name: va.artifact, id };

            const buildResult = mavenPackage(p, log, this.skipTests);
            const rb = new UpdatingBuild(id, buildResult, atomistTeam, log.url);
            rb.ai = appId;
            rb.deploymentUnitFile = this.deploymentUnitFileLocator(p, va);
            return rb;
        });
    }
}

class UpdatingBuild implements LocalBuildInProgress {

    public ai: AppInfo;

    public deploymentUnitFile: string;

    constructor(public repoRef: RemoteRepoRef,
                public buildResult: Promise<ChildProcessResult>,
                public team: string,
                public url: string) {
    }

    get appInfo(): AppInfo {
        return this.ai;
    }

}

export async function mavenPackage(p: GitProject,
                                   progressLog: ProgressLog,
                                   skipTests: boolean = false): Promise<ChildProcessResult> {
    const useMavenWrapper = hasMavenWrapper(p);
    const mavenExec = useMavenWrapper ? "./mvnw" : "mvn";
    const cmd = `${mavenExec} package${skipTests ? " -DskipTests" : ""}`;
    return spawnAndWatch(
        asSpawnCommand(cmd),
        {
            cwd: p.baseDir,
        },
        progressLog,
    );
}

export async function hasMavenWrapper(p: GitProject): Promise<boolean> {
    return (await p.getFile(".mvn/wrapper/maven-wrapper.properties")) !== undefined;
}
