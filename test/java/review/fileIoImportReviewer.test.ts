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
    GitHubRepoRef,
    InMemoryProject,
    InMemoryProjectFile,
} from "@atomist/automation-client";
import * as assert from "power-assert";
import { CloudNative } from "../../../lib/common/review/reviewCategories";
import {
    ImportIoFile,
    ImportIoFileReviewer,
} from "../../../lib/java/review/importIoFileReviewer";

describe("fileIoImport", () => {

    it("should not find any problems in empty project", async () => {
        const id = new GitHubRepoRef("a", "b");
        const p = InMemoryProject.from(id);
        const r = await ImportIoFileReviewer.inspection(p, undefined);
        assert.equal(r.comments.length, 0);
    });

    it("pass harmless Java code", async () => {
        const id = new GitHubRepoRef("a", "b");
        const p = InMemoryProject.from(id, new InMemoryProjectFile("src/main/java/Thing.java", "public class Thing {}"));
        const r = await ImportIoFileReviewer.inspection(p, undefined);
        assert.equal(r.comments.length, 0);
    });

    it("flag file import in Java", async () => {
        const id = new GitHubRepoRef("a", "b");
        const f = new InMemoryProjectFile("src/main/java/Thing.java",
            "import java.io.File;\npublic class Thing {}");
        const p = InMemoryProject.from(id, f);
        const r = await ImportIoFileReviewer.inspection(p, undefined);
        assert.equal(r.comments.length, 1);
        const comment = r.comments[0];
        assert.equal(comment.category, CloudNative);
        assert.equal(comment.subcategory, ImportIoFile);
        assert.equal(comment.sourceLocation.path, f.path);
    });

    it("flag file import in Kotlin", async () => {
        const id = new GitHubRepoRef("a", "b");
        const f = new InMemoryProjectFile("src/main/kotlin/Thing.kt",
            "import java.io.File;\npublic class Thing {}");
        const p = InMemoryProject.from(id, f);
        const r = await ImportIoFileReviewer.inspection(p, undefined);
        assert.equal(r.comments.length, 1);
        const comment = r.comments[0];
        assert.equal(comment.subcategory, ImportIoFile);
        assert.equal(comment.sourceLocation.path, f.path);
    });

    it("flag error in nested package", async () => {
        const id = new GitHubRepoRef("a", "b");
        const f = new InMemoryProjectFile("src/main/java/com/atomist/Melb1Application.java",
            Bad1);
        const p = InMemoryProject.from(id, f);
        const r = await ImportIoFileReviewer.inspection(p, undefined);
        assert.equal(r.comments.length, 1);
        const comment = r.comments[0];
        assert.equal(comment.subcategory, ImportIoFile);
        assert.equal(comment.sourceLocation.path, f.path);
    });

});

/* tslint:disable */

export const Bad1 = `package com.atomist;
import java.io.File;

import java.util.*;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Melb1Application {

	public static void main(String[] args) {
		SpringApplication.run(Melb1Application.class, args);
	}
}`;
