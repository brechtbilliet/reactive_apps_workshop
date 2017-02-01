import {collapsableSidebarReducer} from "./reducers/containers/collapsable-sidebar.reducer";
import {authenticationReducer} from "./reducers/data/authentication.reducer";
import {winesReducer} from "./reducers/data/wines.reducer";
import {applicationReducer} from "./reducers/containers/application.reducer";
import {combineReducers, Action} from "@ngrx/store";
import {ApplicationState} from "./state/ApplicationState";
let dataReducers = combineReducers({
    authentication: authenticationReducer,
    wines: winesReducer
});
let containersReducers = combineReducers({
    collapsableSidebar: collapsableSidebarReducer,
    application: applicationReducer
});
let productionReducer = combineReducers({
    data: dataReducers,
    containers: containersReducers
});

export const RESET_STORE = "RESET_STORE";

const createResetReducer = (reducer: any) => {
    console.log("called");
    return (state: ApplicationState, action: Action) => {
        console.log(state, action);
        return /*action.payload === RESET_STORE ? {} :*/ productionReducer(state, action)
    }
}

export function rootReducer(state: ApplicationState, action: Action) {
    return createResetReducer(productionReducer(state, action));
}