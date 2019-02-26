import { Component, ViewChild, OnInit } from '@angular/core';
import {SearchComponent} from './search/search.component';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchComponent]
})
export class AppComponent implements OnInit {

  constructor(private SearchComp: SearchComponent) {}
  Collections = [];
  SearchResults;
  DisplayLogin = false;
  async ngOnInit() {
    const response = await axios.get('api/collections');
    if (response) {
      this.Collections = response.data;
      this.SearchComp.Collections = response.data;
    }
  }
  ReceiveMessage() {
    {this.DisplayLogin ? this.DisplayLogin = false : this.DisplayLogin = true; }
  }
  Clicked() {
    this.SearchComp.ClearSearch();
  }
}
