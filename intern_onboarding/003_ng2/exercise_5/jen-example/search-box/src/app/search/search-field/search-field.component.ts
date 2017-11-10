import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  @Output() search = new EventEmitter;
  @Input() term = "";
  @Input() placeholderText:string;
  
  constructor() { }

  ngOnInit() {
  }

}
