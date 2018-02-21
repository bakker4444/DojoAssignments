import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {

  }

  getAuthors () {
    return this._http.get("/authors");
  }

  getOneAuthor (id) {
    return this._http.get("/authors/" + id);
  }

  addAuthor (data) {
    return this._http.post("/authors", data);
  }

  updateAuthor (id, data) {
    return this._http.put("/authors/" + id, data);
  }

  removeAuthors (id) {
    return this._http.delete("/authors/" + id);
  }

}
