import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../http.service";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  notes: any;

  constructor(
    private _httpService: HttpService
  ) { };

  ngOnInit() {
    this._httpService.notesSource.subscribe( notes =>
      this.notes = notes
    );
  };

}
