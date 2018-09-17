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
    CodeTransform,
    CodeTransformRegistration,
} from "@atomist/sdm";
import { bringInFile } from "../../../java/transform/bringInFile";
import { addSpringBootStarterTransform } from "../addSpringBootStarterTransform";

const AddSpringSecurityStarter = addSpringBootStarterTransform("spring-boot-starter-security");

const baseUrl = "https://raw.githubusercontent.com/spring-guides/gs-securing-web/blob/master/complete";
const AddWebSecurityConfigClass = bringInFile(`${baseUrl}/src/main/java/hello/WebSecurityConfig.java`);
const AddWebMvcConfigClass = bringInFile(`${baseUrl}/src/main/java/hello/MvcConfig.java`);

const AddWebAppSample: CodeTransform = async (p, inv) => {
    await bringInFile(`${baseUrl}/src/main/resources/templates/home.html`, `src/main/resources/templates`)(p, inv);
    await bringInFile(`${baseUrl}/src/main/resources/templates/hello.html`, `src/main/resources/templates`)(p, inv);
    await bringInFile(`${baseUrl}/src/main/resources/templates/login.html`, `src/main/resources/templates`)(p, inv);
    return Promise.resolve(p);
};

const AddThymeleafStarter: CodeTransform = addSpringBootStarterTransform("spring-boot-starter-thymeleaf");
const AddSpringWebStarter: CodeTransform = addSpringBootStarterTransform("spring-boot-starter-web");

export const ApplySecuredWebAppGuide: CodeTransformRegistration = {
    name: "ApplySecuredWebAppGuide",
    intent: "apply secured web app guide",
    description: "Apply the Spring Boot guide to secure web apps",
    transform: [
        AddSpringSecurityStarter,
        AddWebSecurityConfigClass,
        AddThymeleafStarter,
        AddSpringWebStarter,
        AddWebMvcConfigClass,
        AddWebAppSample,
    ],
};
