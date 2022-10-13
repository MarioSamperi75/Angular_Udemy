import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightElement2]'
})
export class HighlightElement2Directive implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2 ) {

   }
  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'orange')
  }

 

}
