import { gatherFromMatches } from "@atomist/automation-client";
import { DefaultExcludes } from "@atomist/automation-client/lib/project/fileGlobs";
import {
    GoalInvocation,
    GoalWithFulfillment,
    Implementation,
    IndependentOfEnvironment,
    LocalProject,
    LoggingProgressLog,
    Project,
    spawnAndWatch,
} from "@atomist/sdm";
import { XmldocFileParser } from "../../xml/XmldocFileParser";
import { determineMavenCommand } from "../mavenCommand";

export const MavenTestGoal: GoalWithFulfillment = new GoalWithFulfillment({
    name: "maven-test",
    uniqueName: "maven-test",
    environment: IndependentOfEnvironment,
    workingDescription: "Testing",
    successDescription: "Tests succeeded",
    completedDescription: "Tests succeeded",
    failedDescription: "Tests failed",
    failureDescription: "Tests failed",
}).with({
    name: "maven-test",
    goalExecutor: executeMavenTest,
} as Implementation);

function executeMavenTest(goalInvocation: GoalInvocation) {
    const {credentials, id} = goalInvocation;
    return goalInvocation.configuration.sdm.projectLoader.doWithProject(
        {id, credentials, readOnly: true},
        async (p: LocalProject) => {
        const mavenCommand = await determineMavenCommand(p);
        const result = await spawnAndWatch(
            {command: mavenCommand, args: ["test"]},
            {cwd: p.baseDir},
            new LoggingProgressLog("maven-test", "info"),
            {});
        const r = await getJUnitTestResults(p);
        const prefix = r.tests === 1 ? `1 test` : `${r.tests} tests`;
        if (result.code === 0) {
            return {
                code: 0,
                phase: r.tests > 0 ? prefix : undefined,
            };
        } else {
            const messages = [prefix];
            if (r.failures > 0) { messages.push(`${r.failures} failed`); }
            if (r.errors > 0) { messages.push(`${r.errors} with errors`); }
            return {
                code: 1,
                phase: messages.join(", "),
            };
        }
    });
}

async function getJUnitTestResults(p: Project):
    Promise<{tests: number, failures: number, errors: number}> {
    const oldExcludes = DefaultExcludes;
    DefaultExcludes.splice(0, DefaultExcludes.length);  // necessary evil
    const testFailures = await gatherFromMatches(p,
        new XmldocFileParser(),
        "target/surefire-reports/*.xml",
        "/testsuite",
        m => {
            return {
                tests: +(m as any).tests,
                failures: +(m as any).failures,
                errors: +(m as any).errors,
            };
        });
    DefaultExcludes.push(...oldExcludes);
    return testFailures
        .reduce((previousValue, currentValue) => {
            return {
                tests: previousValue.tests + currentValue.tests,
                failures: previousValue.failures + currentValue.failures,
                errors: previousValue.errors + currentValue.errors,
            };
        });
}
