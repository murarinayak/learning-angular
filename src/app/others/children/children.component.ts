import { Component, OnInit, AfterViewInit, AfterContentChecked,
  ViewChild, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked {

  @ViewChild('myinp', { static: false }) myinp: ElementRef;
  @ContentChild('content', { static: false}) childContent: ElementRef;

  constructor(public myService: CounterService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.myinp.nativeElement.value = 'Some text';
  }
  ngAfterContentInit() {
  console.log('h2', this.childContent);
  }

  ngAfterContentChecked() {
  console.log('h2', this.childContent);

  }

  
}
