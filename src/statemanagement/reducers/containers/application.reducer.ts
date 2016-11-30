import {ApplicationContainerState} from "../../state/ContainersState";
import * as application from "../../actions/containers/application";

let initialState: ApplicationContainerState = {
    isBusy: false
};

export function applicationReducer(state: ApplicationContainerState = initialState,
                                   action: application.Actions): ApplicationContainerState {
    //TODO: implement the following action types:
    // - application.ActionTypes.ENABLE_BUSY_FLAG -> should set the isBusy flag to true 
    // - application.ActionTypes.DISABLE_BUSY_FLAG -> should set the isBusy flag to false 
    // - don't forget the default state!
    return null;
};