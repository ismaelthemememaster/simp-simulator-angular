import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WaifusComponent } from './waifus/waifus.component';
import { WaifuComponent } from './waifu/waifu.component';

@NgModule({
  declarations: [
    AppComponent, WaifusComponent, WaifuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
