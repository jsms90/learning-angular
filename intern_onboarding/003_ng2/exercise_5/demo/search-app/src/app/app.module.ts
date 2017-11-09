import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchfieldComponent } from './searchfield/searchfield.component';
import { SearchSuggestionsComponent } from './search-suggestions/search-suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    SearchboxComponent,
    SearchfieldComponent,
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
