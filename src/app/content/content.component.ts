import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {

  constructor(private comp: AppComponent) { }
  @Input() public CurrentCollection: Array<string>;
  @Input() public SearchResults: Array<string>;
  @Input() public Collections: object;
  @Input() public LoggedIn: boolean;
  Login() {
    this.comp.ReceiveMessage();
  }
  Logout() {
    this.comp.Logout();
  }

}
