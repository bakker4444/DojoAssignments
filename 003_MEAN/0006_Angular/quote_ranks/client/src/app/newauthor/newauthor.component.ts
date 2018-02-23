import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";

import { Router } from "@angular/router";


@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {
  author: any;
  error: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.author = {
      name: ""
    }
  }

  addAuthorThroughService() {
    let observable = this._httpService.addAuthor(this.author);
    observable.subscribe(data => {
      // if (data.message == "Error") {
      //   console.log(data);
      //   console.log(data.message);
      //   console.log(data.error);
        this.error = data;
      // }
      // else {
        console.log("Successfully added data to server!" + data);
        this._router.navigate(["/"]);
      // };
    });
  }

  reRouteToHome() {
    this._router.navigate(["/"]);
  };

}
