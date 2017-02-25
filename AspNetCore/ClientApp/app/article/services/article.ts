import { IArticle } from './../article';

export class Article implements IArticle {
    public id: number;
    public title: string;
    public text?: string;

    constructor(
        id: number,
        title: string,
        text?: string
    ) { }
}
