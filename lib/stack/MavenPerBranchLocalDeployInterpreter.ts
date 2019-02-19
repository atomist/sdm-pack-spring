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
    Goal,
    goals,
} from "@atomist/sdm";
import {
    Interpretation,
    Interpreter,
} from "@atomist/sdm-pack-analysis";
import { MavenPerBranchDeployment } from "../java/deploy/MavenPerBranchDeployment";
import { SpringBootStack } from "./springBootScanner";

/**
 * NB: Intended mainly for local testing.
 */
export class MavenPerBranchLocalDeployInterpreter implements Interpreter {

    private readonly deployGoal: Goal = new MavenPerBranchDeployment();

    public async enrich(interpretation: Interpretation): Promise<boolean> {
        const springBootStack = interpretation.reason.analysis.elements.springboot as SpringBootStack;
        if (!springBootStack) {
            return false;
        }

        interpretation.deployGoals = goals("deploy").plan(this.deployGoal);
        return true;
    }
}
