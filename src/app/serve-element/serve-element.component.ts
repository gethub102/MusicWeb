import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-serve-element',
  templateUrl: './serve-element.component.html',
  styleUrls: ['./serve-element.component.css']
})
export class ServeElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() {
    console.log(' serverElement constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(' serverElement ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
    console.log(' severElement ngOnInit called');
  }

}
