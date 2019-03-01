import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginSignupComponent} from './login-signup/login-signup.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
