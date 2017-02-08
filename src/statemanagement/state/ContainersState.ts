export type ContainersState = Readonly<{
    application: ApplicationContainerState;
    collapsableSidebar: CollapsableSidebarContainerState;
}>;

export type ApplicationContainerState = Readonly<{
    isBusy: boolean;
}>;

export type CollapsableSidebarContainerState = Readonly<{
    isCollapsed: boolean;
}>;