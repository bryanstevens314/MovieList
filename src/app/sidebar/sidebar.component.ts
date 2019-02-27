import { Component, OnInit, Input } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  @Input() public Collections: object;
  AddingCollection = false;
  constructor(private comp: AppComponent) { }
  ngOnInit() { }
  AddCollection() {
    this.Collections[''] = '';
  }
  CreateCollection(event) {
    this.comp.CreateCollection(event.target.value);
  }
  keys() : Array<string> {
    return Object.keys(this.Collections);
  }
}
