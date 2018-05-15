import { NgModule } from '@angular/core';
import { FavoriteRoutingModule } from './favorite-routing.module';
import { CommonModule } from '@angular/common';

import { FavoriteComponent } from './favorite.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FavoriteRoutingModule
  ]
})
export class FavoriteModule {

}
