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

import { logger } from "@atomist/automation-client/internal/util/logger";
import { Project } from "@atomist/automation-client/project/Project";
import { doWithFiles } from "@atomist/automation-client/project/util/projectUtils";
import { indent } from "../../util/formatUtils";

// TODO this is naive as it doesn't allow for dependency management block
export function addSpringBootStarter(artifact: string,
                                     group: string = "org.springframework.boot"): (p: Project) => Promise<Project> {
    return (p: Project) => {
        return doWithFiles(p, "pom.xml", pom => {
            return pom.getContent()
                .then(content => {
                    // Don't add if it's already there
                    if (content.includes(artifact)) {
                        logger.info("Starter [%s] already present. Nothing to do", artifact);
                        return pom;
                    } else {
                        logger.info("Adding starter [%s]", artifact);
                        return pom.replace(/<dependencies>/, "<dependencies>\n" +
                            indent(dependencyStanza(artifact, group), "   ", 3),
                        );
                    }
                });
        });
    };
}

function dependencyStanza(artifact: string, group: string = "org.springframework.boot") {
    return `<dependency>
    <groupId>${group}</groupId>
    <artifactId>${artifact}</artifactId>
</dependency>`;
}
