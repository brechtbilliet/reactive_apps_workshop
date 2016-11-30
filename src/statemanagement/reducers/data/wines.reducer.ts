import {Action} from "@ngrx/store";
import * as wine from "../../actions/data/wine";
import {Wine} from "../../../stock/entities/Wine";

export function winesReducer(state: Array<Wine> = [],
                             action: wine.Actions): Array<Wine> {
    //TODO: implement the following action types:
     // - wine.ActionTypes.WINES_ADD -> Adds a wine to the current list of wines
     // - wine.ActionTypes.WINES_SET_ALL -> Sets the wines. If there were wines, they are overridden 
    // - wine.ActionTypes.WINES_REMOVE -> Removes a single wine from the current wines 
    // - wine.ActionTypes.WINES_UPDATE -> Updates a single wine from the current wines 
    // - wine.ActionTypes.WINES_UPDATE_RATE -> Updates the rate from a single wine from the current wines
    // - wine.ActionTypes.WINES_UPDATE_STOCK -> Updates the stock from a single wine from the current wines
     // - don't forget the default state! return null;
};
