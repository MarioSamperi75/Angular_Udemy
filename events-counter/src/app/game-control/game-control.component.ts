import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer: any;
  counter : number = 0; 
  @Output() streamEvent=  new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStartEvents(){
    this.timer = setInterval((()=>{
      this.counter = this.counter + 1;
      this.streamEvent.emit(this.counter);
    }), 1000);
  }

  onStopEvents(){
    clearInterval(this.timer);
  }

}
