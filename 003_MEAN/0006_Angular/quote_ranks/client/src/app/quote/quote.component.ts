import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  id: String;
  private sub: any;
  author: any;
  quotes_array: any;
  editQuote: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { };

  ngOnInit() {
    
  ///////////// URL parameter extract /////////////////
  this.sub = this._route.params.subscribe(params => {
    this.id = params['id'];
  });
  /////////////////////////////////////////////////////

  this.getOneAuthorThroughService();
  this.getQuotesThroughService();
  }


  getOneAuthorThroughService() {
    let observable = this._httpService.getOneAuthor(this.id);
    observable.subscribe(data => {
      console.log("Successfully got author data from server!", data);
      this.author = data["data"];
    });
  }


  // using quote collections
  getQuotesThroughService() {
    let observable = this._httpService.getAllQuotesThroughQuoteTable(this.id);
    observable.subscribe(data => {
      console.log("Successfully got quotes data from server!", data);
      this.quotes_array = data["data"];
    });
  };

  // using author collections
  // getQuotesThroughService() {
  //   let observable = this._httpService.getAllQuotes(this.id);
  //   observable.subscribe( data => {
  //     console.log("Successfully got quotes data from server!", data);
  //     this.quotes_array = data["data"][0]["quotes"];
  //     console.log(this.quotes_array);
  //   });
  // };

  quoteVoteUp (quote) {
    this.editQuote = quote;
    this.editQuote.votes += 1;
    let observable = this._httpService.changeQuoteVote(this.editQuote);
    observable.subscribe ( data => {
      console.log("Successfully vote up about the quote!", data);
      this.getQuotesThroughService();
    });
  }

  quoteVoteDown(quote) {
    this.editQuote = quote;
    this.editQuote.votes -= 1;
    let observable = this._httpService.changeQuoteVote(this.editQuote);
    observable.subscribe(data => {
      console.log("Successfully vote down about the quote!", data);
      this.getQuotesThroughService();
    });
  }

  deleteOneQuote (authorid, quoteid) {
    console.log("author ID : ", authorid);
    console.log("quote ID : ", quoteid);
    let observable = this._httpService.removeQuote(authorid, quoteid);
    observable.subscribe ( data => {
      console.log("Successfully remove data from server", data);
      this.getQuotesThroughService();
    });
  }

}
