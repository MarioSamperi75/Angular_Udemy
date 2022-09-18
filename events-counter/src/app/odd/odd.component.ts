import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() counter: number;
  @Input() oddList: number[];

  constructor() { }

  ngOnInit(): void {
  }

}