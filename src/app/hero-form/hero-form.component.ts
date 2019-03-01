import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  constructor(private comp: AppComponent, private http: HttpClient) {}
  Email = '';
  Pass = '';

  EmailChanged(event) {
    this.Email = event.target.value;
  }
  PassChanged(event) {
    this.Pass = event.target.value;
  }
  Signup() {
    this.comp.Signup(this.Email, this.Pass);
  }
  Login() {
    this.comp.Login(this.Email, this.Pass);
  }
  Dismiss() {
    this.comp.DismissLogin();
  }
}
