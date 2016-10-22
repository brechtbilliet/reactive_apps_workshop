import {Action} from "@ngrx/store";

let initialState: {isBusy: boolean} = {
    isBusy: false
};

export function applicationReducer(state: {isBusy: boolean} = initialState,
                                   action: Action): {isBusy: boolean} {
    //TODO: implement the following action types:
    // - CONTAINER_APPLICATION_ENABLE_BUSY_FLAG -> should set the isBusy flag to true
    // - CONTAINER_APPLICATION_DISABLE_BUSY_FLAG -> should set the isBusy flag to false
    // - don't forget the default state!
};