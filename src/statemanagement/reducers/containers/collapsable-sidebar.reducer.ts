import {Action} from "@ngrx/store";

let initialState: {isCollapsed: boolean} = {
    isCollapsed: false
};

export function collapsableSidebarReducer(state: {isCollapsed: boolean} = initialState,
                                          action: Action): {isCollapsed: boolean} {
    //TODO: implement the following action types:
    // - CONTAINER_COLLAPSABLESIDEBAR_TOGGLE -> should flip the current value
    // - don't forget the default state!
};