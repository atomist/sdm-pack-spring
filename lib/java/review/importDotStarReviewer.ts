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
    patternMatchReviewer,
    ReviewerRegistration,
} from "@atomist/sdm";
import { CloudNative } from "../../common/review/reviewCategories";
import { JavaAndKotlinSource } from "../javaProjectUtils";

export const ImportDotStar = "Lazy import";

/**
 * Flag lazy imports such as "import * from java.io"
 * @type {ReviewerRegistration}
 */
export const ImportDotStarReviewer: ReviewerRegistration = patternMatchReviewer(
    ImportDotStar,
    {
        globPattern: JavaAndKotlinSource,
        severity: "info",
        category: CloudNative,
        subcategory: ImportDotStar,
    },
    {
        name: ImportDotStar,
        antiPattern: /import .*\.\*/,
        comment: "Don't import .*. Import types individually",
    },
);
