import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../app.component';

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
    this.comp.CreateCollection(event.target.value);
  }
}
