export interface IArticle {
    id: number;
    title: string;
    text?: string;
}

export interface IArticleError {
    Id?: string[];
    Title?: string[];
    Text?: string[];
}
