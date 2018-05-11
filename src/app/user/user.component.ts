import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number

  constructor(private _ActivatedRoute: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this._ActivatedRoute.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        }
      );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
  }

}
