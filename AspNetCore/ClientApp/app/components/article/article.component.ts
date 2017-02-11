import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { IArticle } from './../../interfaces/iarticle';

@Component({
    selector: 'article',
    template: require('./article.component.html')
})
export class ArticleComponent {
    public article: IArticle;

    public id: number;

    constructor(route: ActivatedRoute, http: Http) {
        route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
        });

        http.get('api/Articles/' + this.id).subscribe(result => {
            this.article = result.json() as IArticle;
        });
    }
}
