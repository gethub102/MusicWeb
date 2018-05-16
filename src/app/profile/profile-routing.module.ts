import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { ShowProfileComponent } from './show-profile/show-profile.component';

const profileRoutes: Routes = [
  {path: 'create-profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: 'show-profile', component: ShowProfileComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
