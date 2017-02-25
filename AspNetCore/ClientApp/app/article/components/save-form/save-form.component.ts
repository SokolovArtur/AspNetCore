import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Article, IArticle, IArticleError, ArticleService } from './../../article';

@Component({
    selector: 'save-form',
    template: require('./save-form.component.html')
})
export class SaveFormComponent {
    public article: IArticle;

    public error: IArticleError;

    private articleService: ArticleService;

    constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
        this.articleService = new ArticleService(http);

        var id: number = this.getId();
        if (id > 0) {
            this.articleService.details(id).subscribe(data => {
                this.article = data;
            });
        } else {
            this.article = new Article(0, '');
        }
    }

    public onSubmit() {
        var id: number = this.getId();
        if (id > 0) {
            this.article.id = id;
            this.articleService.edit(this.article).subscribe(
                data => {
                    return this.router.navigateByUrl('/admin/article');
                },
                error => {
                    this.error = error.json() as IArticleError;
                }
            );
        } else {
            this.articleService.create(this.article).subscribe(
                data => {
                    return this.router.navigateByUrl('/admin/article');
                },
                error => {
                    this.error = error.json() as IArticleError;
                }
            );
        }
    }

    public getId(): number {
        var id: number;
        this.route.params.subscribe(params => {
            id = +params['id']; // (+) converts string 'id' to a number
        });
        return id;
    }
}
