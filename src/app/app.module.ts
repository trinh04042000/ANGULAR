import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthService} from './auth.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ResponseResetComponent } from './response-reset/response-reset.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { RequestResetComponent } from './request-reset/request-reset.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CartModalComponent } from './cart-modal/cart-modal.component';
@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        SignupComponent,
        HomeComponent,
        NavBarComponent,
        FooterComponent,
        CardComponent,
        ProductComponent,
        HeaderComponent,
        SearchProductComponent,
        ProductDetailComponent,
        ResponseResetComponent,
        RequestResetComponent,
        SpinnerComponent,
        CartModalComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        SnotifyModule,
        NgxPaginationModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [AuthService, { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
        SnotifyService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
