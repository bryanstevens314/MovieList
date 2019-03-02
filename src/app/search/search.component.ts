import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private httpClient: HttpClient, private comp: AppComponent) {}
  @Input() public Collections: object;
  @Input() public SearchResults: Array<string>;
  SelectedMovie;
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
    let payload = '';
    Object.values(event.target).map(element => {
      if (element['checked'] && element['checked'] === true) {
        if (payload === '') {
          payload += `${element['value']}:${this.SelectedMovie}`;
        } else {
          payload += `,${element['value']}:${this.SelectedMovie}`;
        }
      }
    });
    this.SelectedMovie = null;
    this.comp.UpdateCollections(payload);
  }
  CloseCollections() {
    this.SelectedMovie = null;
  }
}
