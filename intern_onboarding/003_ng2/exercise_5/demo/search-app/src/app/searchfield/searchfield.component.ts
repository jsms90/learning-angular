import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchfieldComponent implements OnInit {

  @Input() term;
  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
