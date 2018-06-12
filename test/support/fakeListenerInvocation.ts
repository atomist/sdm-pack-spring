import { RemoteRepoRef } from "@atomist/automation-client/operations/common/RepoId";
import { Project } from "@atomist/automation-client/project/Project";
import { PushListenerInvocation } from "@atomist/sdm";
import { GitProject } from "@atomist/automation-client/project/git/GitProject";

export function fakeListenerInvocation(project: Project): PushListenerInvocation {
    return {
        push: {id: new Date().getTime() + "_", branch: "master"},
        project: project as any as GitProject,
        id: project.id as RemoteRepoRef,
        context: null,
        addressChannels: null,
        credentials: null,
    };
}