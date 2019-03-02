import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/core/src/render3/util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private accessPointUrl = 'https://localhost:5001/api/users';
  private collectionUrl = 'https://localhost:5001/api/collections';
  private OMDBUrl = 'https://www.omdbapi.com/?apikey=6c3999b3&i=';
  private timer;
  constructor( private http: HttpClient) {}
  CurrentCollection = {};
  SearchResults = [];
  Collections = {};
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
          console.log(result);
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
    this.SearchResults = [];
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
          this.CurrentCollection = {};
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
  UserSelectedCollection(collection) {
    this.CurrentCollection = {};
    this.Collections[collection].split(',').map(imdbID => {
      if (imdbID !== '') {
        this.FetchMovieFromOMDB(collection,imdbID);
      }
    });
  }
  FetchMovieFromOMDB(collection, imdbID) {
    try {
      this.http.get(this.OMDBUrl + imdbID).subscribe(
        result => {
          if (result) {
            if (!this.CurrentCollection[collection]) {
              this.CurrentCollection[collection] = [];
            }
            this.CurrentCollection[collection].push(result);
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  UpdateCollections(payload) {
    this.http.post(
      this.collectionUrl,
      JSON.stringify(payload),
      {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          if (result === true) {
            this.RetrieveCollections();
            this.timer = setTimeout(() => {
              const collection = Object.keys(this.CurrentCollection)[0];
              this.UserSelectedCollection(collection);
            }, 500);

          }
        }
    );
  }
  RemoveMovie(imdbID) {
    try {
      const collection = Object.keys(this.CurrentCollection)[0];
      const URL = `${this.collectionUrl}?collection=${collection}&imdbID=${imdbID}`;
      this.http.delete(
        URL,
        {headers: {'Content-Type': 'application/json'}}).subscribe(
        result => {
          this.RetrieveCollections();
          this.timer = setTimeout(() => {
            this.UserSelectedCollection(collection);
          }, 500);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
}
