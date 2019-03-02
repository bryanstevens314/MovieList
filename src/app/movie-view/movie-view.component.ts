import { Component, Input } from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent {

  constructor(private comp: AppComponent) { }
  @Input() public CurrentCollection: object;
  Values(): Array<object> {
    return Object.values(this.CurrentCollection)[0];
  }
  RemoveMovie(imdbID) {
    this.comp.RemoveMovie(imdbID);
  }

}
