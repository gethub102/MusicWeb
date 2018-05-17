import {Component, Input, OnInit} from '@angular/core';

import {HttpService} from '../../shared/http.service';


@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
})
export class MusicListComponent implements OnInit {
  addFavoriteStatus = 'Add';

  myColor = 'lightgrey';

  @Input() musicList: any[];

  constructor(private favoriteService: HttpService) {
  }

  ngOnInit() {
  }

  // add music to fav list  /
  onAddToFavorite(index: number) {
    this.musicList[index].addFavoriteStatus = true;
    console.log('adding now ... track id is ' + this.musicList[index]['trackId']);
    this.favoriteService.storeMyFavoriteMusic(this.musicList[index])
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }
}
