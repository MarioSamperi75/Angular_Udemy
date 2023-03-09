import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // useful you you need to get the values before submitting
  @ViewChild('form') signupForm: NgForm;
  defaultValue: string = "pet";

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm){
  //   console.log(form.value);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }


}
