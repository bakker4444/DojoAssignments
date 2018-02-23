import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authors: any;

  constructor(private _httpService: HttpService) {};

  ngOnInit() {
    this.getAuthorsThroughService();
  };

  getAuthorsThroughService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe ( data => {
      console.log("Successfully got data from server!");
      console.log(data);
      this.authors = data["data"];
    });
  }
}
