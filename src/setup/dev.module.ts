import {AppModule} from "../app";
import {NgModule, Component} from "@angular/core";
@Component({
    selector: "application-wrapper",
    template: `   
        <application></application>
`
})
export class ApplicationWrapperContainer {
}

@NgModule({
    imports: [AppModule],
    declarations: [ApplicationWrapperContainer],
    bootstrap: [ApplicationWrapperContainer]
})
export class DevModule {
}
