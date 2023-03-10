import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscription: string = "advanced"  


  onSubmit (form: NgForm) {
    console.log("On Submit works!!")
    console.log(form.value)
  }
}
