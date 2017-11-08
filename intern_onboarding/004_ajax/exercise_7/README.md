# Angular 2 - Exercise 6 - AJAX

Duration: 20 minutes

In this section, we will use TypeScript to compose an AJAX service.

This service wishes to connect to the internet (localhost), and so needs to be able to talk to http. In order to do this we need to inject the necessary HTTP services into our app module.

First import the HTTP module and make it available to our app by adding it to the global module (`app.module.ts`). I'm importing the forms module here too for good measure.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FlickrComponent } from './flickr/flickr.component';
import { FlickrService } from './flickr.service';

@NgModule({
  declarations: [
    AppComponent,
    FlickrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## Creating the Service and Making it Injectable

Now we can create our service. Here is a super simple weather.service.ts that connects to open weathermap.org

```
import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {
  }
  get(location:string) {
    var url = [
      "http://api.openweathermap.org/data/2.5/weather?q=",
      location,
      "&APPID=57d36da6b8187a992393dc6a0f4c96c3"].join('')

    return this.http.get(url)
      .map((res) => res.json());
  }
}
```

Notice the @Injectable decorator. This is essentially an empty decorator. TypeScript will only emit typing metadata if there is a decorator that might depend on it. Using this decorator forces TypeScript to emit the metadata, which allows Angular to determine the types for injection later.

## Injecting the Service

Now we have our service, we can inject it into a weather component (`weather.component.ts`).

We add it to the list of Providers. This makes it injectable. Then we just inject it into our component:

```
import {Component} from '@angular/core';
import {WeatherService} from './weather.service';

@Component({
    selector: 'weather',
    template: `
      <pre>{{weather | json}}</pre>
    `,
    directives: [],
    providers: [WeatherService]

})
export class WeatherComponent {
  constructor(public weather: WeatherService) {
    var vm = this;
    this.weather.get(this.loc)
      .subscribe(data => {
        this.weather = data;
      });
    }
  }
}
```

## Challenge


You built a simple API yesterday. Write a service that can connect to it please. Then render the result in your browser in whatever way you see fit.


## Ultra challenge

You should have an endpoint to add a post. Write a method in your service that will receive an object, and post it up to the service. Very nice.

Wire it up to a form. For bonus points, make it so that the form is not always visible, it appears when you click a button, then goes away again. Well hooray, that's Angular!


## Notes to Instructor

You will need to explain AJAX, CORS and JSONP
