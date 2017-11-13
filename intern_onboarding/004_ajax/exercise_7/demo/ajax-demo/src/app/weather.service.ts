import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  number = Math.random();

  constructor(private http: Http) { }

  get() {
  	let url = "http://api.openweathermap.org/data/2.5/weather?q=krakow&APPID=57d36da6b8187a992393dc6a0f4c96c3"

  	return this.http.get(url)
  		.map((data) => data.json())
  }
}
