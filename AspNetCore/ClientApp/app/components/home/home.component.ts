import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { IArticle } from './../../interfaces/iarticle';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    public articles: IArticle[];

    constructor(http: Http) {
        http.get('api/Articles').subscribe(result => {
            this.articles = result.json() as IArticle[];
        });
    }
}
