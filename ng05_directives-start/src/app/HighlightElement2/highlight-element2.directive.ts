import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightElement2]'
})
export class HighlightElement2Directive implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = "transparent";

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {
   }


  ngOnInit() {
  }

 // you can use all dom events
 // for a list visit:  https://www.w3schools.com/jsref/dom_obj_event.asp
  @HostListener('mouseenter') addStyle(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange')
    this.backgroundColor = "LightGreen";
  }

  @HostListener('mouseleave') removeStyle(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = "transparent";
  }
}
