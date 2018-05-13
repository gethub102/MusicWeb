import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authService;

  constructor(private _authService: AuthService) {
  }

  ngOnInit() {
    this.authService = this._authService;
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveFavorite() {
    console.log('saving data ...');
  }

  onFetchFavorite() {
    console.log('fetching data ...');
  }

}
