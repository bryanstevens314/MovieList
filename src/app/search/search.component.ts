import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private httpClient: HttpClient) {}
  SearchResults = [];
  Collections = [];
  DisplayCollections = false;
  PerformSearch(form) {
    try {
      this.httpClient.get('https://www.omdbapi.com/?apikey=6c3999b3&s=' + form.target.value).subscribe((res?: any) => {
        console.log(res);
        if (res.Search) {
          this.SearchResults = res.Search;
        } else {
          this.SearchResults = null;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }
  MovieClicked(id) {
    this.DisplayCollections = true;
  }
  ClearSearch() {
    this.SearchResults = [];
  }
  async SaveCollection(list_name, imdbID) {
    try {
      const response = await axios.post('api/collections', {
        list_name,
        uid: 0,
        imdbID
      });
      if (response) {
        this.DisplayCollections = false;
      }
    } catch (err) {
      console.log(err);
    }
  }
  CloseCollections(){
    this.DisplayCollections = false;
  }
}
