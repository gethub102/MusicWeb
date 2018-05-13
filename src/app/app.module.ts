import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './server.service';
import { EnvironmentVarService } from './environment.var.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServerService, EnvironmentVarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
