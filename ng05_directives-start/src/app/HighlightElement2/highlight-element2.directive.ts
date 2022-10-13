import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightElement2]'
})
export class HighlightElement2Directive implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor: string = 'transparent';
  @Input() highlightedColor: string = 'blue   ';

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {
   }


  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

 // you can use all dom events
 // for a list visit:  https://www.w3schools.com/jsref/dom_obj_event.asp
  @HostListener('mouseenter') addStyle(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange')
    this.backgroundColor = this.highlightedColor;
  }

  @HostListener('mouseleave') removeStyle(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor;
  }
}
