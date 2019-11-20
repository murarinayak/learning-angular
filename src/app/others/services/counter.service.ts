import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = 1;

  constructor() { }

  addCount() {
    this.counter++;
    console.log('counter', this.counter);
  }

  getCount() {
    return this.counter;
  }
}
