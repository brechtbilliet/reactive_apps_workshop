import {Wine} from "../../stock/entities/Wine";
import {AuthenticationDataState} from "./AuthenticationDataState";
export interface ApplicationState {
    containers: {
        application: {isBusy: boolean};
        collapsableSidebar: {isCollapsed: boolean}
    };
    data: {
        authentication: AuthenticationDataState;
        wines: Array<Wine>
    }
}