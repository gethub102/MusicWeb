import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search-us-pop',
  templateUrl: './search-us-pop.component.html',
  styleUrls: ['./search-us-pop.component.css']
})
export class SearchUsPopComponent implements OnInit, OnDestroy {

  usMusicList;
  closeSubscription: Subscription;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.onSearchCountry();
  }

  ngOnDestroy() {
    this.closeSubscription.unsubscribe();
  }

  onSearchCountry() {
    this.getSearchCountryResults('us');
  }


  getSearchCountryResults(country: string) {
    this.closeSubscription = this.searchService.onSearchByCountry('popular', country)
      .subscribe(data => {
        this.usMusicList = data['results'];
        console.log(this.usMusicList);
      });
  }

}
