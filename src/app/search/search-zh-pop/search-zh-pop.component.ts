import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-zh-pop',
  templateUrl: './search-zh-pop.component.html',
  styleUrls: ['./search-zh-pop.component.css']
})
export class SearchZhPopComponent implements OnInit, OnDestroy {

  closeSubscription: Subscription;
  zhMusicList;

  constructor(private searchMusic: SearchService) {
  }

  ngOnInit() {
    this.onSearchCountry();
  }

  ngOnDestroy() {
    this.closeSubscription.unsubscribe();
  }

  onSearchCountry() {
    this.getSearchCountryResults('CN');
  }


  getSearchCountryResults(country: string) {
    this.closeSubscription = this.searchMusic.onSearchByCountry('华语', country)
      .subscribe(data => {
        this.zhMusicList = data['results'];
        console.log(this.zhMusicList);
      });
  }

}
