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
    GitProject,
    LocalProject,
    RemoteRepoRef,
} from "@atomist/automation-client";
import {
    AppInfo,
    FulfillableGoalDetails,
    goal,
    Goal,
    ProgressLog,
    spawnLog,
    SpawnLogResult,
} from "@atomist/sdm";
import {
    Builder,
    BuildInProgress,
} from "@atomist/sdm-pack-build";
import { determineMavenCommand } from "../mavenCommand";
import { MavenProjectIdentifier } from "../parse/pomParser";
import { VersionedArtifact } from "../VersionedArtifact";

/**
 * Build with Maven in the local automation client.
 * This implementation requires Java and maven on the classpath.
 * Note it is NOT intended for use for multiple organizations. It's OK
 * for one organization to use inside its firewall, but there is potential
 * vulnerability in builds of unrelated tenants getting at each others
 * artifacts.
 */
export function mavenBuilder(args: Array<{ name: string, value?: string }> = [],
                             deploymentUnitFileLocator: (p: LocalProject, mpi: VersionedArtifact) => string =
                                 (p, mpi) => `${p.baseDir}/target/${mpi.artifact}-${mpi.version}.jar`): Builder {
    return async goalInvocation => {
        const { configuration, credentials, progressLog, id } = goalInvocation;
        return configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            // Find the artifact info from Maven
            const va = await MavenProjectIdentifier(p);
            const appId = { ...va, name: va.artifact, id };
            const buildResult = await mavenPackage(p, progressLog, args);
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
                public buildResult: SpawnLogResult) {
    }

    get appInfo(): AppInfo {
        return this.ai;
    }

}

export async function mavenPackage(p: GitProject,
                                   progressLog: ProgressLog,
                                   args: Array<{ name: string, value?: string }> = [],
                                   mavenGoal: string = "package"): Promise<SpawnLogResult> {
    const command = await determineMavenCommand(p);
    return spawnLog(
        command,
        [mavenGoal, ...args.map(a => `-D${a.name}${a.value ? `=${a.value}` : ""}`)],
        {
            cwd: p.baseDir,
            log: progressLog,
        },
    );
}

/**
 * Run an arbitrary Maven goal with the given arguments.
 * Does not take account of any generated artifact.
 * @param details goal details
 * @param {string} mavenGoal
 * @param args
 * @return {Builder}
 */
export function mavenRunner(details: FulfillableGoalDetails, mavenGoal: string, args: Array<{ name: string, value?: string }> = []): Goal {
    return goal(details, async goalInvocation => {
        const { configuration, credentials, progressLog, id } = goalInvocation;
        return configuration.sdm.projectLoader.doWithProject({ credentials, id, readOnly: true }, async p => {
            await mavenPackage(p, progressLog, args, mavenGoal);
        });
    });
}
