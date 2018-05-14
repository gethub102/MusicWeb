import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EnvironmentVarService } from '../environment.var.service';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient, private environmentVar: EnvironmentVarService, private authService: AuthService) {
  }

  storeMyFavoriteMusic(music: any) {
    const token = this.authService.getToken();
    // const musicObj = {id: music};
    const databaseName = this.environmentVar.email.replace(/\./g, '-');
    // const databaseName = this.environmentVar.email.replace(/\./g, '-');
    return this.http.post(this.environmentVar.url + databaseName + '.json', music,
      {params: new HttpParams().set('auth', token)});
  }

  storeMyFavoriteMusicPut(music: any) {
    const token = this.authService.getToken();
    const databaseName = this.environmentVar.email.replace(/\./g, '-');
    return this.http.put(this.environmentVar.url + databaseName + '.json', music,
      {params: new HttpParams().set('auth', token)});
  }


  getFavoriteMusics() {
    const databaseName = this.environmentVar.email.replace(/\./g, '-');
    const token = this.authService.getToken();
    return this.http.get<any[]>(this.environmentVar.url + databaseName + '.json',
      {
        observe: 'body',
        params: new HttpParams().set('auth', token)
      });
  }
}
