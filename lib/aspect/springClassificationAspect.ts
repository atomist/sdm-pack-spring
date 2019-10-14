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
    DerivedClassifier,
    projectClassificationAspect,
} from "@atomist/sdm-pack-aspect";
import { Aspect } from "@atomist/sdm-pack-fingerprint";
import { isDefaultBannerFingerprint } from "./defaultBannerTxtAspect";
import { isReactiveWebUsageFingerprint } from "./reactiveWebUsageAspect";
import { isSpringBootStarterFingerprint } from "./springBootStarter";
import { isXmlBeanDefinitionsFingerprint } from "./xmlBeans";

/**
 * Classification for Spring projects
 */
export const SpringClassificationAspect: Aspect = projectClassificationAspect(
    {
        name: "spring-boot-classification",
        // Deliberately don't display
        displayName: undefined,
        toDisplayableFingerprintName: () => "Spring classification",
    },
    springStarterClassifier({
        tags: "spring-security",
        reason: "has spring security",
        starter: "spring-boot-starter-security",
    }),
    springStarterClassifier({
        tags: "actuator",
        reason: "has spring boot actuator",
        starter: "spring-boot-starter-actuator",
    }),
    springStarterClassifier({
        tags: "jpa",
        reason: "has spring jpa",
        starter: "spring-boot-starter-data-jpa",
    }),
    springStarterClassifier({
        tags: "mongo",
        reason: "has spring mongodb",
        starter: "spring-boot-starter-data-mongodb",
    }),
    springStarterClassifier({
        tags: "spring-data-rest",
        reason: "has spring mongodb",
        starter: "spring-boot-starter-data-rest",
    }),
    {
        tags: "spring-xml",
        reason: "uses spring XML",
        testFingerprints: async fps => fps.some(fp => isXmlBeanDefinitionsFingerprint(fp) && fp.data.matches.length > 0),
    },
    {
        tags: "reactive-web",
        reason: "uses reactive web",
        testFingerprints: async fps => fps.some(fp => isReactiveWebUsageFingerprint(fp) && fp.data.matches.length > 0),
    },
    {
        tags: "custom-banner",
        reason: "uses custom banner",
        testFingerprints: async fps => fps.some(fp => isDefaultBannerFingerprint(fp) && fp.data.matches.length > 0),
    },
);

export function springStarterClassifier(opts: { tags: string, reason: string, starter: string }): DerivedClassifier {
    return {
        ...opts,
        testFingerprints: async fps => fps.some(fp => isSpringBootStarterFingerprint(fp) && fp.data.artifact.includes(opts.starter)),
    };
}
