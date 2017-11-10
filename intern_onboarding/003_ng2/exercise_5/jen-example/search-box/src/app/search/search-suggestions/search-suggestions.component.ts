import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-suggestions',
  templateUrl: './search-suggestions.component.html',
  styleUrls: ['./search-suggestions.component.scss'],
})
export class SearchSuggestionsComponent implements OnInit {
  @Output() search = new EventEmitter;
  @Input() term:string;
  
  constructor() { }

  ngOnInit() {
  }

}