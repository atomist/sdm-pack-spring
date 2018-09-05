import { logger } from "@atomist/automation-client";
import { InterpretLog } from "@atomist/sdm/spi/log/InterpretedLog";
import { MavenInfo } from "../../maven/build/mavenLogInterpreter";

export const GradleLogInterpreter: InterpretLog<MavenInfo> = log => {
    const data: MavenInfo = {
        success: log.includes("BUILD SUCCESSFUL"),
    };
    if (!log) {
        logger.warn("Log was empty");
        return {
            relevantPart: "",
            message: "Failed with empty log",
            includeFullLog: false,
            data,
        };
    }

    return {
        relevantPart: "",
        message: "Unknown error",
        data,
    };
};
