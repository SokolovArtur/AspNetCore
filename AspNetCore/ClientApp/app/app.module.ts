import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import * as Site from './site/site';
import * as Home from './home/home';
import * as Article from './article/article';
import * as Static from './static/static';
import * as Admin from './admin/admin';

@NgModule({
    bootstrap: [Site.AppComponent ],
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
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
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
export class AppModule {
}
