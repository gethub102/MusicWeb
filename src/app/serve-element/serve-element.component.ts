import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serve-element',
  templateUrl: './serve-element.component.html',
  styleUrls: ['./serve-element.component.css']
})
export class ServeElementComponent implements OnInit {
   @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit() {
  }

}
