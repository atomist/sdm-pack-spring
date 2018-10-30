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

import { asSpawnCommand } from "@atomist/automation-client";
import {
    AutofixRegistration,
    localCommandsCodeTransform,
    SoftwareDeliveryMachineConfiguration,
} from "@atomist/sdm";
import * as _ from "lodash";
import { IsJava } from "../../../java/pushtest/pushTests";

// const FORMAT_JAR = "target/spring-format-0.1.0-SNAPSHOT-jar-with-dependencies.jar";

/**
 * Invoke spring-format. It must be available as a main class at the given path
 */
export function springFormat(configuration: SoftwareDeliveryMachineConfiguration): AutofixRegistration {
    const formatJarPath = _.get(configuration, "sdm.spring.formatJar") || process.env.FORMAT_JAR;
    return {
        name: "Spring format",
        pushTest: IsJava,
        transform: localCommandsCodeTransform([
            asSpawnCommand(`java -jar ${formatJarPath}`),
        ]),
    };
}
