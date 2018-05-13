import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Server } from './server.interface';
import { EnvironmentVarService } from './environment.var.service';


@Injectable()
export class ServerService {
  constructor(private http: HttpClient, private environmentVar: EnvironmentVarService) {}
  storeMyServer(servers: Server[]) {
    // this data.json is up to you that to show where data will be stored
    return this.http.post(this.environmentVar.url + 'data.json', servers);
  }

  storeMyServerPut(servers: Server[]) {
    // this data.json is up to you that to show where data will be stored
    return this.http.put(this.environmentVar.url + 'data.json', servers);
  }

  getServers() {
    return this.http.get<any[]>(this.environmentVar.url + 'data.json', {observe: 'body', responseType: 'json'});
  }
}
