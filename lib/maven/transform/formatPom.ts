import {
    ProjectFile,
    projectUtils,
} from "@atomist/automation-client";
import {
    AutofixRegistration,
    CodeTransform,
} from "@atomist/sdm";
import format = require("xml-formatter");
import { IsMaven } from "../pushtest/pushTests";

function formatXml(f: ProjectFile) {
    f.setContentSync(format(f.getContentSync(), {indentation: "    ", stripComments: false, debug: false}));
}

export const FormatPomCodeTransform: CodeTransform = p => {
    return projectUtils.doWithFiles(p, "**/pom.xml", formatXml);
};

export const FormatPomAutofix: AutofixRegistration = {
    name: "format-poms",
    pushTest: IsMaven,
    transform: FormatPomCodeTransform,
};
