import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../app.component';
import axios from 'axios';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  Collections = [];
  constructor(private comp: AppComponent) { }
  ngOnInit() { }
  AddCollection() {
    this.Collections.push({
      list_name: null
    });
  }
  CreateCollection(event) {
    axios.post('api/collections', {
      list_name: event.target.value
    });
  }
}
