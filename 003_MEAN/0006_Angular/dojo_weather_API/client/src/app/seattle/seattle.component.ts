import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
    this.city = { name: "" };
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("Seattle, US");
    observable.subscribe(data => {
      console.log("Got a city weather!", data)
      this.city = data;
    });
  };

}
