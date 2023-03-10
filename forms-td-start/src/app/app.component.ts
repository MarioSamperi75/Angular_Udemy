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
  user = {
    username: "",
    mail: "", 
    secretQuestion: "", 
    answer: "", 
    gender: "", 
  }
  submitted = false;

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
    this.user = {
      username: this.signupForm.value.userData.username,
      mail: this.signupForm.value.userData.email, 
      gender: this.signupForm.value.userData.gender, 
      secretQuestion: this.signupForm.value.secret, 
      answer: this.signupForm.value.answer
    }
    this.submitted = true;

    // not just cleaning 
    // that will also set the torm back to untouched
    this.signupForm.reset();
  }


}
