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

export const MavenIncrementPatchCommand = asSpawnCommand("./mvnw build-helper:parse-version versions:set -DnewVersion=" +
    "\${parsedVersion.majorVersion}.\${parsedVersion.minorVersion}.\${parsedVersion.nextIncrementalVersion}" +
    "-\${parsedVersion.qualifier} versions:commit");

/**
 * PrepareForGoalExecution for running Maven package
 * @param p
 * @param goalInvocation
 * @constructor
 */
export const MavenCompilePreparation: PrepareForGoalExecution = async (p: GitProject, goalInvocation: GoalInvocation) => {
    return mavenPackage(p, goalInvocation.progressLog, true);
};
