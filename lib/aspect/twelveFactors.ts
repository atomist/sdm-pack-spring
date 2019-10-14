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

import { projectClassificationAspect } from "@atomist/sdm-pack-aspect";
import { CountAspect } from "@atomist/sdm-pack-aspect/lib/aspect/compose/commonTypes";
import {
    Aspect,
    fingerprintOf,
    FP,
} from "@atomist/sdm-pack-fingerprint";
import {
    SpringBootAppClassAspectName,
    SpringBootAppData,
} from "./springBootApps";
import { isConsoleLoggingFingerprint } from "./consoleLogging";

export interface TwelveFactorElement {
    factor: string;
    fulfilled: boolean;
}

export const TwelveFactorCountAspect: CountAspect = {
    name: "twelve-factor-count",
    displayName: "12 factor count",
    extract: async () => [],
    consolidate: async fps => {
        return fingerprintOf({
            type: "twelve-factor-count",
            data: { count: fps.filter(isTwelveFactorFingerprint).filter(fp => fp.data.fulfilled).length },
        });
    },
};

export const TwelveFactorClassificationAspect = projectClassificationAspect({
    name: "twelve-factor-classification",
    displayName: "12 factor classification",
    toDisplayableFingerprintName: () => "12 Factor",
}, {
    tags: "twelve-factor:single-project-per-repo",
    reason: "Single project found in repository",
    testFingerprints: async fps => {
        const tffps = fps.filter(fp => isTwelveFactorFingerprint(fp) && fp.data.factor === SingleProjectPerRepoFactor);
        return tffps.length === 1 && tffps[0].data.fulfilled;
    },
}, {
    tags: "twelve-factor:console-logging",
    reason: "Uses console logging",
    testFingerprints: async fps => {
        const tffps = fps.filter(fp => isTwelveFactorFingerprint(fp) && fp.data.factor === ConsoleLoggingFactor);
        return tffps.length === 1 && tffps[0].data.fulfilled;
    },
});

export const TwelveFactorSpringBootFingerprintName = "twelve-factor-spring-boot";
export const SingleProjectPerRepoFactor = "single-project-per-repo";
export const SingleProjectPerRepoFactorAspect: Aspect<TwelveFactorElement> = {
    name: "twelve-factor-single-project-per-repo",
    displayName: "12-Factor: Single project per repo",
    extract: async () => [],
    consolidate: async fps => {
        const springBootAppClassFP = fps.filter(isSpringBootAppClassFingerprint);
        return fingerprintOf<TwelveFactorElement>({
            type: TwelveFactorSpringBootFingerprintName,
            data: {
                factor: SingleProjectPerRepoFactor,
                fulfilled: springBootAppClassFP.length === 1,
            },
        });
    },
};

export function isSpringBootAppClassFingerprint(o: FP): o is FP<SpringBootAppData> {
    return o.type === SpringBootAppClassAspectName;
}

export const TwelveFactorConsoleLoggingFingerprintName = "twelve-factor-spring-boot";

export const ConsoleLoggingFactor = "logging-to-console";

export const ConsoleLoggingFactorAspect: Aspect<TwelveFactorElement> = {
    name: "twelve-factor-logging-to-console",
    displayName: "12-Factor: Logging to console",
    extract: async () => [],
    consolidate: async fps => {
        const clfps = fps.filter(isConsoleLoggingFingerprint);
        return clfps.length === 0 ? [fingerprintOf({
                type: TwelveFactorConsoleLoggingFingerprintName,
                data: {
                    factor: ConsoleLoggingFactor,
                    fulfilled: false,
                },
            })] :
            clfps.map(clfp =>
                fingerprintOf<TwelveFactorElement>({
                    type: TwelveFactorConsoleLoggingFingerprintName,
                    data: {
                        factor: ConsoleLoggingFactor,
                        fulfilled: clfp.data.present,
                    },
                    path: clfp.path,
                }));
    },
};

export function isTwelveFactorFingerprint(o: FP): o is FP<TwelveFactorElement> {
    return (!!o.type && o.type === TwelveFactorSpringBootFingerprintName);
}

export const SpringBootTwelveFactors = [
    SingleProjectPerRepoFactorAspect,
    ConsoleLoggingFactorAspect,
    TwelveFactorCountAspect,
    TwelveFactorClassificationAspect,
];
