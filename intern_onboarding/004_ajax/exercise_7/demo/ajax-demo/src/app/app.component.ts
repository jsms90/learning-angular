import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  url = "http://api.openweathermap.org/data/2.5/weather?q=krakow&APPID=57d36da6b8187a992393dc6a0f4c96c3"
  //AJAX goes here!!!
}
