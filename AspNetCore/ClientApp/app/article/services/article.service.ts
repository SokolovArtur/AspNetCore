import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IArticle } from './../article';

@Injectable()
export class ArticleService {
    private URL: string = 'api/Articles';

    constructor(private http: Http) { }

    public list(): Observable<IArticle[]> {
        return this.http.get(this.URL)
            .map(data => {
                return data.json() as IArticle[];
            });
    }

    public details(id: number): Observable<IArticle> {
        var url: string = this.URL + '/' + id;

        return this.http.get(url)
            .map(data => {
                return data.json() as IArticle;
            });
    }

    public create(article: IArticle): Observable<Response> {
        return this.http.post(this.URL, article);
    }

    public edit(article: IArticle): Observable<Response> {
        var url: string = this.URL + '/' + article.id;

        return this.http.put(url, article);
    }

    public delete(id: number): Observable<Response> {
        var url: string = this.URL + '/' + id;

        return this.http.delete(url);
    }
}
