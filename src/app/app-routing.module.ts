import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {HomeComponent} from './home/home.component';
import {CardComponent} from './card/card.component';
import {ProductComponent} from './product/product.component';
import {SearchProductComponent} from './search-product/search-product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ResponseResetComponent} from './response-reset/response-reset.component';
import {RequestResetComponent} from './request-reset/request-reset.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent},
    {path: 'card', component: CardComponent},
    {path: 'product', component: ProductComponent},
    {path: 'search/:keyword', component: SearchProductComponent},
    {path: 'productDetail/:id', component: ProductDetailComponent},
    {path: 'response-password-reset', component: ResponseResetComponent},
    {path: 'request-reset', component: RequestResetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
