import {WINE_COM_API_URL, WINE_COM_API_KEY} from "../../configuration";
import {Observable} from "rxjs/Observable";
import {Response, Http} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class WineComService {
    constructor(private http: Http) {
    }

    search(query: string): Observable<WineComSearchResult> {
        return this.http
            .get(`${WINE_COM_API_URL}catalog?apikey=${WINE_COM_API_KEY}&search=${query}`)
            .map((resp: Response) => JSON.parse(JSON.stringify(resp.json()), camelCaseReviver));
    }
}

function camelCaseReviver(key: string, value: any): any {
    if (value && typeof value === "object") {
        for (var k in value) {
            if (/^[A-Z]/.test(k) && Object.hasOwnProperty.call(value, k)) {
                value[k.charAt(0).toLowerCase() + k.substring(1)] = value[k];
                delete value[k];
            }
        }
    }
    return value;
}

export type WineComSearchResult = {
    readonly products: Products;
}
export type Products = {
    readonly list: Array<Product>;
    readonly offset: number;
    readonly total: number;
}
export type Product = {
    readonly name: string;
    readonly priceMax: number;
    readonly priceMin: number;
    readonly priceRetail: number;
    readonly ratings: Ratings;
    readonly labels: Array<Label>;
    readonly appellation: Appellation;
    readonly description: string;
    readonly id: number;
    readonly varietal: Varietal;
}
export type Ratings = {
    readonly highestScore: number;
}
export type Label = {
    readonly name: string;
    readonly url: string;
}
export type Appellation = {
    readonly region: Region;
}
export type Region = {
    readonly name: string;
}
export type Varietal = {
    readonly name: string;
}