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

import {GitProject, InMemoryProject, Project, ProjectFile, RepoRef} from "@atomist/automation-client";
import {GoalProjectListenerEvent, ProgressLog} from "@atomist/sdm";
import * as assert from "power-assert";
import {ArtifactArchiveCache, cacheArtifacts, restoreArtifacts} from "../../../../lib/java/build/helpers/CacheArtifacts";

describe("CacheArtifacts", () => {

        class TestArtifactArchiveCache implements ArtifactArchiveCache {
            private id: RepoRef;
            private cacheFiles: ProjectFile[];

            public async putInCache(id: RepoRef, project: Project, files: string[], log: ProgressLog): Promise<void> {
                this.id = id;
                this.cacheFiles = await Promise.all(files.map(async f => project.getFile(f)));
                return undefined;
            }

            public removeFromCache(id: RepoRef): Promise<void> {
                return undefined;
            }

            public async retrieveFromCache(id: RepoRef, project: Project, log: ProgressLog): Promise<void> {
                if (this.id === id) {
                    this.cacheFiles.forEach(f => project.add(f));
                } else {
                    throw Error("Wrong id!");
                }
            }

        }

        it("cache and retrieve", async () => {
            // when cache something
            const project = InMemoryProject.of({path: "test.txt", content: "Test"});
            const testCache = new TestArtifactArchiveCache();
            await cacheArtifacts(testCache, {globPattern: "**/*.txt"})
                .listener(project as any as GitProject, {} as any,  GoalProjectListenerEvent.after);
            // it should find it in the cache
            const emptyProject = InMemoryProject.of();
            await restoreArtifacts(testCache, {}).listener(emptyProject as any as GitProject, {} as any, GoalProjectListenerEvent.before);
            assert(await emptyProject.hasFile("test.txt"));
        });
});
