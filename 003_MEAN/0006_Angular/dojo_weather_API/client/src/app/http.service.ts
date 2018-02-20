import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HttpService {

  privateKey = "ABCD";

  constructor(private _http: HttpClient) {
    // this.getTasks();
  };

  getWeather(cityname) {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityname + "&appid=" + this.privateKey + "&units=imperial");
  };


}
