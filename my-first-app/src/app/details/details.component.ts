import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  areDetailsVisible = true;
  counterArray = [];

  constructor() { 
  }

  ngOnInit(): void {
  }

  toggleDetails () {
    this.counterArray.push(new Date());
    this.areDetailsVisible = !this.areDetailsVisible;
  } 

}
