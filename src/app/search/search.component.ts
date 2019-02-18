import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private httpClient: HttpClient){}
  SearchResults;

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
