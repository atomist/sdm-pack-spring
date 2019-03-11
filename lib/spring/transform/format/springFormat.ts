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

import { AutofixRegistration, SoftwareDeliveryMachineConfiguration, spawnCodeTransform } from "@atomist/sdm";
import * as _ from "lodash";
import { IsJava } from "../../../java/pushtest/pushTests";

/**
 * Autofix to invoke the Spring team's spring-format via the
 * Atomist executable JAR wrapper (https://github.com/atomist/spring-format).
 * The JAR wrapper must be available at the path under
 * sdm.spring.formatJar or the FORMAT_JAR environment variable on the system on which the
 * current SDM is running.
 */
export function springFormat(configuration: SoftwareDeliveryMachineConfiguration): AutofixRegistration {
    const formatJarPath = _.get(configuration, "sdm.spring.formatJar") || process.env.FORMAT_JAR;
    if (!formatJarPath) {
        throw new Error("'sdm.spring.formatJar' configuration property or FORMAT_JAR environment variable must be set to use spring-format");
    }
    return {
        name: "Spring format",
        pushTest: IsJava,
        transform: spawnCodeTransform([{
            // Format will run on current directory, which will be project root
            command: "java",
            args: ["-jar", formatJarPath],
        },
        ]),
    };
}
