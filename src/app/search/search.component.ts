import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private httpClient: HttpClient) {}
  @Input() public Collections: boolean;
  SelectedMovie;
  SearchResults;
  keys(): Array<string> {
    return Object.keys(this.Collections);
  }
  PerformSearch(form) {
    try {
      this.httpClient.get('https://www.omdbapi.com/?apikey=6c3999b3&s=' + form.target.value).subscribe((res?: any) => {
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
    this.SelectedMovie = id;
  }
  ClearSearch() {
    this.SearchResults = null;
  }
  SaveCollection(event) {
    this.SelectedMovie = null;
    console.log(event);
  }
  CloseCollections() {
    this.SelectedMovie = null;
  }
}
