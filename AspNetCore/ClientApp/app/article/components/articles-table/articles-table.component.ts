import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IArticle, ArticleService } from './../../article';

@Component({
    selector: 'articles-table',
    template: require('./articles-table.component.html')
})
export class ArticlesTableComponent {
    public articles: IArticle[];

    constructor(private http: Http) {
        var articleService: ArticleService = new ArticleService(http);

        articleService.list().subscribe(data => {
            this.articles = data;
        });
    }
}
