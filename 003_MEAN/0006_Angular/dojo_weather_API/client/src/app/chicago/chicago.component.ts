import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
    this.city = { name: "" };
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("Chicago, US");
    observable.subscribe(data => {
      console.log("Got a city weather!", data)
      this.city = data;
    });
  };

}
