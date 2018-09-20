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

import { CodeInspection } from "@atomist/sdm";

import * as _ from "lodash";
import { findDependenciesFromEffectivePom } from "../../maven/inspection/findDependencies";

/**
 * Find Spring Boot version or versions in this repo.
 * If it's not a Spring Boot project, there will be zero.
 * If it has a pom in the root directory, there will be one.
 * If it's a monorepo, there may be > 1. In this case,
 * only distinct versions will be reported.
 * @param {Project} p
 * @return {Promise<SpringBootVersion[]>}
 * @constructor
 */
export const SpringSecurityVersionInspection: CodeInspection<string[]> = async p => {
    const dependencies = await findDependenciesFromEffectivePom(p);
    const versions = dependencies
        .filter(value => value.group === "org.springframework.security")
        .map(value => value.version);
    return _.sortedUniq(versions);
};
