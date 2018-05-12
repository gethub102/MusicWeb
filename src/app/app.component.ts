import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpClient } from '@angular/common/http';
import { Data } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  user1Activated = false;
  user2Activated = false;
  activatedSubscribtion: Subscription;
  url = 'https://jsonplaceholder.typicode.com/posts';
  rets = [];

  constructor(private usersService: UsersService, private http: HttpClient) {
  }

  ngOnInit() {
    this.activatedSubscribtion = this.usersService.userActivated.subscribe(
      (id: number) => {
        if (+id === 1) {
          this.user1Activated = true;
        } else if (+id === 2) {
          this.user2Activated = true;
        }
      }
    );
  }

  ngOnDestroy() {
    console.log('Destroying app component');
    this.activatedSubscribtion.unsubscribe();
  }

  GETTest() {
    const ret = this.http.get(this.url).subscribe(
      (data: Data) => {
        console.log(data);
        this.rets.push(data);
      }
    );
    return ret;
  }
}
