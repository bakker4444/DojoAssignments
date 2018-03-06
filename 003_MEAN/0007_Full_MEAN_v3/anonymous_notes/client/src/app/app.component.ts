import { Component, OnInit } from '@angular/core';

import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';
  notes: any;

  constructor (
    private _httpService: HttpService
  ) { };

  ngOnInit () {

  };

}