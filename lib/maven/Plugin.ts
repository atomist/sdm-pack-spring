import {
    DependencySpecifier,
    VersionedArtifact,
} from "./VersionedArtifact";

export interface Plugin extends DependencySpecifier {
    group: string;

    artifact: string;

    version?: string;

    configuration?: any;

    extensions?: boolean;

    inherited?: boolean;

    dependencies?: VersionedArtifact[];

    executions?: PluginExecution[];
}

export interface PluginExecution {
    id: string;

    goals: PluginExecutionGoal[];

    phase: string;

    inherited: boolean;

    configuration: any;
}

export interface PluginExecutionGoal {
    name: string;
}
