import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './componentest/home-page/home-page.component';
import { LoginPageComponent } from './componentest/login-page/login-page.component';
import { RegisterPageComponent } from './componentest/register-page/register-page.component';
import { NotFoundPageComponent } from './componentest/not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminPageComponent } from './componentest/admin-page/admin-page.component';

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'admin', component: AdminPageComponent, canActivate: [AuthGuard]},
  {path:'**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
