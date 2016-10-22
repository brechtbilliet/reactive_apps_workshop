import {Action} from "@ngrx/store";
import {Wine} from "../../../stock/entities/Wine";
export function winesReducer(state: Array<Wine> = [],
                             action: Action = null): Array<Wine> {
    //TODO: implement the following action types:
    // - DATA_WINES_ADD -> Adds a wine to the current list of wines
    // - DATA_WINES_ADD_ALL -> Sets the wines. If there were wines, they are overridden
    // - DATA_WINES_REMOVE -> Removes a single wine from the current wines
    // - DATA_WINES_UPDATE -> Updates a single wine from the current wines
    // - DATA_WINES_UPDATE_RATE -> Updates the rate from a single wine from the current wines
    // - DATA_WINES_UPDATE_STOCK -> Updates the stock from a single wine from the current wines
    // - don't forget the default state!
    return null;
};