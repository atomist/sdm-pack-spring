import { asSpawnCommand, AutofixRegistration, localCommandsCodeTransform } from "@atomist/sdm";
import { IsJava } from "../../../java/pushtest/pushTests";

// const FORMAT_JAR = "target/spring-format-0.1.0-SNAPSHOT-jar-with-dependencies.jar";

/**
 * Invoke spring-format. It must be available as a main class at the given path
 */
export function springFormat(formatJarPath: string = process.env.FORMAT_JAR): AutofixRegistration {
    return {

        name: "SpringFormat",
        pushTest: IsJava,
        transform: localCommandsCodeTransform([
            asSpawnCommand(`java -jar ${formatJarPath}`),
        ]),
    };
}
