import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Products } from 'src/app/model/product';
import { ProudctService } from 'src/app/service/proudct.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
searchControl :FormControl<any> = new FormControl()
productsArr : Products[] =[];
  constructor(
    private _productService : ProudctService
  ) { }

  ngOnInit(): void {
    this.onproductSearch()
  }

  onproductSearch(){
    this.searchControl.valueChanges
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val =>{
        return this._productService.fetchSearchProduct(val)
      })
    )
    .subscribe({
      next : data =>{
        this.productsArr = data.products
      }
    })
  }

}
