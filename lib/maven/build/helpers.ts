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
    GitProject,
    Project,
} from "@atomist/automation-client";
import {
    ExecuteGoalResult,
    GoalInvocation,
    GoalProjectListenerEvent,
    GoalProjectListenerRegistration,
    LogSuppressor,
    PrepareForGoalExecution,
    ProgressLog,
    SdmGoalEvent,
    spawnLog,
} from "@atomist/sdm";
import {
    ProjectVersioner,
    readSdmVersion,
} from "@atomist/sdm-core";
import * as df from "dateformat";
import { determineMavenCommand } from "../mavenCommand";
import { MavenProgressReporter } from "../MavenProgressReporter";
import { MavenProjectIdentifier } from "../parse/pomParser";
import { IsMaven } from "../pushtest/pushTests";
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
    await changeMavenVersion(version, p, log);
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
    return changeMavenVersion(version, p, goalInvocation.progressLog);
};

async function changeMavenVersion(version: string, p: GitProject, progressLog: ProgressLog): Promise<ExecuteGoalResult> {
    const command = await determineMavenCommand(p);
    const args = ["build-helper:parse-version", "versions:set", `-DnewVersion=${version}`, "versions:commit"];
    return spawnLog(
        command, args,
        { cwd: p.baseDir, log: progressLog });
}

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

export async function mavenIncrementPatchVersionCommand(p: GitProject, progressLog: ProgressLog): Promise<ExecuteGoalResult> {
    const command = await determineMavenCommand(p);
    const args = [
        "build-helper:parse-version",
        "versions:set",
        "\${parsedVersion.majorVersion}.\${parsedVersion.minorVersion}.\${parsedVersion.nextIncrementalVersion}-\${parsedVersion.qualifier}",
        "versions:commit",
    ];
    return spawnLog(
        command, args,
        { cwd: p.baseDir, log: progressLog });
}

export async function mvnVersionProjectListener(p: GitProject,
                                                gi: GoalInvocation,
                                                event: GoalProjectListenerEvent): Promise<void | ExecuteGoalResult> {
    const command = await determineMavenCommand(p);
    if (event === GoalProjectListenerEvent.before) {
        const v = await readSdmVersion(
            gi.goalEvent.repo.owner,
            gi.goalEvent.repo.name,
            gi.goalEvent.repo.providerId,
            gi.goalEvent.sha,
            gi.goalEvent.branch,
            gi.context);
        return spawnLog(
            command, ["versions:set", `-DnewVersion=${v}`, "versions:commit"],
            { cwd: p.baseDir, log: gi.progressLog });
    }
}

export const MvnVersion: GoalProjectListenerRegistration = {
    name: "mvn-version",
    listener: mvnVersionProjectListener,
    pushTest: IsMaven,
};

async function mvnPackageProjectListener(p: GitProject,
                                         gi: GoalInvocation,
                                         event: GoalProjectListenerEvent): Promise<void | ExecuteGoalResult> {
    const command = await determineMavenCommand(p);
    if (event === GoalProjectListenerEvent.before) {
        return spawnLog(command,
            ["package", "-DskipTests=true", `-Dartifact.name=${p.id.repo}`],
            {
                cwd: p.baseDir,
                log: gi.progressLog,
            });
    }
}

export const MvnPackage: GoalProjectListenerRegistration = {
    name: "mvn-package",
    listener: mvnPackageProjectListener,
    pushTest: IsMaven,
};

export const MavenDefaultOptions = {
    pushTest: IsMaven,
    logInterpreter: LogSuppressor,
    progressReporter: MavenProgressReporter,
};
