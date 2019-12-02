import { LocalProject } from "@atomist/automation-client";
import {
    CodeTransform,
    spawnLog,
    StringCapturingProgressLog,
} from "@atomist/sdm";

export function kscriptTransform(opts: {
    kscriptLocation: string,
}): CodeTransform {
    return async p => {
        const log = new StringCapturingProgressLog();
        spawnLog("kscript", [opts.kscriptLocation, "--path", (p as LocalProject).baseDir], {log});
        return p;
    };
}
