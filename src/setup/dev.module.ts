import {AppModule} from "../app";
import {NgModule, Component} from "@angular/core";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "../statemanagement/rootReducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreLogMonitorModule, useLogMonitor} from "@ngrx/store-log-monitor";
import {StoreUndoModule} from "ngrx-undo/index";
@Component({
    selector: "application-wrapper",
    template: `   
        <application></application>
        <ngrx-store-log-monitor toggleCommand="ctrl-t" positionCommand="ctrl-m"></ngrx-store-log-monitor>
`
})
export class ApplicationWrapperContainer {
}

@NgModule({
    imports: [
        StoreModule.provideStore(rootReducer), StoreDevtoolsModule.instrumentStore({
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
