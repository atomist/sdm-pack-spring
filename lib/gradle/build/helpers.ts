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
    Project,
} from "@atomist/automation-client";
import {
    ExecuteGoalResult,
    formatDate,
    GoalInvocation,
    GoalProjectListenerEvent,
    GoalProjectListenerRegistration,
    LogSuppressor,
    PrepareForGoalExecution,
    SdmGoalEvent,
    SuccessIsReturn0ErrorFinder,
} from "@atomist/sdm";
import {
    ProjectVersioner,
    readSdmVersion,
} from "@atomist/sdm-core";
import { parseProperties } from "../../properties/propertiesParser";
import { GradleProgressReporter } from "../GradleProgressReporter";
import { GradleProjectIdentifier } from "../parse/buildGradleParser";
import { IsGradle } from "../pushtest/gradlePushTests";
import { gradleCommand } from "./gradleBuilder";

async function newVersion(sdmGoal: SdmGoalEvent, p: Project): Promise<string> {
    const pi = await GradleProjectIdentifier(p);
    const branch = sdmGoal.branch.split("/").join(".");
    return `${pi.version}-${branch}.${formatDate()}`;
}

/**
 * ProjectVersioner to be used with Gradle projects
 * @param sdmGoal
 * @param p
 * @param log
 * @constructor
 */
export const GradleProjectVersioner: ProjectVersioner = async (sdmGoal, p, log) => {
    const version = await newVersion(sdmGoal, p);
    await changeGradleVersion(version, p);
    return version;
};

/**
 * PrepareForGoalExecution for updating the Maven version in project
 * @param p
 * @param goalInvocation
 * @constructor
 */
export const GradleVersionPreparation: PrepareForGoalExecution = async (p: GitProject, goalInvocation: GoalInvocation) => {
    const version = await newVersion(goalInvocation.goalEvent, p);
    return changeGradleVersion(version, p);
};

async function tryChangingInGradlePropertiesFile(p: GitProject, version: string): Promise<void>  {
    if (p.hasFile("gradle.properties")) {
        const propertiesFile = await parseProperties(p, "gradle.properties");
        const versionProperty = propertiesFile.properties.find(prop => prop.key === "version");
        if (versionProperty) {
            versionProperty.value = version;
            await propertiesFile.flush();
        }
    }
}

async function tryChangingInBuildGradleFile(p: GitProject, version: string): Promise<void>  {
    const gradleBuildFile = await p.getFile("build.gradle");
    if (gradleBuildFile) {
        const gradleBuild = await (gradleBuildFile).getContent();
        const versionRegex = /^version[ ]?=[ ]?["'][0-9.\-_A-Za-z]*['"]$/;
        await gradleBuildFile.setContent(gradleBuild.replace(versionRegex, `version = '${version}'`));
    }
}

async function tryChangingInBuildGradleKtsFile(p: GitProject, version: string): Promise<void> {
    const gradleBuildFile = await p.getFile("build.gradle.kts");
    if (gradleBuildFile) {
        const gradleBuild = await (gradleBuildFile).getContent();
        const versionRegex = /^version[ ]?=[ ]?["'][0-9.\-_A-Za-z]*['"]$/;
        await gradleBuildFile.setContent(gradleBuild.replace(versionRegex, `version = '${version}'`));
    }
}

async function changeGradleVersion(version: string, p: GitProject): Promise<ExecuteGoalResult> {
    await tryChangingInGradlePropertiesFile(p, version);
    await tryChangingInBuildGradleFile(p, version);
    await tryChangingInBuildGradleKtsFile(p, version);
    return {
        code: 0,
    };
}

/**
 * PrepareForGoalExecution for running Gradle build
 * @param p
 * @param goalInvocation
 * @constructor
 */
export const GradleCompilePreparation: PrepareForGoalExecution = gradleBuildPreparation([{
    name: "skipTests",
    value: "true",
}]);

/**
 * Constructs a PrepareForGoalExecution taking additional command line args
 * @param args
 */
export function gradleBuildPreparation(args: Array<{ name: string, value: string }> = []): PrepareForGoalExecution {
    return async (p: GitProject, goalInvocation: GoalInvocation) => {
        return gradleCommand(p, {
            tasks: ["build"],
            progressLog: goalInvocation.progressLog,
            args,
            errorFinder: SuccessIsReturn0ErrorFinder});
    };
}

async function gradleVersionProjectListener(p: GitProject,
                                            gi: GoalInvocation,
                                            event: GoalProjectListenerEvent): Promise<void | ExecuteGoalResult> {
    const v = await readSdmVersion(
        gi.goalEvent.repo.owner,
        gi.goalEvent.repo.name,
        gi.goalEvent.repo.providerId,
        gi.goalEvent.sha,
        gi.goalEvent.branch,
        gi.context);
    return changeGradleVersion(v, p);
}

export const GradleVersion: GoalProjectListenerRegistration = {
    name: "gradle version",
    listener: gradleVersionProjectListener,
    pushTest: IsGradle,
    events: [GoalProjectListenerEvent.before],
};

function gradleBuildProjectListener(p: GitProject,
                                    gi: GoalInvocation): Promise<void | ExecuteGoalResult> {
    return gradleCommand(p, {
        progressLog: gi.progressLog,
        tasks: ["build"],
        args: [{name: "artifact.name", value: p.id.repo}],
        errorFinder: SuccessIsReturn0ErrorFinder,
    });
}

export const GradleBuild: GoalProjectListenerRegistration = {
    name: "gradle build",
    listener: gradleBuildProjectListener,
    pushTest: IsGradle,
    events: [GoalProjectListenerEvent.before],
};

export const GradleDefaultOptions = {
    pushTest: IsGradle,
    logInterpreter: LogSuppressor,
    progressReporter: GradleProgressReporter,
};
