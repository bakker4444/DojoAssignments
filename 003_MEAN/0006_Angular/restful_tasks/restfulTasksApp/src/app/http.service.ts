import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    // this.getOneTask();
    // this.deleteOneTask();
  };

  getTasks() {
    let tempObservable = this._http.get("/tasks");
    tempObservable.subscribe(data => console.log("Got our tasks", data));
  };

  getOneTask() {
    let tempObservableGetOne = this._http.get("/tasks/5a865f4506ba2222d2a3c63e");
    tempObservableGetOne.subscribe(data => console.log("Got one task", data));
  }

  deleteOneTask() {
    let tempObservableDeleteOne = this._http.delete("/tasks/5a865f4506ba2222d2a3c63e");
    tempObservableDeleteOne.subscribe(data => console.log("Deleted one task", data));
  }

}
