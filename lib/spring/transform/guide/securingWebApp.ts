import {
    BranchCommit,
    CodeTransform,
    CodeTransformRegistration,
} from "@atomist/sdm";
import { bringInFile } from "../../../java/transform/bringInFile";
import { IsSpringBoot2Project } from "../../pushTests";
import { addSpringBootStarterTransform } from "../addSpringBootStarterTransform";

const AddSpringSecurityStarter = addSpringBootStarterTransform("spring-boot-starter-security");

// noinspection TsLint
const AddWebSecurityConfigClass = bringInFile("https://github.com/spring-guides/gs-securing-web/blob/master/complete/src/main/java/hello/WebSecurityConfig.java");
const AddWebMvcConfigClass = bringInFile("https://github.com/spring-guides/gs-securing-web/blob/master/complete/src/main/java/hello/MvcConfig.java");

// noinspection TsLint
const AddWebAppSample: CodeTransform = (p, inv) => {
    bringInFile("https://github.com/spring-guides/gs-securing-web/blob/master/complete/src/main/resources/templates/home.html", "src/main/resourced/templates")(p, inv);
    bringInFile("https://github.com/spring-guides/gs-securing-web/blob/master/complete/src/main/resources/templates/hello.html", "src/main/resourced/templates")(p, inv);
    bringInFile("https://github.com/spring-guides/gs-securing-web/blob/master/complete/src/main/resources/templates/login.html", "src/main/resourced/templates")(p, inv);
    return Promise.resolve(p);
};

const AddThymeleafStarter: CodeTransform = addSpringBootStarterTransform("spring-boot-starter-thymeleaf");
const AddSpringWebStarter: CodeTransform = addSpringBootStarterTransform("spring-boot-starter-web");

export const ApplySecuredWebAppGuide: CodeTransformRegistration = {
    name: "ApplySecuredWebAppGuide",
    intent: "apply secured web app guide",
    description: "Apply the Spring Boot guide to secure web apps",
    projectTest: p => IsSpringBoot2Project.predicate(p),
    transform: [
        AddSpringSecurityStarter,
        AddWebSecurityConfigClass,
        AddThymeleafStarter,
        AddSpringWebStarter,
        AddWebMvcConfigClass,
        AddWebAppSample,
    ],
    transformPresentation: (ci, p) => {
        return {
            branch: "spring-security-guide",
        } as BranchCommit;
    },
};
