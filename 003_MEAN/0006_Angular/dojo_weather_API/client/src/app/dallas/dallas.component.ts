import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
    this.city = { name: "" };
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("Dallas, US");
    observable.subscribe(data => {
      console.log("Got a city weather!", data)
      this.city = data;
    });
  };

}
