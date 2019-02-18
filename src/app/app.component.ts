import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  DisplayLogin = false;

  receiveMessage() {
    {this.DisplayLogin ? this.DisplayLogin = false : this.DisplayLogin = true}
  }


}
