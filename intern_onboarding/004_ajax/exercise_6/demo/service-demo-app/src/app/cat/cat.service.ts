import { Injectable } from '@angular/core';

@Injectable()
export class CatService {

  private cats = [
    'Monty',
    'Blanco',
    'Arthur',
    'Fatso',
    'Doom'
  ]

  get() {
    return this.cats;
  }

  push(cat) {

  }

}
