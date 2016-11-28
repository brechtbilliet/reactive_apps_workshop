import {Title} from "@angular/platform-browser";
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {LOCALSTORAGE_AUTH} from "../../../configuration";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {StockService} from "../../../stock/services/stock.service";
import {Wine} from "../../../stock/entities/Wine";
import {RealTime} from "../../../common/realtime";
import {SetAuthentication, ClearAuthentication} from "../../../statemanagement/actions/data/autentication";
import {SetAllWines} from "../../../statemanagement/actions/data/wine";
@Component({
    selector: "application",
    providers: [Title],
    template: `
        <navbar [account]="account$|async" (logout)="logout()" *ngIf="isAuthenticated$|async"></navbar>
        <router-outlet></router-outlet>
        <spinner [spin]="isBusy$|async"></spinner>
 `
})
export class ApplicationContainer implements OnInit, OnDestroy {
    isBusy$ = this.store.select(state => state.containers.application.isBusy);
    isAuthenticated$ = this.store.select(state => state.data.authentication.isAuthenticated);
    account$ = this.store.select(state => state.data.authentication.account);

    private subscriptions: Array<Subscription> = [];

    constructor(private title: Title, public authenticationService: AuthenticationService, private realtime: RealTime,
                private router: Router, private store: Store<ApplicationState>, private stockService: StockService) {
        this.title.setTitle("Winecellar application");
    }

    ngOnInit(): void {
        let obj = this.authenticationService.checkInitialAuthentication();
        if (obj) {
            // evil fix for bug in @ngrx/dev-tools
            // https://github.com/ngrx/store-devtools/issues/25
            setTimeout(() => {
                this.store.dispatch(new SetAuthentication(obj));
            });
        }
        this.subscriptions.push(this.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
            if (isAuthenticated) {
                this.realtime.connect();
                this.subscriptions.push(this.stockService.fetchAll().subscribe((wines: Array<Wine>) => {
                    this.store.dispatch(new SetAllWines(wines));
                }));
            }
        }));
    }

    logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
        this.store.dispatch(new ClearAuthentication());
        this.router.navigate(["/authentication"]);
        this.realtime.disconnect();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
