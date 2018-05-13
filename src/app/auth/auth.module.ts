import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SiginComponent,
    SigupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {

}
