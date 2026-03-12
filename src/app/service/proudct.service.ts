import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductResponse } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProudctService {
private readonly PRODUCT_BASE_URL : string = environment.PRODUCT_URL
private readonly SEARCH_URL : string = `${this.PRODUCT_BASE_URL}/products/search`
  constructor(
    private _http : HttpClient
  ) { }

  fetchSearchProduct(query : string){
    let params = new HttpParams().set('q',query)
    return this._http.get<ProductResponse>(this.SEARCH_URL,{params})
  }
}
