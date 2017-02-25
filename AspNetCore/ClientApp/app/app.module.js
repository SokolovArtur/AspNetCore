"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var angular2_universal_1 = require("angular2-universal");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var Site = require("./site/site");
var Home = require("./home/home");
var Article = require("./article/article");
var Static = require("./static/static");
var Admin = require("./admin/admin");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [Site.AppComponent],
        declarations: [
            Site.AppComponent,
            Site.ErrorComponent,
            Home.AppComponent,
            Home.AppBarComponent,
            Home.FooterStickyComponent,
            Article.TilesComponent,
            Article.PublicArticleComponent,
            Static.AboutComponent,
            Static.ContactComponent,
            Admin.AppComponent,
            Admin.LeftMenuComponent,
            Article.ArticlesTableComponent,
            Article.SaveFormComponent,
            Article.DlItemComponent,
            Article.DetailsItemComponent,
            Article.DeleteComponent
        ],
        imports: [
            angular2_universal_1.UniversalModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    component: Home.AppComponent,
                    children: [
                        { path: '', component: Article.TilesComponent },
                        { path: 'article/:id', component: Article.PublicArticleComponent },
                        { path: 'about', component: Static.AboutComponent },
                        { path: 'contact', component: Static.ContactComponent }
                    ]
                },
                {
                    path: 'admin',
                    component: Admin.AppComponent,
                    children: [
                        { path: '', redirectTo: 'article', pathMatch: 'full' },
                        { path: 'article', component: Article.ArticlesTableComponent },
                        { path: 'article/create', component: Article.SaveFormComponent },
                        { path: 'article/edit/:id', component: Article.SaveFormComponent },
                        { path: 'article/details/:id', component: Article.DetailsItemComponent },
                        { path: 'article/delete/:id', component: Article.DeleteComponent }
                    ]
                },
                { path: 'error', component: Site.ErrorComponent },
                { path: '**', component: Site.ErrorComponent },
            ])
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map