import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../../http.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-addplayer',
  templateUrl: './addplayer.component.html',
  styleUrls: ['./addplayer.component.css']
})
export class AddplayerComponent implements OnInit {

  player: any;
  error: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { };

  ngOnInit() {
    this.player = {
      games: {
        game_1: "Undecided",
        game_2: "Undecided",
        game_3: "Undecided"
      }
    };
    this.error = {};
  };

  addPlayer() {
    let observable = this._httpService.addPlayer(this.player);
    observable.subscribe ( data => {
      console.log("Response : ", data);
      if (data["error"]) {
        this.error = data["error"];
      } else {
        this._router.navigate([""]);
      }
    });
  }


}
