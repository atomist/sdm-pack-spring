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
    astUtils,
    editModes,
    logger,
} from "@atomist/automation-client";
import {
    CodeTransform,
    CodeTransformRegistration,
} from "@atomist/sdm";
import * as _ from "lodash";
import { indent } from "../../util/formatUtils";
import { XmldocFileParser } from "../../xml/XmldocFileParser";
import {
    findDeclaredManagedPlugins,
    findDeclaredPlugins,
} from "../parse/fromPom";
import {
    ManagedPlugin,
    Plugin,
} from "../Plugin";

/**
 * Add the given polugin to projects. It's not an error
 * if the project doesn't have a POM. The transform will do nothing
 * in this case.
 * @param {Plugin} plugin
 * @return {CodeTransform}
 */
export function addPluginTransform(plugin: Plugin): CodeTransform {
    return async p => {
        if (await p.hasFile("pom.xml")) {
            const plg = await findDeclaredPlugins(p);
            if (plg.plugins.length === 0) {
                throw new Error("No plugins in POM: Cannot add plugin");
            }
            if (plg.plugins.some(pl => plugin.artifact === pl.artifact && plugin.group === pl.group)) {
                logger.info("Plugin [%s] already present. Nothing to do", plugin.artifact);
            } else {
                logger.info("Adding plugin [%s]", plugin.artifact);
                // Add after last dependency
                const lastPlugin = _.last(plg.plugins);
                await astUtils.doWithAllMatches(p, new XmldocFileParser(), "pom.xml",
                    `//project/build/plugins/plugin[/artifactId[@innerValue='${lastPlugin.artifact}']]`,
                    m => {
                        const pluginContent = indent(pluginStanza(plugin), "   ", 4);
                        m.append("\n" + pluginContent);
                    });
            }
        }
    };
}

/**
 * Add the given plugin to project in plugin management. It's not an error
 * if the project doesn't have a POM. The transform will do nothing
 * in this case.
 * @param {Plugin} plugin
 * @return {CodeTransform}
 */
export function addManagedPluginTransform(plugin: ManagedPlugin): CodeTransform {
    return async p => {
        if (await p.hasFile("pom.xml")) {
            const plg = await findDeclaredManagedPlugins(p);
            if (plg.plugins.length === 0) {
                throw new Error("No plugin management in POM: Cannot add plugin");
            }
            if (plg.plugins.some(pl => plugin.artifact === pl.artifact && plugin.group === pl.group)) {
                logger.info("Plugin [%s] already present. Nothing to do", plugin.artifact);
            } else {
                logger.info("Adding plugin [%s]", plugin.artifact);
                // Add after last dependency
                const lastPlugin = _.last(plg.plugins);
                await astUtils.doWithAllMatches(p, new XmldocFileParser(), "pom.xml",
                    `//project/build/pluginmanagement/plugins/plugin[/artifactId[@innerValue='${lastPlugin.artifact}']]`,
                    m => {
                        const pluginContent = indent(managedPluginStanza(plugin), "   ", 5);
                        m.append("\n" + pluginContent);
                    });
            }
        }
    };
}

/**
 * Command to add a Maven plugin to the project
 */
export const AddMavenPlugin: CodeTransformRegistration<{ artifact: string, group: string, version?: string }> = {
    name: "add-maven-plugin",
    intent: ["add maven plugin"],
    description: "Add a Maven plugin to the project",
    parameters: {
        artifact: { description: "Plugin artifact id to add" },
        group: { description: "Group of the artifact" },
        version: { description: "Plugin version" },
    },
    transform: [
        async (p, ci) =>
            addPluginTransform(
                { ...ci.parameters })(p, ci),
    ],
    transformPresentation: ci => new editModes.PullRequest(
        `add-dependency-${ci.parameters.artifact}`,
        `Add dependency ${ci.parameters.artifact}`,
    ),
};

/**
 * Command to add a Maven plugin to the project
 */
export const AddManagedMavenPlugin: CodeTransformRegistration<{ artifact: string, group: string, version: string }> = {
    name: "add-maven-plugin",
    intent: ["add managed maven plugin"],
    description: "Add a Maven plugin to the project",
    parameters: {
        artifact: { description: "Plugin artifact id to add" },
        group: { description: "Group of the artifact" },
        version: { description: "Plugin version" },
    },
    transform: [
        async (p, ci) =>
            addManagedPluginTransform(
                { ...ci.parameters })(p, ci),
    ],
    transformPresentation: ci => new editModes.PullRequest(
        `add-dependency-${ci.parameters.artifact}`,
        `Add dependency ${ci.parameters.artifact}`,
    ),
};

// TODO: add executions support
function pluginStanza(plugin: Plugin) {
    return `<plugin>
    <groupId>${plugin.group}</groupId>
    <artifactId>${plugin.artifact}</artifactId>` +
        versionTag(plugin) +
        configurationTag(plugin) +
        extensionsTag(plugin) +
        inheritedTag(plugin) +
    `</plugin>`;
}

function managedPluginStanza(plugin: ManagedPlugin) {
    return `<plugin>
    <groupId>${plugin.group}</groupId>
    <artifactId>${plugin.artifact}</artifactId>` +
        versionTag(plugin) +
        configurationTag(plugin) +
        `</plugin>`;
}

function versionTag(plugin: {version?: string}) {
    return `${!!plugin.version ? `\n    <version>${plugin.version}</version>` : ""}`;
}

function inheritedTag(plugin: {inherited?: boolean}) {
    return `${!!plugin.inherited ? `\n    <inherited>${plugin.inherited}</inherited>` : ""}`;
}

function extensionsTag(plugin: {extensions?: boolean}) {
    return `${!!plugin.extensions ? `\n    <extensions>${plugin.extensions}</extensions>` : ""}`;
}

function configurationTag(plugin: {configuration?: any}) {
    return `${!!plugin.configuration ? `\n    <configuration>
${_.join(getAsTagLines(plugin.configuration, 2), "\n")}
    </configuration>` : ""}`;
}

function getAsTagLines(configuration: any, indentLevel: number): string[] {
    const configValues: string[] = [];
    const propertyNames = Object.getOwnPropertyNames(configuration);
    for (const propertyName of propertyNames) {
        const configValue = configuration[propertyName];
        if (typeof configValue === "string") {
            configValues.push(`${_.padStart("", 4 * indentLevel, " ")}<${propertyName}>${configValue}</${propertyName}>`);
        } else {
            configValues.push(`${_.padStart("", 4 * indentLevel, " ")}<${propertyName}>`);
            configValues.push(...getAsTagLines(configValue, indentLevel + 1));
            configValues.push(`${_.padStart("", 4 * indentLevel, " ")}</${propertyName}>`);
        }
    }
    return configValues;
}
