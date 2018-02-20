import { Component, OnInit } from '@angular/core';

import { HttpService } from './../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city: any;

  constructor(private _httpService: HttpService) { };

  ngOnInit() {
    this.city = { name: "" };
    this.getCityWeather();
  }

  getCityWeather() {
    let observable = this._httpService.getWeather("San Jose, US");
    observable.subscribe( data => {
      console.log("Got a city weather!", data)
      this.city = data;
    });
  };

}
