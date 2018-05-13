import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';

const authRoutes: Routes = [
  {path: 'sigin', component: SiginComponent},
  {path: 'sigup', component: SigupComponent},
  {path: '**', redirectTo: '/page-not-found'}
];


@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {

}
