import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent {

  @Input() cat = {}
  @Output() attack = new EventEmitter()
  @Output() run = new EventEmitter()
}
