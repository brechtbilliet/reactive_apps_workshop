import {Component, OnDestroy} from "@angular/core";
import {Wine} from "../../entities/Wine";
import {FormControl} from "@angular/forms";
import {StockService} from "../../services/stock.service";
import {Subscription} from "rxjs";
@Component({
    selector: "stock-page",
    template: `
        <default-page>
            <collapsable-sidebar class="hidden-sm hidden-xs">
                <favorite-wines (setStock)="onSetStock($event)" [wines]="[]">
                </favorite-wines>
            </collapsable-sidebar>
            <main>
                <div class="row">
                    <div class="col-sm-8">
                        <div class="input-group">
                            <input type="text" class="form-control input-lg" [formControl]="searchCtrl"/>
                            <span class="input-group-addon"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <a  class="btn btn-primary btn-lg btn-block" [routerLink]="['/stock/add']">
                            <i class="fa fa-plus-circle"></i>&nbsp;Add
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <h2>
                            <i class="fa fa-user"></i>&nbsp;My wines
                            <span class="badge badge-primary">todo</span>
                            <span class="badge badge-primary">todo euro</span>
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <wine-results [wines]="wines"
                            (remove)="onRemove($event)" 
                            (setRate)="onSetRate($event)" 
                            (setStock)="onSetStock($event)">
                        </wine-results>
                    </div>
                </div>
            </main>
        </default-page>
     `
})
export class StockPageContainer implements OnDestroy {
    searchCtrl = new FormControl("");
    wines: Array<Wine>;

    private subscriptions: Array<Subscription> = [];

    constructor(private stockService: StockService) {
        this.subscriptions.push(this.stockService.fetchAll().subscribe((wines: Array<Wine>) => {
            this.wines = wines;
        }));
    }

    onRemove(wine: Wine): void {
    }

    onSetRate(item: {wine: Wine, value: number}): void {
    }

    onSetStock(item: {wine: Wine, value: number}): void {
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }
}
