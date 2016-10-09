import {Action} from "@ngrx/store";
import {CONTAINER_COLLAPSABLESIDEBAR_TOGGLE} from "../../actionTypes";

let initialState: {isCollapsed: boolean} = {
    isCollapsed: false
};

export function collapsableSidebarReducer(state: {isCollapsed: boolean} = initialState,
                                          action: Action): {isCollapsed: boolean} {
    switch (action.type) {
        case CONTAINER_COLLAPSABLESIDEBAR_TOGGLE:
            return {
                isCollapsed: !state.isCollapsed
            };
        default:
            return state;
    }
};