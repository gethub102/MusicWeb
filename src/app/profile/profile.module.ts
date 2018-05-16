import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ShowProfileComponent } from './show-profile/show-profile.component';

@NgModule({
  declarations: [ProfileComponent, ShowProfileComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    CommonModule
  ]
})
export class ProfileModule {

}
