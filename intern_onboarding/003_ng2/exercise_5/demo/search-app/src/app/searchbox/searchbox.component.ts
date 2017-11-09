import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  @Input() suggestions = []
  @Input() term
  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
