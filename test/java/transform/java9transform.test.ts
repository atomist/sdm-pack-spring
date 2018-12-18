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

import {JavaFileParser} from "@atomist/antlr";
import {astUtils, InMemoryProject} from "@atomist/automation-client";
import {CodeTransform} from "@atomist/sdm";
import {SpringBootAppClassInJava} from "../../../lib/spring/generate/SpringBootProjectStructure";

describe("java 8 ast", () => {

    it("method references and lambda should be able to be parsed", async () => {
        const p = InMemoryProject.from(
            { owner: "wicked", repo: "defying-gravity", url: "" });
        p.addFile("src/main/java/Lambda.java", LambdaJavaFile);
        p.addFile("src/main/java/MethodReference.java", MethodReferenceJavaFile);

        const changePackage: CodeTransform = async (project, ctx) => {
            await astUtils.doWithAllMatches(p, JavaFileParser, "**/*.java", SpringBootAppClassInJava, m => {
                console.debug(m.$value);
            });
            return p;
        };
        await changePackage(p, undefined);
    });
});

/* tslint:disable */

export const MethodReferenceJavaFile = `package test;

@SpringBootApplication
public class MethodReference {
    public static void main(String[] args) {
        Arrays.asList("hello", "world")
                .stream()
                .forEach(System.out::println);
    }
}`;


export const LambdaJavaFile = `package test;

@SpringBootApplication
public class Lambda {
    public static void main(String[] args) {
        Arrays.asList("hello", "world")
                .stream()
                .forEach(v -> System.out.println(v));
    }
}`;
