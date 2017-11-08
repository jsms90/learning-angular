import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cats are Cool!!';
  isDisabled = false;
  txt = 'cats';
  count = 0;
  x = 0
  y = 0

  constructor() {
  	setInterval(() => {
  		this.txt += " cats"
  	}, 5000);
  }

  handleMousemove(evt) {
  	this.x = evt.pageX;
  	this.y = evt.pageY;
  }
}
