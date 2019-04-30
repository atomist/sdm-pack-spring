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
    ErrorFinder,
    ProgressLog,
    spawnLog,
    SpawnLogResult,
} from "@atomist/sdm";
import {
    Builder,
    BuildInProgress,
} from "@atomist/sdm-pack-build";
import { determineGradleCommand } from "../gradleCommand";

export interface GradleBuilderOptions {
    tasks: string[];
    flags: string[];
    arguments: Array<{ name: string, value?: string }>;
}

export const DefaultGradleBuilderOptions: GradleBuilderOptions = {
    tasks: ["clean", "build"],
    flags: [],
    arguments: [],
};

/**
 * Build with Gradle in the local automation client.
 * This implementation requires Java and maven on the classpath.
 * Note it is NOT intended for use for multiple organizations. It's OK
 * for one organization to use inside its firewall, but there is potential
 * vulnerability in builds of unrelated tenants getting at each others
 * artifacts.
 */
export function gradleBuilder(options: GradleBuilderOptions = DefaultGradleBuilderOptions): Builder {
    return async goalInvocation => {
        const { configuration, id, progressLog, credentials } = goalInvocation;
        return configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            const buildResult = gradleCommand(p, {
                progressLog,
                errorFinder: GradleErrorFinder,
                flags: ["--console=plain", ...options.flags],
                tasks: options.tasks,
                args: options.arguments,
            });
            return new UpdatingBuild(id, await buildResult);
        });
    };
}

export interface GradleCommandOptions {
    args?: Array<{ name: string, value?: string }>;
    tasks: string[];
    flags?: string[];
    errorFinder: ErrorFinder;
    progressLog: ProgressLog;
    initScript?: string;
}

export async function gradleCommand(p: LocalProject,
                                    options: GradleCommandOptions): Promise<SpawnLogResult> {
    const command = await determineGradleCommand(p);
    const args = [];
    if (options.flags) {
        args.push(...options.flags);
    }
    if (options.args) {
        args.push(...options.args.map(a => `-D${a.name}${a.value ? `=${a.value}` : ""}`));
    }
    if (options.initScript) {
        args.push(`-I ${options.initScript}`);
    }
    args.push(...(options.tasks || ["build"]));
    return spawnLog(
        command,
        args,
        {
            cwd: p.baseDir,
            log: options.progressLog,
            errorFinder: options.errorFinder,
        },
    );
}

export const GradleBuilder = gradleBuilder();

export interface GradleInfo {
    timeMillis?: number;

    success: boolean;
}

export const GradleErrorFinder: ErrorFinder = (code, signal, log) => {
    const failureRegex = /BUILD FAILED/;
    return (code > 0) || failureRegex.test(log.log);
};

class UpdatingBuild implements BuildInProgress {
    constructor(public repoRef: RemoteRepoRef,
                public buildResult: SpawnLogResult) {
    }
}
