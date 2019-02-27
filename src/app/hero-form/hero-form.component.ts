import { Component } from '@angular/core';
import {AppComponent} from '../app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  private accessPointUrl = 'https://localhost:5001/api/users';
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
    try {
      const payload = this.Email + '?' + this.Pass;
      this.http.post(
        this.accessPointUrl,
        JSON.stringify(payload),
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          if (result === true) {
            this.comp.DisplayLogin = false;
            this.comp.LoggedIn = true;
          } else {
            this.comp.error = 'Incorrect Email or Password.';
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  Login() {
    try {
      const payload = this.Email + '?' + this.Pass;
      this.http.post(
        this.accessPointUrl + '/verify',
        JSON.stringify(payload),
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          if (result === true) {
            this.comp.DisplayLogin = false;
            this.comp.LoggedIn = true;
          } else {
            this.comp.error = 'Incorrect Email or Password.';
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }


}
