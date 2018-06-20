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
import { SpringProjectCreationParameters } from "../../../../src/support/spring/generate/SpringProjectCreationParameters";
import { replaceReadmeTitle, SetAtomistTeamInApplicationYml } from "../../../../src/support/spring/generate/springBootGenerator";
import { transformSeedToCustomProject } from "../../../../src/support/spring/generate/transformSeedToCustomProject";
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

describe("springBootGenerator", () => {

    describe("update elements", () => {

        it("should get correct content: default seed", async () => {
            const p = InMemoryProject.from(new SimpleRepoId("owner", "repoName"),
                {path: "README.md", content: Readme1});
            const params = new SpringProjectCreationParameters({
                seed: () => new GitHubRepoRef("foo", "bar"),
                groupId: "atomist",
                addAtomistWebhook: false,
            });
            params.target.repo = "repoName";
            params.enteredServiceClassName = "foo";
            await replaceReadmeTitle(params)(p);
            const readmeContent = p.findFileSync("README.md").getContentSync();
            assert(readmeContent.includes("# repoName"), "Should include repo name");
            assert(readmeContent.includes("seed project \`foo:bar"),
                `Unexpected readme content:\n${readmeContent}`);
        });

        it("should use new name in pom.name", async () => {
            const p = InMemoryProject.from(new SimpleRepoId("owner", "repoName"),
                {path: "README.md", content: Readme1},
                {path: "pom.xml", content: springBootPom()});
            const params = new SpringProjectCreationParameters({
                seed: () => new GitHubRepoRef("foo", "bar"),
                groupId: "atomist",
                addAtomistWebhook: false,
            });
            params.target.repo = "repoName";
            params.enteredServiceClassName = "foo";
            await transformSeedToCustomProject(params)(p, null, null);
            const pom = p.findFileSync("pom.xml").getContentSync();
            assert(pom.includes(`<name>${params.target.repo}</name>`), "Name should be repo name");
        });

        it("should get correct content: entered seed", async () => {
            const p = InMemoryProject.from(new SimpleRepoId("owner", "repoName"),
                {path: "README.md", content: Readme1});
            const params = new SpringProjectCreationParameters({
                seed: () => new GitHubRepoRef("foo", "bar"),
                groupId: "atomist",
                addAtomistWebhook: false,
            });
            params.target.repo = "repoName";
            params.enteredServiceClassName = "foo";
            params.seed = "turtles";
            await replaceReadmeTitle(params)(p);
            const readmeContent = p.findFileSync("README.md").getContentSync();
            assert(readmeContent.includes("# repoName"), "Should include repo name");
            assert(readmeContent.includes("seed project \`foo:turtles"),
                `Unexpected readme content:\n${readmeContent}`);
        });

    });

    describe("update YML", () => {

        it("should put in Atomist team id", async () => {
            const p = InMemoryProject.from(new SimpleRepoId("owner", "repoName"),
                {path: "src/main/resources/application.yml", content: yml1});
            const ctx = {teamId: "T1000"} as HandlerContext;
            await SetAtomistTeamInApplicationYml(p, ctx);
            const yml = p.findFileSync("src/main/resources/application.yml").getContentSync();
            assert(yml.includes("/teams/T1000"), "Should include Atomist team");
        });
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
