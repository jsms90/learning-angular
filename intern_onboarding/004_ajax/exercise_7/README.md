# Angular 2 - Exercise 7 - AJAX

Duration: 20 minutes

In this section, we make an AJAX service.

This service wishes to connect to the internet, and so needs to be able to talk to http. In order to do this we need to inject the necessary HTTP services into our app module.

First import the HTTP module and make it available to our app by adding it to the global module (`app.module.ts`).

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```


## Creating the Service and Making it Injectable

Now we can create our service. Here is a super simple weather.service.ts that connects to open weathermap.org

```
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

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

You can make a service with `ng generate service servicename`

Notice the @Injectable decorator. This is essentially an empty decorator. Using this decorator forces TypeScript to store typing metadata, which allows Angular to determine the types for injection later.


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

* Implement the above. Try to get the weather and render it in some nice way, ideally with pictures.
* If you are feeling adventurous, add an input box and button. When you press the button, it will search. You will need to google ngOnChanges to solve this.



## Notes to Instructor

You will need to explain AJAX, CORS and JSONP
