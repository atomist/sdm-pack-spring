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
    GitHubRepoRef,
    InMemoryProject,
    SeedDrivenGeneratorParameters,
    SimpleRepoId,
} from "@atomist/automation-client";
import { ParametersInvocation } from "@atomist/sdm";
import * as assert from "power-assert";
import {
    ReplaceReadmeTitle,
    SetAtomistTeamInApplicationYml,
} from "../../../lib/spring/generate/springBootTransforms";
import { SpringProjectCreationParameters } from "../../../lib/spring/generate/SpringProjectCreationParameters";
import { TransformSeedToCustomProject } from "../../../lib/spring/generate/transformSeedToCustomProject";
import { springBootPom } from "./TestPoms";

const Readme1 = `# spring-rest-seed

This project contains an Atomist seed project.

## Development

This project is driven using [Maven][mvn].

[mvn]: https://maven.apache.org/`;

const yml1 = `logging:
   level:
     com.atomist.spring.agent: DEBUG

atomist:
  enabled: true
  debug: true
  url: 'https://webhook.atomist.com/atomist/application/teams/\${ATOMIST_TEAM}'
  environment:
      domain: '\${vcap.application.space_name:development}'
      pod: '\${HOSTNAME:\${random.value}}'`;

describe("springBootTransforms", () => {

    it("should get correct README content", async () => {
        const p = InMemoryProject.from(new SimpleRepoId("owner", "repo"),
            { path: "README.md", content: Readme1 });
        const version = "0.1.0";
        const parameters: SpringProjectCreationParameters & SeedDrivenGeneratorParameters = {
            groupId: "atomist",
            rootPackage: undefined,
            source: {
                repoRef: new GitHubRepoRef("foo", "sourceRepoName"),
            },
            target: {
                repoRef: new GitHubRepoRef("a", "targetRepoName"),
                description: "",
            } as any,
            version,
        };
        parameters.enteredServiceClassName = "foo";
        await ReplaceReadmeTitle(p, { parameters } as any);
        const readmeContent = p.findFileSync("README.md").getContentSync();
        assert(readmeContent.includes("# targetRepoName"), "Should include repo name");
        assert(readmeContent.includes("seed project \`foo:sourceRepoName"),
            `Unexpected readme content:\n${readmeContent}`);
    });

    it("should use new name in pom.name", async () => {
        const p = InMemoryProject.from(new SimpleRepoId("owner", "repoName"),
            { path: "README.md", content: Readme1 },
            { path: "pom.xml", content: springBootPom() });
        const version = "0.1.7";
        const params: SpringProjectCreationParameters & SeedDrivenGeneratorParameters = {
            groupId: "atomist",
            rootPackage: "com.test",
            source: undefined,
            enteredServiceClassName: "foo",
            target: {
                description: "x",
                visibility: "public",
                repoRef: new GitHubRepoRef("x", "repoName"),
                webhookUrl: "x",
            } as any,
            version,
        };
        const context: ParametersInvocation<SpringProjectCreationParameters> = {
            context: undefined,
            addressChannels: undefined,
            credentials: undefined,
            preferences: undefined,
            configuration: undefined,
        };
        await TransformSeedToCustomProject(p, context, params);
        const pom = p.findFileSync("pom.xml").getContentSync();
        assert(pom.includes(`<name>repoName</name>`), "Name should be repo name");
        assert(pom.includes(`<version>${version}</version>`), "Version should be correct");
        assert(pom.includes(`<artifactId>repoName</artifactId>`), "artifactId should be correct");
    });

    it("should put in Atomist team id", async () => {
        const p = InMemoryProject.from(new SimpleRepoId("owner", "repoName"),
            { path: "src/main/resources/application.yml", content: yml1 });
        await SetAtomistTeamInApplicationYml(p, { context: { workspaceId: "T1000" } } as any);
        const yml = p.findFileSync("src/main/resources/application.yml").getContentSync();
        assert(yml.includes("/teams/T1000"), "Should include Atomist team");
    });

    it("should refactor Java", async () => {
        const p = InMemoryProject.of(
            { path: "pom.xml", content: "<xml>" },
            { path: "src/main/java/com/foo/AppApplication.java", content: "package com.foo;\n@SpringBootApplication public class App {}" },
        );
        const params: SpringProjectCreationParameters & SeedDrivenGeneratorParameters = {
            groupId: "atomist",
            rootPackage: "com.test",
            source: undefined,
            enteredServiceClassName: "foo",
            target: {
                description: "x",
                visibility: "public",
                repoRef: new GitHubRepoRef("x", "repoName"),
                webhookUrl: "x",
            } as any,
            version: "1.0",
        };
        const context: ParametersInvocation<SpringProjectCreationParameters> = {
            context: undefined,
            addressChannels: undefined,
            credentials: undefined,
            preferences: undefined,
            configuration: undefined,
        };
        await TransformSeedToCustomProject(p, context, params);
        const f = p.findFileSync("src/main/java/com/test/FooApplication.java");
        assert(!!f);
        assert(f.getContentSync().includes("package com.test;"));
    });

});
