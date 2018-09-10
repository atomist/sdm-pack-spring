import * as utils from "@atomist/automation-client/project/util/projectUtils";
import { CodeTransform } from "@atomist/sdm";

export const AddGradleBootRunArgsSupport: CodeTransform = async (p, ci) => {
    return utils.doWithFiles(p, "build.gradle", async buildFile => {
        const content = await buildFile.getContent();
        const bootRunArgsSupport = `
bootRun {
    if (project.hasProperty('args')) {
        args project.args.split(',')
    }
}
        `;
        await buildFile.setContent(content +  bootRunArgsSupport);
    });
};
