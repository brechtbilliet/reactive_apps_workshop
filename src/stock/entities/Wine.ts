export class Wine {
    _id: string;

    constructor(public readonly name: string = "",
                public readonly description: string = "",
                public readonly region: string = "",
                public readonly inStock: number = 0,
                public readonly price: number = 0,
                public readonly myRating: number = 0,
                public readonly image: string = null) {
    }
}