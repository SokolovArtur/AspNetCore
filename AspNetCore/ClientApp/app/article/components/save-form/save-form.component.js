"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var article_1 = require("./../../article");
var SaveFormComponent = (function () {
    function SaveFormComponent(http, route, router) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.articleService = new article_1.ArticleService(http);
        var id = this.getId();
        if (id > 0) {
            this.articleService.details(id).subscribe(function (data) {
                _this.article = data;
            });
        }
        else {
            this.article = new article_1.Article(0, '');
        }
    }
    SaveFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var id = this.getId();
        if (id > 0) {
            this.article.id = id;
            this.articleService.edit(this.article).subscribe(function (data) {
                return _this.router.navigateByUrl('/admin/article');
            }, function (error) {
                _this.error = error.json();
            });
        }
        else {
            this.articleService.create(this.article).subscribe(function (data) {
                return _this.router.navigateByUrl('/admin/article');
            }, function (error) {
                _this.error = error.json();
            });
        }
    };
    SaveFormComponent.prototype.getId = function () {
        var id;
        this.route.params.subscribe(function (params) {
            id = +params['id']; // (+) converts string 'id' to a number
        });
        return id;
    };
    return SaveFormComponent;
}());
SaveFormComponent = __decorate([
    core_1.Component({
        selector: 'save-form',
        template: require('./save-form.component.html')
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_2.Router])
], SaveFormComponent);
exports.SaveFormComponent = SaveFormComponent;
//# sourceMappingURL=save-form.component.js.map