import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './myValidators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myForm : FormGroup;
  statuses = ['Stable', 'Critical', 'Finished']

  ngOnInit(): void {
    this.myForm = new FormGroup ({
      'name': new FormControl(null, [Validators.required, MyValidators.invalidName], MyValidators.asyncInvalidName),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl('Critical')
    })
  }

  OnSubmit() {
    console.log(this.myForm.value);
  }
}
