import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  authStatus = true;

  constructor() {
  }

  login() {
    this.authStatus = true;
  }

  logout() {
    this.authStatus = false;
  }

  isAuthenticated() {
    return this.authStatus;
  }
}
