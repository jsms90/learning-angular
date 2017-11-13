import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat/cat.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {

  cats

  constructor( private catService: CatService ) {}

  ngOnInit() {
    this.cats = this.catService.get()
  }

  handleNewCat(cat) {
    this.catService.push(cat)
    this.cats = this.catService.get()
  }

}
