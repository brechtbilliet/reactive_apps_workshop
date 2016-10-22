import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {StockService} from "./services/stock.service";
import {AddStockPageContainer} from "./containers/add-stock-page/add-stock-page.container";
import {StockPageContainer} from "./containers/stock-page/stock-page.container";
import {EditStockPageContainer} from "./containers/edit-stock-page/edit-stock-page.container";
import {DetailWineFormComponent} from "./components/detail-wine-form/detail-wine-form.component";
import {FavoriteWinesComponent} from "./components/favorite-wines/favorite-wines.component";
import {WineResultComponent} from "./components/wine-result/wine-result.component";
import {WineResultsComponent} from "./components/wine-results/wine-results.component";
import {CommonLogicModule} from "../common/index";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {WineSearchContainer} from "./containers/wine-search/wine-search.container";
import {WineComService} from "./services/wineCom.service";

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, RouterModule, CommonModule, HttpModule, CommonLogicModule],
    declarations: [AddStockPageContainer, EditStockPageContainer, StockPageContainer, DetailWineFormComponent,
        FavoriteWinesComponent, WineResultComponent, WineResultsComponent, WineSearchContainer],
    exports: [AddStockPageContainer, EditStockPageContainer, StockPageContainer],
    providers: [StockService, WineComService]
})
export class StockModule {
}

