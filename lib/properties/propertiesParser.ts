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

import { Project } from "@atomist/automation-client";
import {
    Microgrammar,
    Updatable,
} from "@atomist/microgrammar";
import { CodeTransform } from "@atomist/sdm";

/**
 * File of updated properties. Change keys or values and call flush() to write out any changes.
 */
export interface PropertiesFile {

    path: string;

    /**
     * Updatable properties
     */
    properties: Property[];

    /**
     * Add a property to the end of the file
     * @param {Property} prop
     */
    addProperty(prop: Property): Promise<void>;

    /**
     * Flush changes
     * @return {Promise<void>}
     */
    flush(): Promise<void>;
}

/**
 * Properties are updatable
 */
export interface Property {
    key: string;
    value: string;
    comment?: string;
}

/**
 * Parse the given file within the project, returning updatable properties
 * @param {Project} p
 * @param {string} path
 * @return {Promise<PropertiesFile>}
 */
export async function parseProperties(p: Project, path: string): Promise<PropertiesFile> {
    const f = await p.getFile(path);
    if (!!f) {
        const content = await f.getContent();
        const updatable = Microgrammar.updatable<Property>(propertiesGrammar.findMatches(content), content);
        return new PropertiesFileImpl(path, updatable, p);
    } else {
        return new PropertiesFileImpl(path, undefined, p);
    }
}

/**
 * Code transform to add the property to the given file,
 * creating it if it doesn't exist. Updates any existing property.
 * @param {Property} prop
 * @param {string} path
 * @return {CodeTransform}
 */
export function addProperty(prop: Property, path: string): CodeTransform {
    return async p => {
        const propsFile = await parseProperties(p, path);
        return propsFile.addProperty(prop);
    };
}

class PropertiesFileImpl implements PropertiesFile {

    get properties() {
        return !!this.updatable ? this.updatable.matches : [];
    }

    public async addProperty(prop: Property) {
        const existing = this.properties.find(p => p.key === prop.key);
        if (!!existing) {
            existing.value = prop.value;
            return this.flush();
        }
        const comment = !!prop.comment ? `# ${prop.comment}\n` : "";
        const formattedProperty = `\n\n${comment}${prop.key}=${prop.value}\n`;
        const f = await this.project.getFile(this.path);
        if (!!f) {
            const oldContent = await f.getContent();
            await f.setContent(oldContent + formattedProperty);
        } else {
            await this.project.addFile(this.path, formattedProperty);
        }
    }

    public async flush() {
        if (!!this.updatable) {
            const f = await this.project.getFile(this.path);
            await f.setContent(this.updatable.updated());
        }
    }

    constructor(public readonly path: string,
                private readonly updatable: Updatable<Property> | undefined,
                private readonly project: Project) {
    }
}

const PropertyKey = /[^[=\s]+/;

const propertiesGrammar = Microgrammar.fromString<Property>(
    "${key}=${value}",
    {
        key: PropertyKey,
        value: /.*/,
    });
