import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchFieldComponent } from './search/search-field/search-field.component';
import { SearchSuggestionsComponent } from './search/search-suggestions/search-suggestions.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchFieldComponent,
    SearchSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
