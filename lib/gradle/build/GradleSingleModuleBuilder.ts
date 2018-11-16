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
} from "@atomist/automation-client";
import {
    Literal,
    Microgrammar,
} from "@atomist/microgrammar";
import {
    AppInfo,
    spawnAndWatch,
    StringCapturingProgressLog,
} from "@atomist/sdm";
import {
    Builder,
    BuildInProgress,
} from "@atomist/sdm-pack-build";
import { determineGradleCommand } from "../gradleCommand";

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
            const command = determineGradleCommand(p);
            await spawnAndWatch(
                { command, args: ["properties"] },
                { cwd: p.baseDir },
                propertiesOutput);
            const appName = nameGrammar.firstMatch(propertiesOutput.log).$matched;
            const version = versionGrammar.firstMatch(propertiesOutput.log).$matched;

            const buildResult = spawnAndWatch(
                { command, args: ["--console=plain", "clean", "build"] },
                { cwd: p.baseDir },
                progressLog, {
                    errorFinder: (code, signal, l) => l.log.includes("[ERROR]"),
                });

            const rb = new UpdatingBuild(id, await buildResult);
            rb.ai = { id, name: appName, version };
            rb.deploymentUnitFile = `${p.baseDir}/build/libs/${appName}.jar`;
            return rb;
        });
    };
}

export const GradleSingleModuleBuilder = gradleSingleModuleBuilder();

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
