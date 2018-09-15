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

import { GitHubRepoRef } from "@atomist/automation-client/operations/common/GitHubRepoRef";
import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";

import { InMemoryFile } from "@atomist/automation-client/project/mem/InMemoryFile";
import * as assert from "power-assert";
import {
    ProvidedDependencyCategory,
    ProvidedDependencyReviewer,
} from "../../../lib/maven/review/providedDependencyReviewer";
import { NonSpringPom } from "../../spring/generator/TestPoms";

describe("ProvidedDependencyReviewer", () => {

    it("should not find any problems in empty project", async () => {
        const id = new GitHubRepoRef("a", "b");
        const p = InMemoryProject.from(id);
        const r = await ProvidedDependencyReviewer.inspection(p, undefined);
        assert.equal(r.comments.length, 0);
    });

    it("pass harmless POM", async () => {
        const id = new GitHubRepoRef("a", "b");
        const p = InMemoryProject.from(id, new InMemoryFile("pom.xml", NonSpringPom));
        const r = await ProvidedDependencyReviewer.inspection(p, undefined);
        assert.equal(r.comments.length, 0);
    });

    it("flag provided pom", async () => {
        const id = new GitHubRepoRef("a", "b");
        const f = new InMemoryFile("pom.xml", ProvidedPom);
        const p = InMemoryProject.from(id, f);
        const r = await ProvidedDependencyReviewer.inspection(p, undefined);
        assert.equal(r.comments.length, 1);
        const comment =  r.comments[0];
        assert.equal(comment.category, ProvidedDependencyCategory);
        assert.equal(comment.sourceLocation.path, f.path);
    });

});

/* tslint:disable */

const ProvidedPom = `<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.mycompany.app</groupId>
  <artifactId>my-app</artifactId>
  <version>1</version>
  <packaging>pom</packaging>
  
  <dependencies>
      <dependency>
      <groupId>javax</groupId>
      <artifactId>javaee-api</artifactId>
      <version>7.0</version>
      <scope>provided</scope>
    </dependency>
</dependencies>

  <modules>
    <module>my-module</module>
  </modules>
</project>`;
