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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var ArticleComponent = (function () {
    function ArticleComponent(route, http) {
        var _this = this;
        route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
        });
        http.get('api/Articles/' + this.id).subscribe(function (result) {
            _this.article = result.json();
        });
    }
    return ArticleComponent;
}());
ArticleComponent = __decorate([
    core_1.Component({
        selector: 'article',
        template: require('./article.component.html')
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, http_1.Http])
], ArticleComponent);
exports.ArticleComponent = ArticleComponent;
//# sourceMappingURL=article.component.js.map