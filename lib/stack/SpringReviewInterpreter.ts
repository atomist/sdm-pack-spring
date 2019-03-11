import { AutoInspectRegistration, SdmContext } from "@atomist/sdm";
import { CodeInspectionRegisteringInterpreter, Interpretation } from "@atomist/sdm-pack-analysis";
import { ImportDotStarReviewer } from "../java/review/importDotStarReviewer";
import { ImportIoFileReviewer } from "../java/review/importIoFileReviewer";
import { ProvidedDependencyReviewer } from "../maven/review/providedDependencyReviewer";
import { Categories } from "../spring";
import { NonSpecificMvcAnnotationsReviewer } from "../spring/review/findNonSpecificMvcAnnotations";
import { HardcodedPropertyReviewer } from "../spring/review/hardcodedPropertyReviewer";
import { MutableInjectionsReviewer } from "../spring/review/mutableInjectionsReviewer";
import { OldSpringBootVersionReviewer } from "../spring/review/oldSpringBootVersionReviewer";
import { UnnecessaryComponentScanReviewer } from "../spring/transform/removeUnnecessaryComponentScanAnnotations";

/**
 * Review every push with the given inspections, based on configuration
 */
export class SpringReviewInterpreter implements CodeInspectionRegisteringInterpreter {

    public readonly codeInspections: Array<AutoInspectRegistration<any, any>>;

    public async enrich(interpretation: Interpretation, sdmContext: SdmContext): Promise<boolean> {
        interpretation.inspections.push(...this.codeInspections);
        return true;
    }

    public constructor(categories: Categories) {
        this.codeInspections = [];
        if (categories.cloudNative) {
            this.codeInspections.push(ImportIoFileReviewer);
            this.codeInspections.push(ImportDotStarReviewer);
            this.codeInspections.push(HardcodedPropertyReviewer);
            this.codeInspections.push(ProvidedDependencyReviewer);
        }
        if (categories.springStyle) {
            this.codeInspections.push(OldSpringBootVersionReviewer);
            this.codeInspections.push(UnnecessaryComponentScanReviewer);
            this.codeInspections.push(MutableInjectionsReviewer);
            this.codeInspections.push(NonSpecificMvcAnnotationsReviewer);
        }
    }

}
