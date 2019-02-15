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

export {
    springSupport,
    SpringSupportOptions,
    Categories,
} from "./lib/spring";
export { executableJarDeployer } from "./lib/java/deploy/executableJarDeployer";
export {
    AllJavaFiles,
    JavaAndKotlinSource,
    inferStructureAndMovePackageTransform,
} from "./lib/java/javaProjectUtils";
export {
    IsJava,
    MaterialChangeToJavaRepo,
} from "./lib/java/pushtest/pushTests";
export {
    ImportIoFile,
    ImportIoFileReviewer,
} from "./lib/java/review/importIoFileReviewer";
export {
    ImportDotStar,
    ImportDotStarReviewer,
} from "./lib/java/review/importDotStarReviewer";
export { ListBranchDeploys } from "./lib/java/deploy/MavenPerBranchSpringBootDeploymentGoal";
export {
    mavenBuilder,
    mavenPackage,
    mavenRunner,
} from "./lib/maven/build/MavenBuilder";
export {
    GradleSingleModuleBuilder,
    gradleSingleModuleBuilder,
} from "./lib/gradle/build/GradleSingleModuleBuilder";
export { ListLocalDeploys } from "./lib/maven/deploy/listLocalDeploys";
export { mavenDeployer } from "./lib/maven/deploy/mavenDeployer";
export { MavenFingerprinter } from "./lib/maven/fingerprint/MavenFingerprinter";
export { MavenProjectIdentifier } from "./lib/maven/parse/pomParser";
export { IsMaven } from "./lib/maven/pushtest/pushTests";
export { ProvidedDependencyReviewer } from "./lib/maven/review/providedDependencyReviewer";
export { addDependencyTransform } from "./lib/maven/transform/addDependencyTransform";
export { VersionedArtifact } from "./lib/maven/VersionedArtifact";
export {
    localExecutableJarDeployer,
    mavenSourceDeployer,
} from "./lib/spring/deploy/localSpringBootDeployers";
export { SpringBootSuccessPatterns } from "./lib/spring/deploy/springLoggingPatterns";
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
    IsSpringBoot2Project,
} from "./lib/spring/pushtest/pushTests";
export {
    HardcodedPropertyReviewer,
    HardcodePropertyCategory,
} from "./lib/spring/review/hardcodedPropertyReviewer";
export {
    springBootTagger,
} from "./lib/spring/classify/springTagger";
export * from "./lib/java/javaPatterns";
export * from "./lib/maven/build/helpers";
export * from "./lib/maven/MavenProgressReporter";
export * from "./lib/maven/inspection/findDependenciesCommand";
export * from "./lib/maven/inspection/findDependencies";
export {
    ApplySecuredWebAppGuide,
} from "./lib/spring/transform/guide/securingWebApp";
export {
    removeAutowiredOnSoleConstructor,
    FixAutowiredOnSoleConstructor,
} from "./lib/spring/transform/removeUnnecessaryAutowiredAnnotations";
export {
    addSpringBootActuator,
    springBootActuatorAutofix,
} from "./lib/spring/transform/addSpringBootActuator";

export { MavenPerBranchDeployment } from "./lib/java/deploy/MavenPerBranchDeployment";
export { setSpringBootVersionTransform } from "./lib/spring/transform/setSpringBootVersionTransform";
export { MavenTest } from "./lib/maven/goal/mavenTest";
export * from "./lib/properties/propertiesParser";
export {
    GradlePerBranchDeployment,
    GradlePerBranchDeploymentRegistration,
    springBootGradleArgs,
    ListGradleBranchDeploys,
} from "./lib/gradle/deploy/GradlePerBranchSpringBootDeploymentGoal";
export * from "./lib/riff/riffGeneration";
export * from "./lib/riff/riffPushTests";
export * from "./lib/riff/RiffDeployment";
export {
    addPluginTransform,
    addManagedPluginTransform,
    AddManagedMavenPlugin,
    AddMavenPlugin,
} from "./lib/maven/transform/addPluginTransform";
export {
    ManagedPlugin,
    Plugin,
    PluginExecution,
    PluginExecutionGoal,
} from "./lib/maven/Plugin";
export { springFormat } from "./lib/spring/transform/format/springFormat";
export {
    migrateArtifactIdTransform,
    migrateGroupIdTransform,
} from "./lib/maven/transform/migrateDependencies";
export {
    FormatPomCodeTransform,
    FormatPomAutofix,
} from "./lib/maven/transform/formatPom";
export {
    updateMultiModulePomTransform,
    updatePomTransform,
} from "./lib/maven/generate/updatePom";
export {
    inferSpringStructureAndRenameTransform,
    inferSpringStructureAndDoTransform,
} from "./lib/spring/generate/springBootUtils";
export {
    SpringBootVersions, SpringBootVersionInspection,
} from "./lib/spring/inspect/springBootVersionInspection";
export {
    SpringBootProjectStructure,
} from "./lib/spring/generate/SpringBootProjectStructure";

export { springBootScanner, SpringBootStack } from "./lib/stack/springBootScanner";
export { springBootStackSupport } from "./lib/stack/springBootStackSupport";
export { SpringBootTransformRecipeContributor } from "./lib/stack/SpringBootTransformRecipeContributor";
export { MavenPerBranchLocalDeployInterpreter } from "./lib/stack/MavenPerBranchLocalDeployInterpreter";
export { SpringBootBuildInterpreter } from "./lib/stack/SpringBootBuildInterpreter";
