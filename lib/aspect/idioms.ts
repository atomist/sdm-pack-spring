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
    pathBefore,
    reviewerAspects,
} from "@atomist/sdm-pack-aspect";
import {
    ImportDotStar,
    ImportDotStarReviewer,
} from "../java/review/importDotStarReviewer";
import {
    ImportIoFile,
    ImportIoFileReviewer,
} from "../java/review/importIoFileReviewer";
import { NonSpecificMvcAnnotationsReviewer } from "../spring/review/findNonSpecificMvcAnnotations";
import { HardcodedPropertyReviewer } from "../spring/review/hardcodedPropertyReviewer";
import { MutableInjectionsReviewer } from "../spring/review/mutableInjectionsReviewer";

function mavenSourceResolver(path: string): string {
    return pathBefore(path, "/src/main/java");
}

export const FileIOUsageName = "file-io";

export const FileIoUsage = reviewerAspects({
    name: FileIOUsageName,
    displayName: ImportIoFile,
    reviewer: ImportIoFileReviewer,
    virtualProjectPathResolver: mavenSourceResolver,
});

export const DotStarUsageName = "import-dot-star";

export const DotStarUsage = reviewerAspects({
    name: DotStarUsageName,
    displayName: ImportDotStar,
    reviewer: ImportDotStarReviewer,
    virtualProjectPathResolver: mavenSourceResolver,
});

export const MutableInjectionUsageName = "mutable-injection";

export const MutableInjections = reviewerAspects({
    name: MutableInjectionUsageName,
    displayName: "mutable injection",
    reviewer: MutableInjectionsReviewer,
    virtualProjectPathResolver: mavenSourceResolver,
});

export const HardCodedPropertyName = "hard-coded-property";

export const HardCodedProperty = reviewerAspects({
    name: HardCodedPropertyName,
    displayName: "hard code property",
    reviewer: HardcodedPropertyReviewer,
    virtualProjectPathResolver: path => pathBefore(path, "/src/main/resources"),
});

export const NonSpecificMvcAnnotationName = "non-specific-mvc";

export const NonSpecificMvcAnnotation = reviewerAspects({
    name: NonSpecificMvcAnnotationName,
    displayName: "non specific MVC annotations",
    reviewer: NonSpecificMvcAnnotationsReviewer,
    virtualProjectPathResolver: mavenSourceResolver,
});
