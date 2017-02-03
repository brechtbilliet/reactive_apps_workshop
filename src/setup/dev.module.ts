import {AppModule} from "../app";
import {NgModule, Component} from "@angular/core";
import {StoreModule, combineReducers} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {StoreUndoModule} from "ngrx-undo/index";
import {storeFreeze} from "ngrx-store-freeze";
import {compose} from "@ngrx/core/compose";
import {reset} from "../statemanagement/metareducers/reset-reducer";
import {rootReducer} from "../statemanagement/rootReducer";
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

export function getRootReducer(state: any, action: any) {
    return composedReducer(state, action);
}

@NgModule({
    imports: [
        StoreModule.provideStore(getRootReducer), StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: false,
                position: "right"
            })
        }), StoreUndoModule.interceptStore({
            bufferSize: 200 // Set the size of the buffer (Default: 100)
        }), StoreLogMonitorModule, AppModule],
    declarations: [ApplicationWrapperContainer],
    bootstrap: [ApplicationWrapperContainer]
})
export class DevModule {
}
