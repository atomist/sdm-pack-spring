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
    projectUtils,
} from "@atomist/automation-client";
import {
    Literal,
    Microgrammar,
} from "@atomist/microgrammar";
import {
    ExecuteGoalResult,
    GoalInvocation,
    GoalProjectListenerEvent,
    GoalProjectListenerRegistration,
    LogSuppressor,
    NoProgressReport,
    PrepareForGoalExecution,
    SdmGoalEvent,
    SuccessIsReturn0ErrorFinder,
} from "@atomist/sdm";
import {
    ProjectVersioner,
    readSdmVersion,
} from "@atomist/sdm-core";
import * as df from "dateformat";
import * as _ from "lodash";
import { GradleProjectIdentifier } from "../parse/buildGradleParser";
import { IsGradle } from "../pushtest/gradlePushTests";
import { gradleCommand } from "./gradleBuilder";

async function newVersion(sdmGoal: SdmGoalEvent, p: Project): Promise<string> {
    const pi = await GradleProjectIdentifier(p);
    const branch = sdmGoal.branch.split("/").join(".");
    return `${pi.version}-${branch}.${df(new Date(), "yyyymmddHHMMss")}`;
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
    const version = await newVersion(goalInvocation.sdmGoal, p);
    return changeGradleVersion(version, p);
};

async function changeGradleVersion(version: string, p: GitProject): Promise<ExecuteGoalResult> {
    await projectUtils.doWithFiles(p, "gradle.properties", async file => {
        const content = await file.getContent();
        const versionUpdate = Microgrammar.updatable(gradlePropertiesVersionGrammar.findMatches(content), content);
        _.head(versionUpdate.matches).version = version;
        await file.setContent(versionUpdate.updated());
    });
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
    name: "gradle-version",
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
    name: "gradle-build",
    listener: gradleBuildProjectListener,
    pushTest: IsGradle,
    events: [GoalProjectListenerEvent.before],
};

export const GradleDefaultOptions = {
    pushTest: IsGradle,
    logInterpreter: LogSuppressor,
    progressReporter: NoProgressReport,
};

export const gradlePropertiesTaskNameGrammar = Microgrammar.fromString<{ name: string }>("name: ${name}", {
    name: Literal,
});

export const gradlePropertiesTaskVersionGrammar = Microgrammar.fromString<{ version: string }>("version: ${version}",  {
    version: Literal,
});

export const gradlePropertiesVersionGrammar = Microgrammar.fromString<{ version: string }>("version=${version}", {
    version: Literal,
});

export const gradlePropertiesTaskGroupGrammar = Microgrammar.fromString<{ group: string }>("group: ${group}", {
    group: Literal,
});
