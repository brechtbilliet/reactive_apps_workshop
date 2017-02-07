import {NgModule, CUSTOM_ELEMENTS_SCHEMA, Component} from "@angular/core";
import {AppModule} from "../app";
import {StoreModule, combineReducers} from "@ngrx/store";
import {rootReducer} from "../statemanagement/rootReducer";
import {reset} from "../statemanagement/metareducers/reset-reducer";
import {compose} from "@ngrx/core";

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

export function getComposedReducer(state: any, action: any) {
    return composedReducer(state, action);
}

@NgModule({
    imports: [StoreModule.provideStore(getComposedReducer), AppModule],
    declarations: [ApplicationWrapperContainer],
    bootstrap: [ApplicationWrapperContainer],
    schemas: [CUSTOM_ELEMENTS_SCHEMA,]
})
export class ProdModule {
}