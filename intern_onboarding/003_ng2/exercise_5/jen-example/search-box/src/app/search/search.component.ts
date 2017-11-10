import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter;
  @Input() term = "";
  @Input() placeholderText:string;
  
  constructor() { }

  ngOnInit() {
  }

}
