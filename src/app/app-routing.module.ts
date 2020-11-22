import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LcComponent } from './lc/lc.component';
import { PaginationComponent } from './pagination/pagination.component';
import { Test1Component } from './test1/test1.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';
import { TviewComponent } from './tview/tview.component';
import { DummyComponent } from './dummy/dummy.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { CardhoverComponent } from './cardhover/cardhover.component';
import { ContactComponent } from './contact/contact.component';
import { PostcardComponent } from './postcard/postcard.component';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { EcomComponent } from './ecom/ecom.component';
// import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'lc', component: LcComponent },
  { path: 'pagination', component: PaginationComponent},
  { path: 'test1', component: Test1Component, canActivate: [AuthGuard] },
  { path: 'userlist', component: UserlistComponent },
  { path: 'userview', component: UserviewComponent },
  { path: 'dummy', component: DummyComponent },
  { path: 'tabview', component: TviewComponent },
  { path: '', component: HomeComponent },
  { path: 'cardhover', component: CardhoverComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'postcard', component: PostcardComponent },
  { path: 'moviecard', component: MoviecardComponent },
  { path: 'ecommerce', component: EcomComponent },
  // { path: 'chart', component: ChartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
