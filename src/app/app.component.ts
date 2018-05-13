import { Component, OnDestroy, OnInit } from '@angular/core';

import { ServerService } from './server.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];

  constructor(private serverService: ServerService) {
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }

  onSaveServer() {
    this.serverService.storeMyServer(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
    ;
  }


  onPutServer() {
    this.serverService.storeMyServerPut(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
    ;
  }

  onGetServer() {
    this.serverService.getServers()
      .subscribe(
        (response) => {
          const data = [];
          for (const responseKey in response) {
            data.push(response[responseKey]);
          }
          console.log(data);
        },
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
