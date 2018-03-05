import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http"
import { FormsModule } from "@angular/forms";

import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { AddplayerComponent } from './players/addplayer/addplayer.component';
import { StatusComponent } from './status/status.component';
import { GameComponent } from './status/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    ListComponent,
    AddplayerComponent,
    StatusComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
