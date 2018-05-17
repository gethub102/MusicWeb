import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {MusicListComponent} from './music-list/music-list.component';
import {SharedModule} from '../shared/shared.module';
import {SearchUsPopComponent} from './search-us-pop/search-us-pop.component';
import {SearchZhPopComponent} from './search-zh-pop/search-zh-pop.component';
import {AuthGuardService} from '../auth/auth-guard.service';
import {SearchComponent} from './search.component';

const appRoutes: Routes = [
  {path: 'us-pop', component: SearchUsPopComponent, canActivate: [AuthGuardService] },
  {path: 'zh-pop', component: SearchZhPopComponent, canActivate: [AuthGuardService] },
  {path: 'search', component: SearchComponent},
];

@NgModule({
  declarations: [
    MusicListComponent,
    SearchUsPopComponent,
    SearchZhPopComponent,
    SearchComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class SearchModule {

}
