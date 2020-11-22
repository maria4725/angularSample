import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { LcComponent } from './lc/lc.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Test1Component } from './test1/test1.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';
import { DummyComponent } from './dummy/dummy.component';
import { LanguagePipe } from './language.pipe';
import { CurrencyPipe } from './currency.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SanitizePipe } from './others/sanitize.pipe';
import { FootComponent } from './foot/foot.component';
import { TviewComponent } from './tview/tview.component';
import { IronmanComponent } from './ironman/ironman.component';
import { HomeComponent } from './home/home.component';

import { CardhoverComponent } from './cardhover/cardhover.component';
import { ContactComponent } from './contact/contact.component';
import { PostcardComponent } from './postcard/postcard.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { EcomComponent } from './ecom/ecom.component';
import { ChartComponent } from './chart/chart.component';
// import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    ErrorComponent,
    LcComponent,
    PaginationComponent,
    Test1Component,
    LeftmenuComponent,
    UserlistComponent,
    UserviewComponent,
    DummyComponent,
    LanguagePipe,
    CurrencyPipe,
    DashboardComponent,
    SanitizePipe,
    FootComponent,
    TviewComponent,
    IronmanComponent,
    HomeComponent,
    CardhoverComponent,
    ContactComponent,
    PostcardComponent,
    MoviecardComponent,
    EcomComponent,
    // ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbCollapseModule,
    HttpClientModule,
    // ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class AppBootstrapModule {}
