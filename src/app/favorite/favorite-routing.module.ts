import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FavoriteComponent } from './favorite.component';
import { AuthGuardService } from '../auth/auth-guard.service';

const favoriteRoutes: Routes = [
  {path: 'favorite', component: FavoriteComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [
    RouterModule.forChild(favoriteRoutes)
  ],
  exports: [RouterModule]
})
export class FavoriteRoutingModule {

}
