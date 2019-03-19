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
    anySatisfied,
    ExecuteGoalResult,
    GoalInvocation,
    GoalProjectListenerEvent,
    GoalProjectListenerRegistration,
    spawnLog,
    StringCapturingProgressLog,
} from "@atomist/sdm";
import * as glob from "glob";
import { IsGradle } from "../../../gradle/pushtest/gradlePushTests";
import { IsMaven } from "../../../maven/pushtest/pushTests";

export interface ArtifactArchiveCache {
    putInCache(id: RepoRef, file: string): void;
    retrieveFromCache(id: RepoRef, baseDir: string): string;
    removeFromCache(id: RepoRef): void;
}

export function cacheArtifacts(artifactArchiveCacher: ArtifactArchiveCache,
                               globPattern: string = "**/*.jar"): GoalProjectListenerRegistration {
    return {
        name: "cache-artifacts",
        listener: archiveAndCacheArtifacts,
        pushTest: anySatisfied(IsMaven, IsGradle),
    };

    async function archiveFiles(project: GitProject, id: RepoRef, artifacts: string[]) {
        const log = new StringCapturingProgressLog();
        const archiveFileName = `atomistArtifactCacheArchive.tar.gz`;
        await spawnLog("tar", ["-czf", `"${archiveFileName}"`, ...artifacts], { cwd: project.baseDir, log});
        return archiveFileName;
    }

    async function archiveAndCacheArtifacts(p: GitProject,
                                            gi: GoalInvocation,
                                            event: GoalProjectListenerEvent): Promise<void | ExecuteGoalResult> {
        if (event === GoalProjectListenerEvent.after) {
            const jars = await glob.__promisify__(globPattern, {cwd: p.baseDir, nodir: true});
            const archive = await archiveFiles(p, gi.id, jars);
            artifactArchiveCacher.putInCache(gi.id, archive);
        }
    }
}

export function restoreArtifacts(artifactArchiveCache: ArtifactArchiveCache): GoalProjectListenerRegistration {
    return {
        name: "restore-artifacts",
        listener: retrieveAndRestoreArtifacts,
        pushTest: anySatisfied(IsMaven, IsGradle),
    };

    async function retrieveAndRestoreArtifacts(p: GitProject,
                                               gi: GoalInvocation,
                                               event: GoalProjectListenerEvent): Promise<void | ExecuteGoalResult> {
        if (event === GoalProjectListenerEvent.before) {
            const archive = artifactArchiveCache.retrieveFromCache(gi.id, p.baseDir);
            const log = new StringCapturingProgressLog();
            await spawnLog("tar", ["-xzf", `"${archive}"`], { cwd: p.baseDir, log});
        }
    }
}

export function removeArchivedArtifacts(artifactArchiveCache: ArtifactArchiveCache): GoalProjectListenerRegistration {
    return {
        name: "remove-archived-artifacts",
        listener: async (p, gi, event) => {
            if (event === GoalProjectListenerEvent.after) {
                artifactArchiveCache.removeFromCache(gi.id);
            }
        },
        pushTest: anySatisfied(IsMaven, IsGradle),
    };
}
