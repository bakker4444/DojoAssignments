import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { };

  addPlayer(player) {
    return this._http.post("/player", player);
  };

  getAllPlayers() {
    return this._http.get("/player");
  };

  updatePlayerGame(gameid, playerid, status) {
    return this._http.put("/player/" + gameid + "/" + playerid, status);
  }

  deletePlayer(playerid) {
    return this._http.delete("/player/" + playerid);
  }
}
