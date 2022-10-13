import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HighlightElement} from "./HighLightElement/HighlightElement";


import { AppComponent } from './app.component';
import { HighlightElement2Directive } from './HighlightElement2/highlight-element2.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightElement,
    HighlightElement2Directive
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
