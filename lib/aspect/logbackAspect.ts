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

import {
    logger,
    ProjectFile,
} from "@atomist/automation-client";
import {
    globAspect,
    GlobAspectData,
} from "@atomist/sdm-pack-aspect";
import {
    Aspect,
    FP,
} from "@atomist/sdm-pack-fingerprint";
import {
    evaluateExpression,
    isSuccessResult,
} from "@atomist/tree-path";
import { XmldocFileParser } from "../xml/XmldocFileParser";

export interface LogbackConfigFile {
    content: string;

    appenders: Array<{
        name: string,
        appenderClass: string,
    }>;
    loggers: Array<{
        name: string,
        appenderNames: string[];
    }>;
}

export const LogbackType = "logback";

export function isLogbackFingerprint(fp: FP): fp is FP<GlobAspectData<LogbackConfigFile>> {
    return fp.type === LogbackType;
}

export const LogbackAspect: Aspect<GlobAspectData<LogbackConfigFile>> = globAspect<LogbackConfigFile>({
    name: LogbackType,
    displayName: "Logback",
    glob: "**/logback-spring.xml",
    extract: parseLogbackXml,
});

async function parseLogbackXml(f: ProjectFile): Promise<LogbackConfigFile> {
    const parsed = await new XmldocFileParser().toAst(f);
    const appenderEval = evaluateExpression(parsed, "//configuration/appender");
    if (!isSuccessResult(appenderEval)) {
        logger.warn("Unable to parse XML file at %s", f.path);
        return undefined;
    }
    const appenders = appenderEval.map(app => ({
        name: (app as any).name,
        appenderClass: (app as any).class,
    }));
    const loggerEval = evaluateExpression(parsed, "//configuration/root | //configuration/logger");
    if (!isSuccessResult(loggerEval)) {
        logger.warn("Unable to parse XML file at %s", f.path);
        return undefined;
    }
    const loggers = loggerEval.map(app => ({
        name: (app as any).name || "root",
        appenderNames: app.$children.filter(c => c.$name === "appender-ref").map(c => (c as any).ref),
    }));
    return {
        content: await f.getContent(),
        appenders,
        loggers,
    };
}
