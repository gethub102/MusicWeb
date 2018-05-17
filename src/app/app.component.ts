import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import {EnvironmentVarService} from './environment.var.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private env: EnvironmentVarService) {}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: this.env.apiKey,
      authDomain: this.env.authDomain
    });
  }
}
