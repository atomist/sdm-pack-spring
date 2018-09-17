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

export {
    configureLocalSpringBootDeploy,
    configureGradlePerBranchSpringBootDeploy,
    configureMavenPerBranchSpringBootDeploy,
    SpringSupport,
} from "./lib/spring";
export { executableJarDeployer } from "./lib/java/deploy/executableJarDeployer";
export {
    AllJavaFiles,
    JavaAndKotlinSource,
} from "./lib/java/javaProjectUtils";
export {
    IsJava,
    MaterialChangeToJavaRepo,
} from "./lib/java/pushTests";
export {
    ImportFileIoCategory,
    FileIoImportReviewer,
} from "./lib/java/review/fileIoImportReviewer";
export {
    ImportDotStarCategory,
    ImportDotStarReviewer,
} from "./lib/java/review/importDotStarReviewer";
export { ListBranchDeploys } from "./lib/java/deploy/MavenPerBranchSpringBootDeploymentGoal";
export { MavenBuilder } from "./lib/maven/build/MavenBuilder";
export { GradleSingleModuleBuilder } from "./lib/gradle/build/GradleSingleModuleBuilder";
export { ListLocalDeploys } from "./lib/maven/deploy/listLocalDeploys";
export { mavenDeployer } from "./lib/maven/deploy/mavenDeployer";
export { MavenFingerprinter } from "./lib/maven/fingerprint/MavenFingerprinter";
export { MavenProjectIdentifier } from "./lib/maven/parse/pomParser";
export { IsMaven } from "./lib/maven/pushTests";
export { ProvidedDependencyReviewer } from "./lib/maven/review/providedDependencyReviewer";
export { addDependencyTransform } from "./lib/maven/transform/addDependencyTransform";
export { VersionedArtifact } from "./lib/maven/VersionedArtifact";
export {
    localExecutableJarDeployer,
    mavenSourceDeployer,
} from "./lib/spring/deploy/localSpringBootDeployers";
export { SpringBootSuccessPatterns } from "./lib/spring/springLoggingPatterns";
export * from "./lib/spring/generate/springBootTransforms";
export { addSpringInitializrGenerator } from "./lib/spring/generate/springInitializrGenerator";
export {
    SpringProjectCreationParameters,
    SpringProjectCreationParameterDefinitions,
} from "./lib/spring/generate/SpringProjectCreationParameters";
export { TransformSeedToCustomProject } from "./lib/spring/generate/transformSeedToCustomProject";
export {
    HasSpringBootApplicationClass,
    HasSpringBootPom,
} from "./lib/spring/pushTests";
export {
    HardCodedPropertyReviewer,
    HardcodePropertyCategory,
} from "./lib/spring/review/hardcodedPropertyReviewer";
export {
    springBootTagger,
} from "./lib/spring/springTagger";
export * from "./lib/java/javaPatterns";
export * from "./lib/maven/build/helpers";
export * from "./lib/maven/MavenProgressReporter";
export * from "./lib/maven/inspection/findDependenciesCommand";
export * from "./lib/maven/inspection/findDependencies";
export {
    ApplySecuredWebAppGuide,
} from "./lib/spring/transform/guide/securingWebApp";
