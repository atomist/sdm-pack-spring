import { ReviewerRegistration } from "@atomist/sdm";
import { SpringBootVersionInspection } from "../inspect/springBootVersionInspection";
import { HasSpringBootPom } from "../pushtest/pushTests";
import { DesiredSpringBootVersion } from "../transform/tryToUpgradeSpringBootVersion";

export const OldSpringBootVersionCategory = "Old Spring Boot version";

/**
 * Check for old Spring Boot versions
 */
export const OldSpringBootVersionReviewer: ReviewerRegistration = {
    name: OldSpringBootVersionCategory,
    pushTest: HasSpringBootPom,
    inspection: async (p, ci) => {
        const versions = await SpringBootVersionInspection(p, ci);
        const version = !!versions && versions.versions.length === 1 ?
            versions.versions[0].version :
            undefined;
        return {
            repoId: p.id,
            comments: !!version && version < DesiredSpringBootVersion ?
                [
                    {
                        category: OldSpringBootVersionCategory,
                        severity: "info",
                        detail: `Spring Boot version ${version} is old`,
                        sourceLocation: {
                            path: "pom.xml",
                            offset: -1,
                        },
                    },
                ] :
                [],
        };
    },
};
