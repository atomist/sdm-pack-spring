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
import { Microgrammar } from "@atomist/microgrammar/Microgrammar";
import {
    Literal,
} from "@atomist/microgrammar/Primitives";
import {
    LocalBuilder,
    LocalBuildInProgress,
} from "@atomist/sdm-core";
import { StringCapturingProgressLog } from "@atomist/sdm/api-helper/log/StringCapturingProgressLog";
import {
    asSpawnCommand,
    spawnAndWatch,
} from "@atomist/sdm/api-helper/misc/spawned";
import { AddressChannels } from "@atomist/sdm/api/context/addressChannels";
import {
    InterpretLog,
    LogInterpretation,
} from "@atomist/sdm/spi/log/InterpretedLog";
import { ProgressLog } from "@atomist/sdm/spi/log/ProgressLog";
import { determineGradleCommand } from "../GradleCommand";
import { GradleLogInterpreter } from "./gradleLogInterpreter";
import { UpdatingBuild } from "./UpdatingBuild";

export class GradleBuilder extends LocalBuilder implements LogInterpretation {
    public logInterpreter: InterpretLog = GradleLogInterpreter;

    protected async startBuild(credentials: ProjectOperationCredentials,
                               id: RemoteRepoRef,
                               atomistTeam: string,
                               log: ProgressLog,
                               addressChannels: AddressChannels): Promise<LocalBuildInProgress> {
        return this.sdm.configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            const propertiesOutput = new StringCapturingProgressLog();
            await spawnAndWatch(
                asSpawnCommand(`${determineGradleCommand(p)} properties`),
                {
                    cwd: p.baseDir,
                },
                propertiesOutput);
            const appName = nameGrammar.firstMatch(propertiesOutput.log).$matched;
            const version = versionGrammar.firstMatch(propertiesOutput.log).$matched;

            const cmd = `${determineGradleCommand(p)} --console=plain clean build`;
            const buildResult = spawnAndWatch(
                asSpawnCommand(cmd),
                {
                    cwd: p.baseDir,
                },
                log, {
                    errorFinder: (code, signal, l) => l.log.includes("[ERROR]"),
                });

            const rb = new UpdatingBuild(id, buildResult, atomistTeam, log.url);
            rb.ai = { id, name: appName, version };
            rb.deploymentUnitFile = `${p.baseDir}/build/libs/${appName}.jar`;
            return rb;
        });
    }
}

export interface GradleInfo {
    timeMillis?: number;

    success: boolean;
}

const nameGrammar = Microgrammar.fromString<{ name: string }>("name: ${name}", {
    name: Literal,
});

const versionGrammar = Microgrammar.fromString<{ name: string }>("version: ${name}", {
    name: Literal,
});
