import { predicatePushTest, PushTest } from "@atomist/sdm";

/**
 * Is this a Riff project?
 * @type {PredicatePushTest}
 */
export const IsRiff: PushTest = predicatePushTest("isRiff",
    async p => p.hasFile("riff.toml"));
