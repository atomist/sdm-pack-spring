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
    ChildProcessResult,
    RemoteRepoRef,
} from "@atomist/automation-client";
import { AppInfo } from "@atomist/sdm";
import { LocalBuildInProgress } from "@atomist/sdm-core";

export class UpdatingBuild implements LocalBuildInProgress {

    public ai: AppInfo;

    public deploymentUnitFile: string;

    constructor(public repoRef: RemoteRepoRef,
                public buildResult: ChildProcessResult,
                public team: string,
                public url: string) {
    }

    get appInfo(): AppInfo {
        return this.ai;
    }
}
