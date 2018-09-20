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
    AutofixRegistration,
    CodeTransform,
    CodeTransformRegistration,
    PullRequest,
} from "@atomist/sdm";
import { parseProperties } from "../../properties/propertiesParser";
import { IsSpringBoot2Project } from "../pushTests";
import { addSpringBootStarterTransform } from "./addSpringBootStarterTransform";

export const AddSpringBootActuatorStarter = addSpringBootStarterTransform("spring-boot-starter-actuator");

export function addActuatorWebConfiguration(enabledEndpoints: string[] = ["health", "info"]): CodeTransform {
    return async p => {
        const properties = await parseProperties(p, "src/main/resources/application.properties");
        await properties.addProperty({
            key: "management.endpoints.web.exposure.include",
            value: enabledEndpoints.join(","),
            comment: "Configure Spring Boot Actuator",
        });
    };
}

export function addSpringBootActuator(enabledEndpoints: string[] = ["health", "info"]): CodeTransformRegistration {
    return {
        name: "add-spring-boot-actuator",
        intent: ["add spring boot actuator", "add actuator"],
        description: "Add Spring Boot actuator to the project",
        transform: [
            AddSpringBootActuatorStarter,
            addActuatorWebConfiguration(enabledEndpoints),
        ],
        transformPresentation: () => new PullRequest(
            "add-spring-boot-actuator",
            "Apply spring boot actuator",
        ),
    };
}

export function springBootActuatorAutofix(enabledEndpoints: string[] = ["health", "info"]): AutofixRegistration {
    return {
        name: "spring-boot-actuator",
        transform: [
            AddSpringBootActuatorStarter,
            addActuatorWebConfiguration(enabledEndpoints),
        ],
        pushTest: IsSpringBoot2Project,
    };
}
