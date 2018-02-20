import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
    this.city = { name: "" };
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("Burbank, US");
    observable.subscribe(data => {
      console.log("Got a city weather!", data)
      this.city = data;
    });
  };
}
