import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
 @Input() element : {type: string, name: string, content: string};


 @ViewChild('heading', {static: true}) headers : ElementRef; 
 @ContentChild('paragraphReference', {static: true}) paragraph : ElementRef; 
 
  constructor() {
    console.log('constructor called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text: ' + this.headers.nativeElement.textContent)
    console.log('Paragraph: ' + this.paragraph.nativeElement.textContent)
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
   }
  
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('Text: ' + this.headers.nativeElement.textContent)  
    console.log('Paragraph: ' + this.paragraph.nativeElement.textContent)
}
}
