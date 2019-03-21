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
    RepoRef,
} from "@atomist/automation-client";
import {
    AnyPush,
    ExecuteGoalResult,
    GoalInvocation,
    GoalProjectListenerEvent,
    GoalProjectListenerRegistration, PushTest,
    spawnLog,
} from "@atomist/sdm";
import * as glob from "glob";

export interface ArtifactArchiveCache {
    putInCache(id: RepoRef, file: string): void;
    retrieveFromCache(id: RepoRef, baseDir: string): string;
    removeFromCache(id: RepoRef): void;
}

const defaultCacheArtifactOptions = {
    skipDirectories: true,
    pushTest: AnyPush,
};

export interface CacheArtifactsOptions {
    skipDirectories: boolean;
    pushTest: PushTest;
}

export function cacheArtifacts(artifactArchiveCacher: ArtifactArchiveCache,
                               globPattern: string = "**/*.jar",
                               options: Partial<CacheArtifactsOptions> = {}): GoalProjectListenerRegistration {
    const optionsToUse = {
        ...defaultCacheArtifactOptions,
        ...options,
    };

    return {
        name: "cache-artifacts",
        listener: archiveAndCacheArtifacts,
        pushTest: optionsToUse.pushTest,
    };

    async function archiveAndCacheArtifacts(p: GitProject,
                                            gi: GoalInvocation,
                                            event: GoalProjectListenerEvent): Promise<void | ExecuteGoalResult> {
        if (event === GoalProjectListenerEvent.after) {
            const jars = await glob.__promisify__(globPattern, {cwd: p.baseDir, nodir: optionsToUse.skipDirectories});
            const log = gi.progressLog;
            const archiveFileName = `atomistArtifactCacheArchive.tar.gz`;
            await spawnLog("tar", ["-czf", `"${archiveFileName}"`, ...jars], { cwd: p.baseDir, log});
            artifactArchiveCacher.putInCache(gi.id, archiveFileName);
        }
    }
}

export function restoreArtifacts(artifactArchiveCache: ArtifactArchiveCache,
                                 options: Partial<CacheArtifactsOptions> = {}): GoalProjectListenerRegistration {
    const optionsToUse = {
        ...defaultCacheArtifactOptions,
        ...options,
    };

    return {
        name: "restore-artifacts",
        listener: retrieveAndRestoreArtifacts,
        pushTest: optionsToUse.pushTest,
    };

    async function retrieveAndRestoreArtifacts(p: GitProject,
                                               gi: GoalInvocation,
                                               event: GoalProjectListenerEvent): Promise<void | ExecuteGoalResult> {
        if (event === GoalProjectListenerEvent.before) {
            const log = gi.progressLog;
            const archive = artifactArchiveCache.retrieveFromCache(gi.id, p.baseDir);
            await spawnLog("tar", ["-xzf", `"${archive}"`], { cwd: p.baseDir, log});
        }
    }
}

export function removeArchivedArtifacts(artifactArchiveCache: ArtifactArchiveCache,
                                        options: Partial<CacheArtifactsOptions> = {}): GoalProjectListenerRegistration {
    const optionsToUse = {
        ...defaultCacheArtifactOptions,
        ...options,
    };

    return {
        name: "remove-archived-artifacts",
        listener: async (p, gi, event) => {
            if (event === GoalProjectListenerEvent.after) {
                artifactArchiveCache.removeFromCache(gi.id);
            }
        },
        pushTest: optionsToUse.pushTest,
    };
}
