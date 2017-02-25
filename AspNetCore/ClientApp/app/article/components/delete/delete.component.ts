import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IArticle, ArticleService } from './../../article';

@Component({
    selector: 'delete',
    template: require('./delete.component.html')
})
export class DeleteComponent {
    public error: boolean = false;

    public article: IArticle;

    private articleService: ArticleService;

    constructor(private http: Http, private route: ActivatedRoute, private router: Router) {
        this.articleService = new ArticleService(http);

        this.articleService.details(this.getId()).subscribe(data => {
            this.article = data;
        });
    }

    onDelete() {
        var id: number = this.getId();

        this.articleService.delete(id).subscribe(
            data => {
                return this.router.navigateByUrl('/admin/article');
            },
            error => {
                this.error = true;
            }
        );
    }

    public getId(): number {
        var id: number;
        this.route.params.subscribe(params => {
            id = +params['id']; // (+) converts string 'id' to a number
        });
        return id;
    }
}
