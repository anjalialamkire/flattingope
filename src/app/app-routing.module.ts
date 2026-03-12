import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { ProductSearchComponent } from './shared/component/product-search/product-search.component';
import { SearchService } from './service/search.service';
import { SearchShowComponent } from './shared/component/search-show/search-show.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'',
    component:HomeComponent
  },{
    path : 'product-search',
    component:ProductSearchComponent
  },
  {
    path:'search-show',
    component:SearchShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
