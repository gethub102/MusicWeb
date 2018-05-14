import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';

@Injectable()
export class AuthService {
  token;

  constructor(private router: Router) {
  }

  logout() {
    console.log(this.token);
    firebase.auth().signOut().then(function () {
      console.log('log out success');
    }).catch(function (error) {
      // An error happened.
      console.log(error);
    });
    this.token = null;
    this.router.navigate(['']);
  }

  signupUser(email: string, password: string) {
    firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (resp) => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            ).then(() => {
              this.router.navigate(['/']);
          });
        }
      ).catch((error) => console.log(error));
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
