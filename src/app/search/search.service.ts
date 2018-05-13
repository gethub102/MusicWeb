import { HttpClient } from '@angular/common/http';
import { Music } from '../shared/music.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {

  baseurl = 'https://itunes.apple.com/';

  constructor(private http: HttpClient) {
  }


  onSearchByTerm(term: string) {
    const tmp = `${this.baseurl}search?term=${term}&media=music&limit=20`;
    return this.http.get<Music[]>(tmp, {responseType: 'json'})
      .pipe(
        catchError(error => of(`Bad Promise: ${error}`))
      );
  }

  onSearchByCountry(term: string, country: string) {
    // https://itunes.apple.com/search?term=jim+jones&country=ca
    const ctry_url = `${this.baseurl}search?term=${term}&country=${country}&media=music&limit=20`;
    return this.http.get<Music[]>(ctry_url, {responseType: 'json'})
      .pipe(
        catchError(error => of(`Bad Promise: ${error}`))
      );
  }

}
