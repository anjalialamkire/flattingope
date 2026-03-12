import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  SHOWS_URL : string = environment.SHOW_BASE_URL
  SEARCH_URL :string = `${this.SHOWS_URL}/search/shows`

  constructor(private _http :HttpClient) { }

  fetchSearchShows(query : string){
      let params = new HttpParams().set('q',query)
     return this._http.get(this.SEARCH_URL
      ,{params})
  }
}
