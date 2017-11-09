import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-suggestions',
  templateUrl: './search-suggestions.component.html',
  styleUrls: ['./search-suggestions.component.scss']
})
export class SearchSuggestionsComponent implements OnInit {

  @Output() search = new EventEmitter()

  @Input() suggestions = []
  @Input() term

  constructor() { }

  ngOnInit() {
  }

}
