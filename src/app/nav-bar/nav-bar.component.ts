import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Output() messageEvent = new EventEmitter<boolean>();

  CreateList():void{

  }

  ViewLists():void{

  }

  Login():void{
    this.messageEvent.emit()
  }

}
