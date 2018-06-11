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

import { ExtensionPack } from "@atomist/sdm";
import {
    SonarCubeOptions,
    sonarQubeReviewer,
} from "./support/sonarQubeReviewer";

// tslint:disable-next-line:no-var-requires
const pj = require("./package.json");

export const SonarQubeSupport: ExtensionPack = {
    name: pj.name,
    vendor: pj.author.name,
    version: pj.version,
    configure: sdm => {
        const options = sdm.configuration.sdm.sonar as SonarCubeOptions;
        if (!!options && options.enabled === true) {
            sdm.addReviewerRegistrations(sonarQubeReviewer(options));
        }
    },
};
