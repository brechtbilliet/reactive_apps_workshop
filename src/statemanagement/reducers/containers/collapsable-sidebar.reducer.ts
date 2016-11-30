import {CollapsableSidebarContainerState} from "../../state/ContainersState";
import * as sidebar from "../../actions/containers/sidebar";

let initialState: CollapsableSidebarContainerState = {
    isCollapsed: false
};

export function collapsableSidebarReducer(state: CollapsableSidebarContainerState = initialState,
                                          action: sidebar.Actions): CollapsableSidebarContainerState {
    //TODO: implement the following action types: 
    // - sidebar.ActionTypes.TOGGLE_SIDEBAR -> should flip the current value 
    // - don't forget the default state!
    return null;
};
