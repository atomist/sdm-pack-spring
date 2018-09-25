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
import {
    CodeTransform,
    ParametersObject,
} from "@atomist/sdm";
import {
    classNameFromFqn,
    movePackage,
    packageNameFromFqn,
    renameClass,
} from "../java/javaProjectUtils";

import * as toml from "toml";

export interface RiffProjectCreationParameters {
    fqn: string;
}

/**
 * Rename the Riff handler class
 * @param {Project} p
 * @return {Promise<void>}
 */
export const RiffProjectCreationTransform: CodeTransform<RiffProjectCreationParameters> = async (p, ci) => {
    const riffToml = await p.getFile("riff.toml");
    if (!riffToml) {
        logger.warn("No riff.toml found");
        return;
    }
    const tomlContent = await riffToml.getContent();
    const parsed = toml.parse(tomlContent);
    if (!parsed.handler) {
        logger.warn("No handler found in riff.toml");
        return;
    }

    const oldPackage = packageNameFromFqn(parsed.handler);
    const newPackage = packageNameFromFqn(ci.parameters.fqn);
    const oldClass = classNameFromFqn(parsed.handler);
    const newClass = classNameFromFqn(ci.parameters.fqn);

    await ci.addressChannels(`Renaming handler class \`${parsed.handler}\` to \`${ci.parameters.fqn}\``);

    await renameClass(p, oldClass, newClass);
    await movePackage(p, oldPackage, newPackage);
    await riffToml.replaceAll(parsed.handler, ci.parameters.fqn);
};

export const RiffProjectCreationParameterDefinitions: ParametersObject = {
    fqn: { description: "Fully qualified name of the function class" },
};
