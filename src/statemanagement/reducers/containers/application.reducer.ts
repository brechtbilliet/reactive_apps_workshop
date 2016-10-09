import {Action} from "@ngrx/store";

let initialState: {isBusy: boolean} = {
    isBusy: false
};

export function applicationReducer(state: {isBusy: boolean} = initialState,
                                   action: Action): {isBusy: boolean} {
    return null;
};