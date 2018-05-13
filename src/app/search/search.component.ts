import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  words = '';
  musicList: any[];
  closeSubscription: Subscription;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.closeSubscription) {
      this.closeSubscription.unsubscribe();
    }
  }

  onSearchTerm() {
    this.getSearchTermResults(this.words.trim().replace(/\s+/g, '+'));
  }

  getSearchTermResults(term: string) {
    this.closeSubscription = this.searchService.onSearchByTerm(term)
      .subscribe(data => {
        this.musicList = data['results'];
        console.log(this.musicList);
      });
  }

}
