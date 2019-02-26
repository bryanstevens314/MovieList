import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {

  constructor() { }
  title = 'World';

  Login() {
    console.log('HERE');
  }

}
