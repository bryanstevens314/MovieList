import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  constructor(private comp: AppComponent) { }
  @Input() public Collections: object;
  @Input() public LoggedIn: boolean;
  AddingCollection = false;
  keys(): Array<string> {
    return Object.keys(this.Collections);
  }
  AddCollection() {
    if (this.LoggedIn === true) {
      this.Collections[''] = '';
    }
  }
  CreateCollection(event) {
    this.comp.CreateCollection(`${event.target.value}:`);
  }
  CollectionSelected(collection) {
    this.comp.UserSelectedCollection(collection);
  }
}
