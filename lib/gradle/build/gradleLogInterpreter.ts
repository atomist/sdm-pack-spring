import { logger } from "@atomist/automation-client";
import { InterpretLog } from "@atomist/sdm/spi/log/InterpretedLog";
import { GradleInfo } from "./GradleBuilder";

export const GradleLogInterpreter: InterpretLog<GradleInfo> = log => {
    const data: GradleInfo = {
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
