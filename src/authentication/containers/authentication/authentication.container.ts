import {Component, OnDestroy} from "@angular/core";
import {Account} from "../../types/Account";
import {Credentials} from "../../types/Credentials";
import {Router} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {AuthenticationService} from "../../services/authentication.service";
import {LOCALSTORAGE_AUTH} from "../../../configuration";
import {AuthenticationResult} from "../../types/AuthenticationResult";
@Component({
    selector: "authentication",
    template: `
    <div class="container">
        <panel [header]="'You are not authenticated!'">
            <login *ngIf="curTab === 0" (authenticate)="login($event)" [isBusy]="isBusy"></login>
            <register *ngIf="curTab === 1" (authenticate)="register($event)" [isBusy]="isBusy"></register>
            <a href="javascript:void(0)" (click)="enableTab(1)" *ngIf="curTab===0">I don't have an account yet</a>
            <a href="javascript:void(0)" (click)="enableTab(0)" *ngIf="curTab===1">I have an account already</a>
        </panel>
    </div>
      `
})
export class AuthenticationContainer implements OnDestroy {
    curTab: number = 0;
    isBusy = false;
    subscriptions: Array<Subscription> = [];

    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }

    enableTab(tabIndex: number): void {
        this.curTab = tabIndex;
    }

    login(credentials: Credentials): void {
        this.isBusy = false;
        this.subscriptions.push(this.authenticationService.authenticate(credentials).subscribe((authenticationResult: AuthenticationResult) => {
            window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(authenticationResult));
            this.isBusy = true;
            this.router.navigate(["/"]);
        }));
    }

    register(account: Account): void {
        this.isBusy = false;
        this.subscriptions.push(this.authenticationService.register(account).subscribe((authenticationResult: AuthenticationResult) => {
            window.localStorage.setItem(LOCALSTORAGE_AUTH, JSON.stringify(authenticationResult));
            this.isBusy = true;
            this.router.navigate(["/"]);
        }));
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}