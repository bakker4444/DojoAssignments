import { Component, OnInit } from '@angular/core';

import { HttpService } from "../../http.service";
import { ActivatedRoute, Router } from "@angular/router"

// import { NgClass } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gameid: Number;
  players: any;
  editplayer: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    
    ///////////// URL parameter extract /////////////////
    this._route.params.subscribe(params => {
      this.gameid = params["id"];
    });
    /////////////////////////////////////////////////////

    this.getGamePlayers();
  }

  getGamePlayers() {
    let observable = this._httpService.getAllPlayers();
    observable.subscribe(data => {
      console.log("Response : ", data);
      this.players = data["data"];
    });
  };

  updatePlayerGame(player, status, gamenumber) {
    this.editplayer = player;
    console.log(this.editplayer);
    if (gamenumber == 1) {
      this.editplayer.games.game_1 = status;
    } else if (gamenumber == 2) {
      this.editplayer.games.game_2 = status;
    } else {
      this.editplayer.games.game_3 = status;
    }
    let observable = this._httpService.updatePlayerGame(this.gameid, player._id, this.editplayer);
    observable.subscribe(data => {
      console.log("Response : ", data);
      this.getGamePlayers();
    });
  };

}
