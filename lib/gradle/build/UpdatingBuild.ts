import { RemoteRepoRef } from "@atomist/automation-client/operations/common/RepoId";
import { LocalBuildInProgress } from "@atomist/sdm-core";
import { ChildProcessResult } from "@atomist/sdm/api-helper/misc/spawned";
import { AppInfo } from "@atomist/sdm/spi/deploy/Deployment";

export class UpdatingBuild implements LocalBuildInProgress {

    public ai: AppInfo;

    public deploymentUnitFile: string;

    constructor(public repoRef: RemoteRepoRef,
                public buildResult: Promise<ChildProcessResult>,
                public team: string,
                public url: string) {
    }

    get appInfo(): AppInfo {
        return this.ai;
    }
}
