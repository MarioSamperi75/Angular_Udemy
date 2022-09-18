import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddList : number[] = [];
  evenList : number[] = [];
  title = 'events-counter';

  onStreamStarted(updatedCounter:number){ 
    
    if (updatedCounter%2 === 1) {
      this.oddList.push(updatedCounter);
    }
    else {
      this.evenList.push(updatedCounter)
    }
  }
}
