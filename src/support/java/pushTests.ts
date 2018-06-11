import { predicatePushTest } from "@atomist/sdm";
import { fileExists } from "@atomist/automation-client/project/util/projectUtils";

export const IsJava = predicatePushTest(
    "Is Java",
    async p =>
        fileExists(p, "**/*.java", () => true));