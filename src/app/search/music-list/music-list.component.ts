import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  @Input() musicList: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
