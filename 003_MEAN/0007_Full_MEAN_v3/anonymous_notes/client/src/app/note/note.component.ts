import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../http.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note: any;
  notes: any;

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.note = {
      note: ""
    };
    this.updateNotes();
  }

  createNote() {
    let observable = this._httpService.createNote(this.note);
    observable.subscribe( data => {
      console.log("response data : ", data);
      this.note = {
        note: ""
      };
      this._httpService.getAllNotes();
    });
  };

  updateNotes() {
    this._httpService.getAllNotes();
  }

}
