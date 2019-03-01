import { Component, OnInit } from '@angular/core';
import {SearchComponent} from './search/search.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchComponent]
})
export class AppComponent implements OnInit {

  private accessPointUrl = 'https://localhost:5001/api/users';
  private collectionUrl = 'https://localhost:5001/api/collections';
  constructor(private SearchComp: SearchComponent, private http: HttpClient) {}
  Collections = {};
  SearchResults;
  DisplayLogin = false;
  LoggedIn = false;
  error;
  ngOnInit() {
    try {
      this.http.get(
        this.accessPointUrl,
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          console.log(result);
          if (result === true) {
            this.LoggedIn = true;
            this.RetrieveCollections();
          } else {
            this.error = "Incorrect Email or Password."
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  RetrieveCollections() {
    try {
      this.http.get(
        this.collectionUrl,
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          this.Collections = result;
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  ReceiveMessage() {
    {this.DisplayLogin ? this.DisplayLogin = false : this.DisplayLogin = true; }
  }
  Clicked() {
    this.SearchComp.ClearSearch();
  }
  DismissLogin() {
    this.DisplayLogin = false;
  }
  Signup(Email, Pass) {
    try {
      const payload = JSON.stringify(Email + '?' + Pass);
      this.http.post(
        this.accessPointUrl,
        payload,
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          if (result === true) {
            this.DisplayLogin = false;
            this.LoggedIn = true;
          } else {
            this.error = 'Incorrect Email or Password.';
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  Login(Email, Pass) {
    try {
      const payload = JSON.stringify(Email + '?' + Pass);
      this.http.post(
        this.accessPointUrl + '/verify',
        payload,
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          if (result === true) {
            this.DisplayLogin = false;
            this.LoggedIn = true;
            this.RetrieveCollections();
          } else {
            this.error = 'Incorrect Email or Password.';
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  Logout() {
    try {
      this.http.delete(
        this.accessPointUrl,
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          this.Collections = {};
          this.LoggedIn = false;
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  CreateCollection(list_name) {
    try {
      this.http.post(
        this.collectionUrl,
        JSON.stringify(list_name),
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          if (result === true) {
            this.RetrieveCollections();
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
}
