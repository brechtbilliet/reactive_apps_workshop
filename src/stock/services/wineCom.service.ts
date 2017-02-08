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

export type WineComSearchResult = Readonly<{
    products: Products;
}>;
export type Products = Readonly<{
     list: Array<Product>;
     offset: number;
     total: number;
}>;
export type Product = Readonly<{
     name: string;
     priceMax: number;
     priceMin: number;
     priceRetail: number;
     ratings: Ratings;
     labels: Array<Label>;
     appellation: Appellation;
     description: string;
     id: number;
     varietal: Varietal;
}>;
export type Ratings = Readonly<{
     highestScore: number;
}>;
export type Label = Readonly<{
     name: string;
     url: string;
}>;
export type Appellation = Readonly<{
     region: Region;
}>;
export type Region = Readonly<{
     name: string;
}>;
export type Varietal = Readonly<{
     name: string;
}>;