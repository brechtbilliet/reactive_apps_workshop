import {Action} from "@ngrx/store";
import {AuthenticationDataState} from "../../state/AuthenticationDataState";

let initialState = {
    isAuthenticated: false,
    jwtToken: "",
    account: null
}
export function authenticationReducer(state: AuthenticationDataState = initialState,
                                      action: Action = null): AuthenticationDataState {
    return null;
};