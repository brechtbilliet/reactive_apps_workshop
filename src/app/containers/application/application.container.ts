import {Title} from "@angular/platform-browser";
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../authentication/services/authentication.service";
import {LOCALSTORAGE_AUTH} from "../../../configuration";
@Component({
    selector: "application",
    providers: [Title],
    template: `
        <navbar [account]="authenticationService.account" (logout)="logout()" *ngIf="authenticationService.isAuthenticated"></navbar>
        <router-outlet></router-outlet>
  `
})
export class ApplicationContainer implements OnInit {
    constructor(private title: Title, public authenticationService: AuthenticationService, private router: Router) {
        this.title.setTitle("Winecellar application");
    }

    ngOnInit(): void {
        let obj = this.authenticationService.checkInitialAuthentication();
        if (obj) {
            // evil fix for bug in @ngrx/dev-tools
            // https://github.com/ngrx/store-devtools/issues/25
            setTimeout(() => {
                this.authenticationService.isAuthenticated = true;
                this.authenticationService.account = {
                    firstName: obj.firstName,
                    lastName: obj.lastName,
                    login: obj.login,
                };
            });
        }
    }

    logout(): void {
        localStorage.removeItem(LOCALSTORAGE_AUTH);
        this.authenticationService.isAuthenticated = false;
        this.authenticationService.account = null;
        this.router.navigate(["/authentication"]);
    }
}