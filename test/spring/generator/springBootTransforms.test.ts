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

import { HandlerContext } from "@atomist/automation-client";
import { GitHubRepoRef } from "@atomist/automation-client/operations/common/GitHubRepoRef";
import { SimpleRepoId } from "@atomist/automation-client/operations/common/RepoId";
import { InMemoryProject } from "@atomist/automation-client/project/mem/InMemoryProject";
import * as assert from "power-assert";
import { ReplaceReadmeTitle, SetAtomistTeamInApplicationYml } from "../../../lib/spring/generate/springBootTransforms";
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
        const parameters: SpringProjectCreationParameters = {
            groupId: "atomist",
            addAtomistWebhook: false,
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
        const params: SpringProjectCreationParameters = {
            groupId: "atomist",
            addAtomistWebhook: false,
            rootPackage: "com.test",
            source: null,
            enteredServiceClassName: "foo",
            target: {
                description: "x",
                visibility: "public",
                repoRef: new GitHubRepoRef("x", "repoName"),
                webhookUrl: "x",
            } as any,
            version,
        };
        await TransformSeedToCustomProject(p, null, params);
        const pom = p.findFileSync("pom.xml").getContentSync();
        assert(pom.includes(`<name>repoName</name>`), "Name should be repo name");
        assert(pom.includes(`<version>${version}</version>`), "Version should be correct");
        assert(pom.includes(`<artifactId>repoName</artifactId>`), "artifactId should be correct");
    });

    it("should put in Atomist team id", async () => {
        const p = InMemoryProject.from(new SimpleRepoId("owner", "repoName"),
            { path: "src/main/resources/application.yml", content: yml1 });
        const context = { teamId: "T1000" } as HandlerContext;
        await SetAtomistTeamInApplicationYml(p, { context } as any);
        const yml = p.findFileSync("src/main/resources/application.yml").getContentSync();
        assert(yml.includes("/teams/T1000"), "Should include Atomist team");
    });

    /*
    describe("run end to end", () => {

        it("should put in Atomist team id and ensure valid Java with default service class name", async () => {
            const config = {
                seed: () => new GitHubRepoRef("spring-team", "spring-rest-seed"),
                intent: "whatever",
                groupId: "atomist",
                addAtomistWebhook: false,
            };
            let result: Project;
            const gen = springBootGenerator(config, {
                repoLoader: () => () => GitCommandGitProject.cloned({token: null},
                    new GitHubRepoRef(config.seed.owner, config.seed.repo)),
                projectPersister: async p => {
                    result = p;
                    return {target: p, success: true};
                },
            });

            const ctx = fakeContext("T1000");
            const params = new SpringProjectCreationParameters(config);
            params.enteredArtifactId = "artifact";
            params.rootPackage = "atomist.test";
            params.target.owner = "whoever";
            params.target.repo = "whatever";
            await gen.handle(ctx, params);

            const yml = result.findFileSync("src/main/resources/application.yml").getContentSync();
            assert(yml.includes("/teams/T1000"), "Should include Atomist team");
            result.findFileSync("src/main/java/atomist/test/ArtifactApplication.java").getContentSync();
            const pom = result.findFileSync("pom.xml").getContentSync();
            assert(pom.includes(`<name>${params.target.repo}</name>`), "Name should be repo name: had\n" + pom);
        }).timeout(18000);

        it("should put in Atomist team id and ensure valid Java with entered service class name", async () => {
            const config = {
                seed: () => new GitHubRepoRef("spring-team", "spring-rest-seed"),
                intent: "whatever",
                groupId: "atomist",
                addAtomistWebhook: false,
            };
            let result: Project;
            const gen = springBootGenerator(config, {
                repoLoader: () => () => GitCommandGitProject.cloned({token: null},
                    new GitHubRepoRef(config.seed.owner, config.seed.repo)),
                projectPersister: async p => {
                    result = p;
                    return {target: p, success: true};
                },
            });

            const ctx = fakeContext("T1000");
            const params = new SpringProjectCreationParameters(config);
            params.enteredArtifactId = "artifact";
            params.rootPackage = "atomist.test";
            params.target.owner = "whoever";
            params.target.repo = "whatever";
            params.enteredServiceClassName = "Dog";
            await gen.handle(ctx, params);

            const yml = result.findFileSync("src/main/resources/application.yml").getContentSync();
            assert(yml.includes("/teams/T1000"), "Should include Atomist team");
            result.findFileSync("src/main/java/atomist/test/DogApplication.java").getContentSync();
        }).timeout(18000);

    });
    */

});