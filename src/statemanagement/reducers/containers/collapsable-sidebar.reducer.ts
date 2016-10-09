import {Action} from "@ngrx/store";

let initialState: {isCollapsed: boolean} = {
    isCollapsed: false
};

export function collapsableSidebarReducer(state: {isCollapsed: boolean} = initialState,
                                          action: Action): {isCollapsed: boolean} {
    return null;
};