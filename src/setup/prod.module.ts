import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Component} from "@angular/core";
import {AppModule} from "../app";
import {StoreModule, combineReducers} from "@ngrx/store";
import {StoreUndoModule} from "ngrx-undo/index";
import {reset} from "../statemanagement/metareducers/reset-reducer";
import {compose} from "@ngrx/core";
import {rootReducer} from "../statemanagement/rootReducer";

@Component({
    selector: "application-wrapper",
    template: `   
        <application></application>
`
})
export class ApplicationWrapperContainer {
}

// Compose all our middleware with the rootReducer
const composedReducer = compose(reset, combineReducers)(rootReducer);

export function getRootReducer(state: any, action: any) {
    return composedReducer(state, action);
}

@NgModule({
    imports: [StoreModule.provideStore(getRootReducer), StoreUndoModule.interceptStore({
        bufferSize: 200 // Set the size of the buffer (Default: 100)
    }), AppModule],
    declarations: [ApplicationWrapperContainer],
    bootstrap: [ApplicationWrapperContainer],
    schemas: [CUSTOM_ELEMENTS_SCHEMA,]
})
export class ProdModule {
}