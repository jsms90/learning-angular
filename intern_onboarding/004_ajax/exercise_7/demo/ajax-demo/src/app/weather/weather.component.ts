import { Component, OnInit } from '@angular/core';


import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

	weather

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  	this.getWeather();
  }

  getWeather() {
  	this.weatherService.get()
  		.subscribe((data) => {
  			this.weather = data;
  		});
  }

}
