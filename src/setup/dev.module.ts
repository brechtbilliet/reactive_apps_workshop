import {AppModule} from "../app";
import {NgModule, Component} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "../statemanagement/rootReducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {StoreUndoModule} from "ngrx-undo/index";
import {storeFreeze} from "ngrx-store-freeze";
import {compose} from '@ngrx/core/compose';
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
const composedReducer = compose(storeFreeze, rootReducer);

@NgModule({
    imports: [
        StoreModule.provideStore(composedReducer), StoreDevtoolsModule.instrumentStore({
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
