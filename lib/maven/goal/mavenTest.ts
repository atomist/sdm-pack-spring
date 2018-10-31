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
    astUtils,
    LocalProject,
    Project,
} from "@atomist/automation-client";
import { DefaultExcludes } from "@atomist/automation-client/lib/project/fileGlobs";
import {
    GoalDefinition,
    GoalInvocation,
    GoalWithFulfillment,
    Implementation,
    IndependentOfEnvironment,
    LoggingProgressLog,
    spawnAndWatch,
} from "@atomist/sdm";
import { XmldocFileParser } from "../../xml/XmldocFileParser";
import { determineMavenCommand } from "../mavenCommand";

export interface TestExecutionHandler {
    testsExecuted(p: Project): void | Promise<void>;
}

export interface MavenTestResult {
    testsRun: number;
    testsInError?: number;
    testsFailed?: number;
}

/**
 * Goal to execute Maven tests. Shows failures or errors if there are any.
 * @type {GoalWithFulfillment}
 */
export class MavenTest extends GoalWithFulfillment {
    private readonly testExecutionHandlers: TestExecutionHandler[] = [];
    constructor() {
        super({
            uniqueName: "maven-test",
            environment: IndependentOfEnvironment,
            workingDescription: "Testing",
            completedDescription: "Tests succeeded",
            failedDescription: "Tests failed",
        } as GoalDefinition);
        this.with({
            name: "maven-test",
            goalExecutor: gi => executeMavenTest(gi, this.testExecutionHandlers),
        } as Implementation);
    }

    public withExecutionHandler(listener: TestExecutionHandler) {
        this.testExecutionHandlers.push(listener);
    }
}

function executeMavenTest(goalInvocation: GoalInvocation, listeners: TestExecutionHandler[]) {
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
        listeners.forEach(async value => value.testsExecuted(p));
        return {
            code: result.code,
        };
    });
}

export type MavenTestResultListener = (result: MavenTestResult) => void;

export class JUnitTestExecutionHandler implements TestExecutionHandler {
    private readonly listener: MavenTestResultListener;
    constructor(listener: MavenTestResultListener) {
        this.listener = listener;
    }

    public async testsExecuted(p: Project): Promise<void> {
        const r = await getJUnitTestResults(p);
        const testResult: MavenTestResult = {
            testsRun: r.tests,
            testsFailed: r.failures,
            testsInError: r.errors,
        };
        if (this.listener !== undefined) {
            this.listener(testResult);
        }
    }
}

async function getJUnitTestResults(p: Project):
    Promise<{tests: number, failures: number, errors: number}> {
    const oldExcludes = DefaultExcludes;
    DefaultExcludes.splice(0, DefaultExcludes.length);  // necessary evil
    const testFailures = await astUtils.gatherFromMatches(p,
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
