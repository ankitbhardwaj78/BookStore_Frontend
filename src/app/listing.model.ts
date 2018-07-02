export class Listing {
    constructor(public bookname: string,
                public authorname: string,
                public price: number,
                public image: File,
                public condition: string) {}
}