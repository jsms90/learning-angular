import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatService } from './cat/cat.service';

@NgModule({
  declarations: [
    AppComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ CatService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
