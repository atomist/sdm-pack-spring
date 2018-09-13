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
    ExecuteGoalResult,
    GitProject,
    GoalInvocation,
    PrepareForGoalExecution,
    ProgressLog,
    Project,
    SdmGoalEvent,
} from "@atomist/sdm";
import { ProjectVersioner } from "@atomist/sdm-core/internal/delivery/build/local/projectVersioner";
import {
    asSpawnCommand,
    spawnAndWatch,
    SpawnCommand,
} from "@atomist/sdm/api-helper/misc/spawned";
import * as df from "dateformat";
import { MavenProjectIdentifier } from "../parse/pomParser";
import { mavenPackage } from "./MavenBuilder";

async function newVersion(sdmGoal: SdmGoalEvent, p: Project): Promise<string> {
    const pi = await MavenProjectIdentifier(p);
    const branch = sdmGoal.branch.split("/").join(".");
    return `${pi.version}-${branch}.${df(new Date(), "yyyymmddHHMMss")}`;
}

/**
 * ProjectVersioner to be used with Maven projects
 * @param sdmGoal
 * @param p
 * @param log
 * @constructor
 */
export const MavenProjectVersioner: ProjectVersioner = async (sdmGoal, p, log) => {
    const version = await newVersion(sdmGoal, p);
    await changeMavenVersion(version, p.baseDir, log);
    return version;
};

/**
 * PrepareForGoalExecution for updating the Maven version in project
 * @param p
 * @param goalInvocation
 * @constructor
 */
export const MavenVersionPreparation: PrepareForGoalExecution = async (p: GitProject, goalInvocation: GoalInvocation) => {
    const version = await newVersion(goalInvocation.sdmGoal, p);
    return changeMavenVersion(version, p.baseDir, goalInvocation.progressLog);
};

async function changeMavenVersion(version: string, baseDir: string, progressLog: ProgressLog): Promise<ExecuteGoalResult> {
    const cmd = `./mvnw build-helper:parse-version versions:set -DnewVersion="${version}" versions:commit`;
    return spawnAndWatch(
        asSpawnCommand(cmd),
        {
            cwd: baseDir,
        },
        progressLog);
}

export const MavenIncrementPatchCommand: SpawnCommand = asSpawnCommand("./mvnw build-helper:parse-version versions:set -DnewVersion=" +
    "\${parsedVersion.majorVersion}.\${parsedVersion.minorVersion}.\${parsedVersion.nextIncrementalVersion}" +
    "-\${parsedVersion.qualifier} versions:commit");

/**
 * PrepareForGoalExecution for running Maven package
 * @param p
 * @param goalInvocation
 * @constructor
 */
export const MavenCompilePreparation: PrepareForGoalExecution = mavenPackagePreparation([{
    name: "skipTests",
    value: "true",
}]);

/**
 * Constructs a PrepareForGoalExecution taking additional command line args
 * @param args
 */
export function mavenPackagePreparation(args: Array<{ name: string, value: string }> = []): PrepareForGoalExecution {
    return async (p: GitProject, goalInvocation: GoalInvocation) => {
        return mavenPackage(p, goalInvocation.progressLog, args);
    };
}