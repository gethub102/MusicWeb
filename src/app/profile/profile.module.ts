import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [ProfileRoutingModule]
})
export class ProfileModule {

}
