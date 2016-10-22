import {routing} from "./routes";
import {BrowserModule} from "@angular/platform-browser";
import {ApplicationContainer} from "./containers/application/application.container";
import {NgModule} from "@angular/core";
import {CommonLogicModule} from "../common";
import {StockModule} from "../stock";
import {AuthenticationModule} from "../authentication";
import {AboutModule} from "../about";
import {XHRBackend, RequestOptions, Http} from "@angular/http";
import {customHttpFactory} from "./customHttp";
import {Store} from "@ngrx/store";

@NgModule({
    imports: [BrowserModule, AboutModule, AuthenticationModule, CommonLogicModule, StockModule, routing],
    declarations: [ApplicationContainer],
    exports: [ApplicationContainer],
    providers: [{
        provide: Http,
        useFactory: customHttpFactory,
        deps: [XHRBackend, RequestOptions, Store]
    }]
})
export class AppModule {
}