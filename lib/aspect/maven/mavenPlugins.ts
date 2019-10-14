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

import { gatherFromFiles } from "@atomist/automation-client/lib/project/util/projectUtils";
import { dirName } from "@atomist/sdm-pack-aspect";
import {
    Aspect,
    fingerprintOf,
    FP,
} from "@atomist/sdm-pack-fingerprint";
import {
    findDeclaredManagedPlugins,
    findDeclaredPlugins,
} from "../../maven/parse/fromPom";
import {
    Plugin,
} from "../../maven/Plugin";
import { VersionedArtifact } from "../../maven/VersionedArtifact";

const MavenPlugin = "maven-plugin";

export function isMavenPluginFingerprint(fp: FP): fp is FP<Plugin> {
    return fp.type === MavenPlugin && !!fp.data.artifact;
}

/**
 * Emits build plugins
 */
export const MavenBuildPlugins: Aspect<Plugin> = {
    name: MavenPlugin,
    displayName: "Maven plugins",
    extract: async p => {
        const paths = await gatherFromFiles(p, "**/pom.xml", async f => f.path);
        const toEmit: Array<FP<Plugin>> = [];
        for (const path of paths) {
            const plugins = (
                await findDeclaredPlugins(p, path)).concat(
                await findDeclaredManagedPlugins(p, path),
            );
            toEmit.push(...plugins.map(plugin => pluginToFingerprint(plugin, path)));
        }
        return toEmit;
    },
    toDisplayableFingerprintName: name => name,
    toDisplayableFingerprint: fp => fp.data.artifact,
};

function pluginToFingerprint(plugin: Plugin, pomPath: string): FP<VersionedArtifact> {
    const data = {
        ...plugin,
        version: !plugin.version ? "managed" : plugin.version,
    };
    const path = dirName(pomPath);
    return fingerprintOf({
        type: MavenPlugin,
        name: `${plugin.group}:${plugin.artifact}`,
        data,
        path,
    });
}
