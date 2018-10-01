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
    ProjectOperationCredentials,
    RemoteRepoRef,
    spawnAndWatch,
} from "@atomist/automation-client";
import {
    AddressChannels,
    AppInfo,
    GitProject,
    InterpretLog,
    LocalProject,
    LogInterpretation,
    ProgressLog,
    SoftwareDeliveryMachine,
    SoftwareDeliveryMachineConfiguration,
} from "@atomist/sdm";
import {
    LocalBuilder,
    LocalBuildInProgress,
} from "@atomist/sdm-core";
import { MavenProjectIdentifier } from "../parse/pomParser";
import { VersionedArtifact } from "../VersionedArtifact";
import { MavenLogInterpreter } from "./mavenLogInterpreter";

/* tslint:disable:max-classes-per-file */

/**
 * Build with Maven in the local automation client.
 * This implementation uses Docker and does not require a Java or Maven installation.
 * Note it is NOT intended for use for multiple organizations. It's OK
 * for one organization to use inside its firewall, but there is potential
 * vulnerability in builds of unrelated tenants getting at each others
 * artifacts.
 */
export class DockerizedMavenBuilder extends LocalBuilder implements LogInterpretation {

    public logInterpreter: InterpretLog = MavenLogInterpreter;

    constructor(sdm: SoftwareDeliveryMachine,
                private readonly args: Array<{ name: string, value?: string }> = [],
                private readonly deploymentUnitFileLocator: (p: LocalProject, mpi: VersionedArtifact) => string =
            (p, mpi) => `${p.baseDir}/target/${mpi.artifact}-${mpi.version}.jar`,
                private readonly version: string = "3.5-jdk-8-alpine") {
        super("MavenBuilder", sdm);
    }

    protected async startBuild(credentials: ProjectOperationCredentials,
                               id: RemoteRepoRef,
                               atomistTeam: string,
                               log: ProgressLog,
                               addressChannels: AddressChannels,
                               configuration: SoftwareDeliveryMachineConfiguration): Promise<LocalBuildInProgress> {
        return configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            // Find the artifact info from Maven
            const va = await MavenProjectIdentifier(p);
            const appId = { ...va, name: va.artifact, id };

            const buildResult = dockerizedMavenPackage(p, log, this.args, this.version);
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

export async function dockerizedMavenPackage(p: GitProject,
                                             progressLog: ProgressLog,
                                             args: Array<{ name: string, value?: string }> = [],
                                             version: string): Promise<ChildProcessResult> {
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
