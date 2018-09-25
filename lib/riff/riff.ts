import { logger } from "@atomist/automation-client";
import { CodeTransform, GeneratorRegistration, GitHubRepoRef, predicatePushTest, PushTest } from "@atomist/sdm";
import { classNameFromFqn, movePackage, packageNameFromFqn, renameClass } from "../java/javaProjectUtils";
import { parseProperties } from "../properties/propertiesParser";

export interface RiffProjectCreationParameters {
    fqn: string;
}

/**
 * Rename the Riff handler class
 * @param {Project} p
 * @return {Promise<void>}
 */
export const renamePropertyAndClass: CodeTransform<RiffProjectCreationParameters> = async (p, ci) => {
    const props = await parseProperties(p, "riff.toml");
    const handler = props.obj.handler;
    if (!handler) {
        logger.warn("No handler property set");
        return;
    }
    const oldPackage = packageNameFromFqn(handler);
    const newPackage = packageNameFromFqn(ci.parameters.fqn);
    const oldClass = classNameFromFqn(handler);
    const newClass = classNameFromFqn(ci.parameters.fqn);

    await renameClass(p, oldClass, newClass);
    await movePackage(p, oldPackage, newPackage);
    await props.addProperty({ key: "handler", value: ci.parameters.fqn});
};

export const RiffGenerator: GeneratorRegistration<RiffProjectCreationParameters> = {
    name: "create-riff",
    intent: "create spring",
    description: "Create a new Riff function",
    parameters: {
        fqn: { description: "Fully qualified name of the function class" },
    },
    startingPoint: new GitHubRepoRef("trisberg", "upper"),
    transform: [
        renamePropertyAndClass,
    ],
};

/**
 * Is this a Riff project?
 * @type {PredicatePushTest}
 */
export const IsRiff: PushTest = predicatePushTest("isRiff",
    async p => p.hasFile("riff.toml"));
