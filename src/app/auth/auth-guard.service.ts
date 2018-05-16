import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { EnvironmentVarService } from '../environment.var.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private env: EnvironmentVarService,
              private route: ActivatedRoute) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.env.prevUrl = state.url;
      console.log('prev url = ' + this.env.prevUrl);
      setTimeout(() => this.router.navigate(['sigin']), 200);
      return false;
    }
  }
}
