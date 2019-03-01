import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  constructor() { }
  @Input() public CurrentCollection: Array<string>;
  ngOnInit() {
  }

}
