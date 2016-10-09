import {Action} from "@ngrx/store";
import {CONTAINER_APPLICATION_DISABLE_BUSY_FLAG, CONTAINER_APPLICATION_ENABLE_BUSY_FLAG} from "../../actionTypes";

let initialState: {isBusy: boolean} = {
      isBusy: false
};

export function applicationReducer(state: {isBusy: boolean} = initialState,
                                   action: Action): {isBusy: boolean} {
    switch (action.type) {
        case CONTAINER_APPLICATION_ENABLE_BUSY_FLAG:
            return {
                isBusy: true
            };
        case CONTAINER_APPLICATION_DISABLE_BUSY_FLAG:
            return {
                isBusy: false
            };
        default:
            return state;
    }
};