import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDTt5ZWQVd9cnG0nhBtWFq06DuwDcx-tW4',
      authDomain: 'http-test-217e3.firebaseapp.com'
    });
  }
}
