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
    RemoteRepoRef,
} from "@atomist/automation-client";
import {
    AppInfo,
    ErrorFinder,
    ProgressLog,
    spawnLog,
    SpawnLogResult,
    StringCapturingProgressLog,
} from "@atomist/sdm";
import {
    Builder,
    BuildInProgress,
} from "@atomist/sdm-pack-build";
import { determineGradleCommand } from "../gradleCommand";
import {
    gradlePropertiesNameGrammar,
    gradlePropertiesVersionGrammar,
} from "./helpers";

/**
 * Build with Gradle in the local automation client.
 * This implementation requires Java and maven on the classpath.
 * Note it is NOT intended for use for multiple organizations. It's OK
 * for one organization to use inside its firewall, but there is potential
 * vulnerability in builds of unrelated tenants getting at each others
 * artifacts.
 */
export function gradleSingleModuleBuilder(): Builder {
    return async goalInvocation => {
        const { configuration, id, progressLog, credentials } = goalInvocation;
        return configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            const propertiesOutput = new StringCapturingProgressLog();
            await gradleCommand(p, { progressLog: propertiesOutput, tasks: ["properties"]});
            const appName = gradlePropertiesNameGrammar.firstMatch(propertiesOutput.log).$matched;
            const version = gradlePropertiesVersionGrammar.firstMatch(propertiesOutput.log).$matched;
            const buildResult = gradleCommand(p, {
                progressLog,
                errorFinder: (code, signal, l) => l.log.includes("[ERROR]"),
                flags: ["--console=plain"],
                tasks: ["clean", "build"],
            });
            const rb = new UpdatingBuild(id, await buildResult);
            rb.ai = { id, name: appName, version };
            rb.deploymentUnitFile = `${p.baseDir}/build/libs/${appName}.jar`;
            return rb;
        });
    };
}

export interface GradleCommandOptions {
    args: Array<{ name: string, value?: string }>;
    tasks: string[];
    flags: string[];
    errorFinder: ErrorFinder;
    progressLog: ProgressLog;
}

export const DefaultGradleCommandOptions: GradleCommandOptions = {
    args: [],
    tasks: ["build"],
    flags: [],
    errorFinder: () => false,
    progressLog: new StringCapturingProgressLog(),
};

export async function gradleCommand(p: LocalProject,
                                    options: Partial<GradleCommandOptions>): Promise<SpawnLogResult> {
    const optionsToUse: GradleCommandOptions = {
        ...DefaultGradleCommandOptions,
        ...options,
    };

    const command = await determineGradleCommand(p);
    return spawnLog(
        command,
        [...optionsToUse.args.map(a => `-D${a.name}${a.value ? `=${a.value}` : ""}`), ...optionsToUse.tasks],
        {
            cwd: p.baseDir,
            log: optionsToUse.progressLog,
            errorFinder: optionsToUse.errorFinder,
        },
    );
}

export const GradleSingleModuleBuilder = gradleSingleModuleBuilder();

export interface GradleInfo {
    timeMillis?: number;

    success: boolean;
}

class UpdatingBuild implements BuildInProgress {

    public ai: AppInfo;

    public deploymentUnitFile: string;

    constructor(public repoRef: RemoteRepoRef,
                public buildResult: SpawnLogResult) {
    }

    get appInfo(): AppInfo {
        return this.ai;
    }
}
