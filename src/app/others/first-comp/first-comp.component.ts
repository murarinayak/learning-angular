import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit {

  @Input()
  data = { name: 'Murari' };

  @Output()
  dataChanged: EventEmitter<any> = new EventEmitter();

  name = 'Str';

  counterArr: any[] = [1, 2, 3, 4];
  myObj = { color: this.counterArr.length > 5 ? 'green' : 'red', fontSize: '50px'  };
  constructor() { }

  ngOnInit() {
    this.dataChanged.subscribe(eventData => {
      console.log('Event', eventData);
    });
  }

  changeName(newName: string) {
    // this.name = newName || 'Sanjay';
    // alert(newName);
    console.log('name changed');
    this.dataChanged.emit('325346');
    // this.counterArr.push(5);
    this.counterArr = [...this.counterArr, 5];
    this.counterArr.unshift(6);
    // this.counterArr =
    this.counterArr.splice(1, 0, 7, 8);
  }

}
