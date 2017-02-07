import {Component, OnInit, OnDestroy} from "@angular/core";
import {Wine} from "../../entities/Wine";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription, Observable, ConnectableObservable} from "rxjs";
import {StockSandbox} from "../../stock.sandbox";
@Component({
    selector: "edit-stock-page",
    template: `<default-page>
    <main>
        <div class="row">
            <div class="col-sm-12">
                <h1><i class="fa fa-pencil"></i>&nbsp;Edit wine</h1>
            </div>
        </div>
        <div class="row" *ngIf="(editWine$|async)">
            <detail-wine-form [wine]="editWine$|async" (onSave)="onSave($event)"></detail-wine-form>
        </div>
    </main>
</default-page>
     `
})
export class EditStockPageContainer implements OnInit{
    id = this.route.snapshot.params["id"];
    editWine$: ConnectableObservable<Wine> = this.sb.isAuthenticated$
        .filter(isAuthenticated => isAuthenticated) // only when authenticated
        .flatMap(() => {
            return this.sb.fetchWine(this.id);
        })
        .publishReplay();

    private subscriptions: Array<Subscription> = [];

    constructor(public sb: StockSandbox,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.editWine$.connect();
    }

    onSave(wine: Wine): void {
        this.sb.updateWine(this.id, wine);
        this.router.navigate(["/stock"]);
    }
}