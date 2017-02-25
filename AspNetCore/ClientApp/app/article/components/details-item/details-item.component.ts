import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { IArticle, ArticleService } from './../../article';

@Component({
    selector: 'details-item',
    template: require('./details-item.component.html')
})
export class DetailsItemComponent {
    public article: IArticle;

    constructor(private http: Http, private route: ActivatedRoute) {
        var articleService: ArticleService = new ArticleService(http);

        articleService.details(this.getId()).subscribe(data => {
            this.article = data;
        });
    }

    public getId(): number {
        var id: number;
        this.route.params.subscribe(params => {
            id = +params['id']; // (+) converts string 'id' to a number
        });
        return id;
    }
}
