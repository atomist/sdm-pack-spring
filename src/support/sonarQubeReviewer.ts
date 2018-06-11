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

import { logger } from "@atomist/automation-client";
import { ReviewerRegistration, ToDefaultBranch } from "@atomist/sdm";
import { StringCapturingProgressLog } from "@atomist/sdm/api-helper/log/StringCapturingProgressLog";
import { asSpawnCommand, spawnAndWatch } from "@atomist/sdm/util/misc/spawned";

export interface SonarCubeOptions {
    enabled: boolean;
    url: string;
    org: string;
    token: string;
}

export function sonarQubeReviewer(options: SonarCubeOptions): ReviewerRegistration {
    return {
        name: "SonarQube review",
        pushTest: ToDefaultBranch,
        action: async pli => {
            const command = `mvn clean org.jacoco:jacoco-maven-plugin:prepare-agent package sonar:sonar \
    -Dsonar.host.url=${options.url} \
    -Dsonar.organization=${options.org} \
    -Dsonar.login=${options.token}`;
            const log = new StringCapturingProgressLog();
            await spawnAndWatch(
                asSpawnCommand(command),
                {
                    cwd: pli.project.baseDir,
                },
                log,
            );
            await pli.addressChannels(`Code review success`);
            logger.info(log.log);
            const parsed = Pattern.exec(log.log);
            await pli.addressChannels(`Analysis at ${parsed[ 0 ]}`);

            return {
                repoId: pli.id,
                comments: [],
            };
        },
    };
}

// ANALYSIS SUCCESSFUL, you can browse https://sonarcloud.io/dashboard/index/com.atomist.springteam:spring-rest-seed
const Pattern = /ANALYSIS SUCCESSFUL, you can browse ([^\s^[]*)/;
