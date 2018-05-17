import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth/auth.service';
import {AuthModule} from './auth/auth.module';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {SearchService} from './search/search.service';
import {AuthGuardService} from './auth/auth-guard.service';
import {MusicService} from './shared/music.service';
import {HttpService} from './shared/http.service';
import {EnvironmentVarService} from './environment.var.service';
import {FavoriteModule} from './favorite/favorite.module';
import {ProfileModule} from './profile/profile.module';
import {SearchModule} from './search/search.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FavoriteModule,
    ProfileModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    SearchModule
  ],
  providers: [AuthService, SearchService, AuthGuardService, MusicService, HttpService, EnvironmentVarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
