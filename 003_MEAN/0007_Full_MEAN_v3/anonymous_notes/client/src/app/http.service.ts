import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";


//////////////////// Behavior Subject Import ////////////////////
import { BehaviorSubject } from "rxjs/BehaviorSubject";
/////////////////////////////////////////////////////////////////

@Injectable()
export class HttpService {

  notes: any;

  ///// Way 1 /////
  notesSource = new BehaviorSubject<any>(this.notes);

  ///// Way 2 /////
  // private notesSource = new BehaviorSubject<any>(this.notes);
  // currentNotes = this.notesSource.asObservable();

  constructor(
    private _http: HttpClient
  ) { };

  createNote(data) {
    return this._http.post("/notes", data);
  };

  getAllNotes() {
    this._http.get("/notes").subscribe( data => {
      console.log("Response : ", data);
      this.notes = data["data"];
      this.notesSource.next(this.notes);
    });
  }

};
