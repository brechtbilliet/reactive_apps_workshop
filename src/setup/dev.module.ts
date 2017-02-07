import {AppModule} from "../app";
import {NgModule, Component} from "@angular/core";
import {StoreModule, combineReducers} from "@ngrx/store";
import {rootReducer} from "../statemanagement/rootReducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {storeFreeze} from "ngrx-store-freeze";
import {reset} from "../statemanagement/metareducers/reset-reducer";
import {compose} from "@ngrx/core";
@Component({
    selector: "application-wrapper",
    template: `   
        <application></application>
        <ngrx-store-log-monitor toggleCommand="ctrl-l" positionCommand="ctrl-m"></ngrx-store-log-monitor>
`
})
export class ApplicationWrapperContainer {
}

// Compose all our middleware with the rootReducer
const composedReducer = compose(storeFreeze, reset, combineReducers)(rootReducer);

export function getComposedReducer(state: any, action: any) {
    return composedReducer(state, action);
}

@NgModule({
    imports: [
        StoreModule.provideStore(composedReducer), StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: "right"
            })
        }), StoreLogMonitorModule, AppModule],
    declarations: [ApplicationWrapperContainer],
    bootstrap: [ApplicationWrapperContainer]
})
export class DevModule {
}
