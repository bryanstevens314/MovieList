import { Component, Input, Output, EventEmitter } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {

  constructor(private comp: AppComponent) { }
  @Input() public LoggedIn: boolean;
  @Input() public Collections: object;
  @Input() public SearchResults: Array<string>;
  @Input() public CurrentCollection: Array<string>;
  Login() {
    this.comp.ReceiveMessage();
  }
  Logout() {
    this.comp.Logout();
  }

}
