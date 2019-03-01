import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginSignupComponent} from './login-signup/login-signup.component';
import {AppComponent} from './app.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
