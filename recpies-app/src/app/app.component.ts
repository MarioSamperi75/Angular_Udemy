import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recpies-app';
  pageDisplayed: string="recipes"

  onChangedPage (page: string) {
    this.pageDisplayed = page;
  }
}
