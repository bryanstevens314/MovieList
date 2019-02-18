import { Component,ViewChild } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private httpClient: HttpClient){}
  @ViewChild(NavBarComponent) child;
  title = 'World';
  DisplayLogin = false;
  SearchResults;

  receiveMessage() {
    {this.DisplayLogin ? this.DisplayLogin = false : this.DisplayLogin = true}
  }

  performSearch(form){
    try{
      this.httpClient.get('https://www.omdbapi.com/?apikey=6c3999b3&s=' + form.target.value).subscribe((res?:any)=>{
        console.log(res);
        if(res.Search){
          this.SearchResults = res.Search;
        }
        else{
          this.SearchResults = null;
        }
    });
    }catch(error){
      console.log(error);
    }

  }
}
