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

import { gatherFromMatches } from "@atomist/automation-client";
import { DefaultExcludes } from "@atomist/automation-client/lib/project/fileGlobs";
import {
    GoalDefinition,
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

/**
 * Goal to execute Maven tests. Shows failures or errors if there are any.
 * @type {GoalWithFulfillment}
 */
export const MavenTest: GoalWithFulfillment = new GoalWithFulfillment({
    name: "maven-test",
    uniqueName: "maven-test",
    environment: IndependentOfEnvironment,
    workingDescription: "Testing",
    completedDescription: "Tests succeeded",
    failedDescription: "Tests failed",
} as GoalDefinition).with({
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
