import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];
  defaultGender = 'male';
  // useful if you need to get values before submitting
  @ViewChild('form') signupForm: NgForm;
  defaultValue: string = "pet";
  answer: string = "";

  suggestUserName() {
    const suggestedName = 'Superuser';

    //setValue overrides the whole object
/*     this.signupForm.setValue({
        "userData": {
            "username": suggestedName,
            "email": "default75@gmail.com",
            "gender": "female"
        },
        "secret": "teacher",
        "questionAnswer": ""
    }) */

    //patch value changes just specific fields
    this.signupForm.form.patchValue({
      "userData": {
          "username": suggestedName,
      }
  })


  }

  // onSubmit(form: NgForm){
  //   console.log(form.value);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }


}
