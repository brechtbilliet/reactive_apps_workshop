import {Title} from "@angular/platform-browser";
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AppSandbox} from "../../app.sandbox";
@Component({
    selector: "application",
    providers: [Title],
    template: `
        <navbar [account]="account$|async" (logout)="logout()" *ngIf="isAuthenticated$|async"></navbar>
        <spinner [spin]="isBusy$|async"></spinner>
        <router-outlet></router-outlet>
  `
})
export class ApplicationContainer implements OnInit, OnDestroy {
    isBusy$ = this.sb.isBusy$;
    isAuthenticated$ = this.sb.isAuthenticated$;
    account$ = this.sb.account$;
    private subscriptions: Array<Subscription> = [];

    constructor(private title: Title, public sb: AppSandbox, private router: Router) {
        this.title.setTitle("Winecellar application");
    }

    ngOnInit(): void {
        this.sb.checkInitialAuthentication();
        this.subscriptions.push(this.sb.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
            if (isAuthenticated) {
                this.sb.loadWines();
                this.sb.connectRealTime();
            }
        }));
    }

    logout(): void {
        this.sb.logout();
        this.router.navigate(["/authentication"]);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}