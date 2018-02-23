import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {
  id: String;
  author: any;
  quote: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    ///////////// URL parameter extract /////////////////
    this._route.params.subscribe( params => {
      this.id = params["id"];
    });
    /////////////////////////////////////////////////////
    this.quote = {
      quote: "",
      votes: 0
    }
    this.getAuthorThroughService();
  }

  getAuthorThroughService() {
    let observable = this._httpService.getOneAuthor(this.id);
    observable.subscribe ( data => {
      console.log("Successfully got author data from server!", data);
      this.author = data["data"];
    });
  }

  addQuoteThroughService () {
    let observable = this._httpService.addQuote(this.id, this.quote);
    observable.subscribe ( data => {
      console.log("Successfully create quote data to server!", data);
      this._router.navigate(["/quotes/" + this.id]);
    });
  }

  reRouteToHome () {
    this._router.navigate(["/"]);
  }
}
