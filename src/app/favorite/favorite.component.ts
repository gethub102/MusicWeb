import { Component, OnDestroy, OnInit } from '@angular/core';

import { HttpService } from '../shared/http.service';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit, OnDestroy {

  favMusicListId = [];
  favMusicList = [];

  constructor(private httpService: HttpService, private searchService: SearchService) {
  }

  ngOnInit() {
    console.log('fav ... tst');
    this.onGetFavoriteMusics();
  }

  ngOnDestroy() {
    this.httpService.storeMyFavoriteMusicPut(this.favMusicList).subscribe(
      (resp) => console.log(resp),
      error => console.log(error)
    );
  }

  onGetFavoriteMusics() {
    this.httpService.getFavoriteMusics().subscribe(
      (musics) => {
        for (const key in musics) {
          const music = musics[key];
          this.favMusicList.push(music);
        }
        console.log(this.favMusicList);
      },
      (error) => console.log(error),
      () => {
        console.log('done ...');
      }
    );
  }

  onDeleteFromFavorite(index: number) {
    this.favMusicList.splice(index, 1);
  }

}
