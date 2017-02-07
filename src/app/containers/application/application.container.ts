import {Title} from "@angular/platform-browser";
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {LOCALSTORAGE_AUTH} from "../../../configuration";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {Account} from "../../../authentication/types/Account";
import {Subscription} from "rxjs";
import {ClearAuthentication, SetAuthentication} from "../../../statemanagement/actions/data/autentication";
import {ResetStore} from "../../../statemanagement/metareducers/reset-reducer";
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

    constructor(private title: Title, public authenticationService: AuthenticationService,
                private router: Router, private store: Store<ApplicationState>) {
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
        this.subscriptions.push(this.store.subscribe((state: ApplicationState) => {
            this.isAuthenticated = state.data.authentication.isAuthenticated;
            this.account = state.data.authentication.account;
        }));
    }

    logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
        this.store.dispatch(new ResetStore());
        this.router.navigate(["/authentication"]);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}