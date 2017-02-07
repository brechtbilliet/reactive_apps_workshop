type ContainersStateStructure = {
    application: ApplicationContainerState;
    collapsableSidebar: CollapsableSidebarContainerState;
}
export type ContainersState = Readonly<ContainersStateStructure>;

type ApplicationContainerStateStructure = {
    isBusy: boolean;
}
export type ApplicationContainerState = Readonly<ApplicationContainerStateStructure>;


type CollapsableSidebarContainerStateStructure = {
    isCollapsed: boolean;
}
export type CollapsableSidebarContainerState = Readonly<CollapsableSidebarContainerStateStructure>;