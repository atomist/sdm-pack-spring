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

import { InMemoryProject } from "@atomist/automation-client";
import * as assert from "power-assert";
import { JavaProjectStructure } from "../../lib/java/JavaProjectStructure";

describe("JavaProjectStructure", () => {

    it("infer not a Java project", done => {
        const p = InMemoryProject.of();
        JavaProjectStructure.infer(p).then(structure => {
            assert(!structure);
            done();
        }).catch(done);
    });

    it("should not be fooled by foo.java.txt", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/com/smashing/pumpkins/Gish.java.txt",
                content: javaSource,
            },
        );
        JavaProjectStructure.infer(p).then(structure => {
            assert(!structure);
            done();
        }).catch(done);
    });

    it("infer application package when uniquely present", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/java/com/smashing/pumpkins/Gish.java",
                content: javaSource,
            },
        );
        JavaProjectStructure.infer(p).then(structure => {
            assert(structure.applicationPackage === "com.smashing.pumpkins");
            done();
        }).catch(done);
    });

    it("infer application package when uniquely present, avoiding comments", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/java/com/smashing/pumpkins/Gish.java",
                content: javaSource,
            }, {
                path: "src/main/java/com/smashing/pumpkins/package-info.java",
                content: `/**
 * The classes in this package represent utilities used by the domain.
 */
package com.smashing.pumpkins;`,
            },
        );
        JavaProjectStructure.infer(p).then(structure => {
            assert(structure.applicationPackage === "com.smashing.pumpkins");
            done();
        }).catch(done);
    });

    it("infer application package (Kotlin) when uniquely present", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/kotlin/com/smashing/pumpkins/Gish.kt",
                content: kotlinSource,
            },
        );
        JavaProjectStructure.infer(p).then(structure => {
            assert(structure.applicationPackage === "com.smashing.pumpkins");
            done();
        }).catch(done);
    });

    it("infer application package (Kotlin shortcut style) when uniquely present", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/kotlin/Gish.kt",
                content: kotlinSource,
            },
        );
        JavaProjectStructure.infer(p).then(structure => {
            assert(structure.applicationPackage === "com.smashing.pumpkins");
            done();
        }).catch(done);
    });

    it("not infer application package when confusing parallels present", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/java/com/smashing/pumpkins/Gish.java",
                content: javaSource,
            },
            {
                path: "src/main/java/org/thing/Thing.java",
                content: "package org.thing; public class Thing {}",
            },
        );
        JavaProjectStructure.infer(p).then(structure => {
            assert(!structure);
            done();
        }).catch(done);
    });

    it("infers shortest application package when valid parallels present", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/java/com/bands/smashing/pumpkins/Gish.java",
                content: "package com.bands.smashing.pumpkins; public class Gish {}",
            },
            {
                path: "src/main/java/com/bands/nirvana/Thing.java",
                content: "package com.bands.nirvana; public class Thing {}",
            },
        );
        JavaProjectStructure.infer(p).then(structure => {
            assert(!!structure);
            assert(structure.applicationPackage === "com.bands", structure.applicationPackage);
            done();
        }).catch(done);
    });

    it("infers shortest application package (Kotlin) when valid parallels present", done => {
        const p = InMemoryProject.of(
            {
                path: "src/main/kotlin/com/bands/smashing/pumpkins/Gish.kt",
                content: "package com.bands.smashing.pumpkins; public class Gish {}",
            },
            {
                path: "src/main/kotlin/com/bands/nirvana/Thing.kt",
                content: "package com.bands.nirvana; public class Thing {}",
            },
        );
        JavaProjectStructure.infer(p).then(structure => {
            assert(!!structure);
            assert(structure.applicationPackage === "com.bands", structure.applicationPackage);
            done();
        }).catch(done);
    });

});

const javaSource =
    `package com.smashing.pumpkins;

public class Gish {

    public static void main(String[] args) {
        System.out.print("2. Siva");
    }
}
`;

const kotlinSource =
    `package com.smashing.pumpkins;

public class Gish {
}
`;
