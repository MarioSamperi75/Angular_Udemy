import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : "[appHighlightElement]"
})
export class HighlightElement implements OnInit{
    constructor (private elementRef: ElementRef){
    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green'
    }

}
