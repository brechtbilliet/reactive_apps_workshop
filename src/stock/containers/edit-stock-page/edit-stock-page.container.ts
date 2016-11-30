import {Component, OnInit, OnDestroy} from "@angular/core";
import {Wine} from "../../entities/Wine";
import {ActivatedRoute, Router} from "@angular/router";
import {StockService} from "../../services/stock.service";
import {Subscription} from "rxjs";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {Store} from "@ngrx/store";
import {UpdateWine} from "../../../statemanagement/actions/data/wine";
@Component({
    selector: "edit-stock-page",
    template: `
    <default-page>
        <main>
            <div class="row">
                <div class="col-sm-12">
                    <h1><i class="fa fa-pencil"></i>&nbsp;Edit wine</h1>
                </div>
             </div>
             <div class="row" *ngIf="editWine">
                <detail-wine-form [wine]="editWine" (onSave)="onSave($event)"></detail-wine-form>
            </div>
        </main>
    </default-page>
     `
})
export class EditStockPageContainer implements OnDestroy, OnInit {
    id = this.route.snapshot.params["id"];
    editWine: Wine;
    private subscriptions: Array<Subscription> = [];

    constructor(public stockService: StockService,
                private route: ActivatedRoute,
                private router: Router, private store: Store<ApplicationState>) {
    }

    onSave(wine: Wine): void {
        this.subscriptions.push(this.stockService.update(this.id, wine).subscribe(() => {
            this.store.dispatch(new UpdateWine(this.id, wine));
            this.router.navigate(["/stock"]);
        }));
    }


    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    ngOnInit(): void {
        this.subscriptions.push(this.stockService.fetchWine(this.id).subscribe((wine: Wine) => {
            this.editWine = wine;
        }));
    }
}