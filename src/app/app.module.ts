import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SearchService } from './search/search.service';
import { MusicListComponent } from './search/music-list/music-list.component';
import { SearchUsPopComponent } from './search/search-us-pop/search-us-pop.component';
import { SearchZhPopComponent } from './search/search-zh-pop/search-zh-pop.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { MusicService } from './shared/music.service';
import { HttpService } from './shared/http.service';
import { EnvironmentVarService } from './environment.var.service';
import { FavoriteModule } from './favorite/favorite.module';
import { ProfileModule } from './profile/profile.module';
import { MouseActionDirective } from './shared/mouse-action.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    PageNotFoundComponent,
    MusicListComponent,
    SearchUsPopComponent,
    SearchZhPopComponent,
    // MouseActionDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FavoriteModule,
    ProfileModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthService, SearchService, AuthGuardService, MusicService, HttpService, EnvironmentVarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
