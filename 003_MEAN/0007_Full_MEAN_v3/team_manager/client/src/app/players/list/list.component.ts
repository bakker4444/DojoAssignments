import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../../http.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players : any;

  constructor(
    private _httpService: HttpService
  ) { };

  ngOnInit() {
    this.getAllPlayers();
  };

  getAllPlayers () {
    let observable = this._httpService.getAllPlayers();
    observable.subscribe ( data => {
      console.log("Response : ", data);
      this.players = data["data"];
    });
  };

  deletePlayer(playerid) {
    let observable = this._httpService.deletePlayer(playerid);
    observable.subscribe ( data => {
      console.log("Response : ", data);
      this.getAllPlayers();
    });
  };

}
