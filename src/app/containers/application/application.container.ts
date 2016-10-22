import {Title} from "@angular/platform-browser";
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {LOCALSTORAGE_AUTH} from "../../../configuration";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {setAuthentication, clearAuthentication, addAllWines} from "../../../statemanagement/actionCreators";
import {Account} from "../../../authentication/types/Account";
import {Subscription} from "rxjs";
import {StockService} from "../../../stock/services/stock.service";
import {Wine} from "../../../stock/entities/Wine";
import {RealTime} from "../../../common/realtime";
@Component({
    selector: "application",
    providers: [Title],
    template: `
        <navbar [account]="account" (logout)="logout()" *ngIf="isAuthenticated"></navbar>
        <router-outlet></router-outlet>
  `
})
export class ApplicationContainer implements OnInit, OnDestroy {
    isAuthenticated: boolean;
    account: Account;

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
                this.store.dispatch(setAuthentication(obj));
            });
        }
        this.subscriptions.push(this.store.subscribe((state: ApplicationState) => {
            if (!this.isAuthenticated && state.data.authentication.isAuthenticated) {
                this.realtime.connect();
                this.subscriptions.push(this.stockService.fetchAll().subscribe((wines: Array<Wine>) => {
                    this.store.dispatch(addAllWines(wines));
                }));
            }
            this.isAuthenticated = state.data.authentication.isAuthenticated;
            this.account = state.data.authentication.account;
        }));
    }

    logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
        this.store.dispatch(clearAuthentication());
        this.router.navigate(["/authentication"]);
        this.realtime.disconnect();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}