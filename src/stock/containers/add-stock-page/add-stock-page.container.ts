import {Component, OnDestroy} from "@angular/core";
import {Router} from "@angular/router";
import {Wine} from "../../entities/Wine";
import {StockService} from "../../services/stock.service";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../../../statemanagement/state/ApplicationState";
import {addWine} from "../../../statemanagement/actionCreators";
@Component({
    selector: "add-stock-page",
    template: `
       <default-page>
            <main>
                <div class="row">
                    <div class="col-sm-12">
                        <h1><i class="fa fa-plus-circle"></i>&nbsp;Add wine</h1>
                    </div>
                </div>
                <div class="row">
                    <detail-wine-form (onSave)="onSave($event)"></detail-wine-form>
                </div>
            </main>
        </default-page>
  `
})
export class AddStockPageContainer implements OnDestroy {
    private subscriptions: Array<Subscription> = [];
    constructor(private stockService: StockService, private router: Router, private store: Store<ApplicationState>) {
    }

    onSave(wine: Wine): void {
        this.subscriptions.push(this.stockService.add(wine).subscribe((createdWine: Wine) => {
            this.store.dispatch(addWine(createdWine));
            this.router.navigate(["/stock"]);
        }));
    }

    ngOnDestroy(): void{
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}