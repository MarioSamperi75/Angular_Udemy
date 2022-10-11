import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HighlightElement} from "./HighLightElement/HighlightElement";


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightElement
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
