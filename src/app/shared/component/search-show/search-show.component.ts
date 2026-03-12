import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.scss']
})
export class SearchShowComponent implements OnInit {
  SearchControl : FormControl<any>= new FormControl()
  
  constructor(
    private _searchService : SearchService
  ) { }

  ngOnInit(): void {
    this.onSearch()
  }

  onSearch(){
    this.SearchControl.valueChanges
    .pipe(
      debounceTime(400),
      distinctUntilChanged(),
        switchMap(val =>{
          return this._searchService.fetchSearchShows(val)
        })
    )
    .subscribe({
      next : data =>{
        console.log(data);
        
      }
    })
  }

}
