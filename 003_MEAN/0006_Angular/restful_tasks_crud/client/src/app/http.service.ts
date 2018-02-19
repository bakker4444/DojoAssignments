import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor ( private _http : HttpClient ) {
    // this.getTasks();
  };

  getTasks() {
    // let tempObservable = this._http.get("/tasks");
    // tempObservable.subscribe ( data => console.log("Got our tasks!"));
    return this._http.get("/tasks");
  };

  getOneTask(id) {
    return this._http.get("/tasks/" + id);
  }

  addTask(newtask){
    return this._http.post("/tasks", newtask);
  }

  deleteTask(id){
    return this._http.delete("/tasks/" + id);
  }

  updateTask(id, editTask){
    return this._http.put("/tasks/" + id, editTask);
  }

}
