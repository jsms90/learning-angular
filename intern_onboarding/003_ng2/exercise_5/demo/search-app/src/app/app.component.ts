import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	term = 'Cats'

	handleSearch(term) {
		this.term = term
		console.log("search for " + term)
	}
}
