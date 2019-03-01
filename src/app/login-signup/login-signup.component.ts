import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent {

  constructor(private comp: AppComponent) { }

  Dismiss() {
    this.comp.DismissLogin();
  }
}
