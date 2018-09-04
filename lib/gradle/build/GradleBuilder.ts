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
import { MavenLogInterpreter } from "../../maven/build/mavenLogInterpreter";
import { determineGradleCommand } from "../GradleCommand";

export class GradleBuilder extends LocalBuilder implements LogInterpretation {
    public logInterpreter: InterpretLog = MavenLogInterpreter;

    protected async startBuild(credentials: ProjectOperationCredentials,
                               id: RemoteRepoRef,
                               atomistTeam: string,
                               log: ProgressLog,
                               addressChannels: AddressChannels): Promise<LocalBuildInProgress> {
        return this.sdm.configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            const cmd = `${determineGradleCommand(p)} clean build`;
            const buildResult = spawnAndWatch(
                asSpawnCommand(cmd),
                {
                    cwd: p.baseDir,
                },
                log, {
                    errorFinder: (code, signal, l) => l.log.includes("[ERROR]"),
                });

            const rb = new UpdatingBuild(id, buildResult, atomistTeam, log.url);
            rb.ai = null; // TODO
            rb.deploymentUnitFile = ""; // TODO: `${p.baseDir}/target/${appId.name}-${appId.version}.jar`;
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
