import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.fontSize') myFont = '40px';

  constructor(private element: ElementRef, private renderer: Renderer2, private myService: CounterService) {
  }

  @HostListener('mouseover')
  customMoseOverEvent() {
    console.log('came here');
    const colors = ['red', '#00FF00', 'blue'];
    const count = Math.round(Math.random() * 300 / 100);
    // console.log('count', count);
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', colors[count]);
    this.renderer.setStyle(this.element.nativeElement, 'fontSize', '32px');

    this.myService.addCount();
    // this.renderer.setValue(this.element.nativeElement.innerText, this.myService.getCount().toString());
    this.element.nativeElement.innerText = this.myService.getCount().toString();
  }


  ngOnInit() {
    // this.element.nativeElement.style.backgroundColor =  '#FF0000';
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
  }

}
