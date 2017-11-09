import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	attacker:any
	runAway:any

	tabby = {
		name:"tabby",
		color:'orange',
		weight:'fatso',
		armaments: 'gatling gun'
	}
	shabby = {
		name:"shabby",
		color:'blue',
		weight:'skinny',
		armaments: 'turbo laser'
	}
}
