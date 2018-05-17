import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SearchUsPopComponent } from './search/search-us-pop/search-us-pop.component';
import { SearchZhPopComponent } from './search/search-zh-pop/search-zh-pop.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  // {path: 'us-pop', component: SearchUsPopComponent, canActivate: [AuthGuardService] },
  // {path: 'zh-pop', component: SearchZhPopComponent, canActivate: [AuthGuardService] },
  // // {path: 'zh-pop', component: SearchZhPopComponent },
  // {path: 'search', component: SearchComponent},
  // {path: 'favorite', component: FavoriteComponent, canActivate: [AuthGuardService]},
  // {path: 'favorite', component: FavoriteComponent },
  {path: 'page-not-found', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {

}
