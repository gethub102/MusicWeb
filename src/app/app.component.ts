import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  ngOnInit() {

  }

  // onSubmit(form: NgForm) {
  //   console.log('submitting ...');
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
