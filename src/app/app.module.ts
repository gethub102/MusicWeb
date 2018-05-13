import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SearchService } from './search/search.service';
import { MusicListComponent } from './search/music-list/music-list.component';
import { SearchUsPopComponent } from './search/search-us-pop/search-us-pop.component';
import { SearchZhPopComponent } from './search/search-zh-pop/search-zh-pop.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    FavoriteComponent,
    PageNotFoundComponent,
    MusicListComponent,
    SearchUsPopComponent,
    SearchZhPopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
