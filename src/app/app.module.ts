import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { SearchShowComponent } from './shared/component/search-show/search-show.component';
import { ProductSearchComponent } from './shared/component/product-search/product-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './shared/component/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchShowComponent,
    ProductSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
