import {routing} from "./routes";
import {BrowserModule} from "@angular/platform-browser";
import {ApplicationContainer} from "./containers/application/application.container";
import {NgModule} from "@angular/core";
import {CommonLogicModule} from "../common";
import {StockModule} from "../stock";
import {AuthenticationModule} from "../authentication";
import {AboutModule} from "../about";

@NgModule({
    imports: [BrowserModule, AboutModule, AuthenticationModule, CommonLogicModule, StockModule, routing],
    declarations: [ApplicationContainer],
    exports: [ApplicationContainer]
})
export class AppModule {
}