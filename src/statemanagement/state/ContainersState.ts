interface ContainersStateStructure {
    application: ApplicationContainerState;
    collapsableSidebar: CollapsableSidebarContainerState;
}
export type ContainersState = Readonly<ContainersStateStructure>;

interface ApplicationContainerStateStructure {
    isBusy: boolean;
}
export type ApplicationContainerState = Readonly<ApplicationContainerStateStructure>;


export interface CollapsableSidebarContainerStateStructure {
    isCollapsed: boolean;
}
export type CollapsableSidebarContainerState = Readonly<CollapsableSidebarContainerStateStructure>;