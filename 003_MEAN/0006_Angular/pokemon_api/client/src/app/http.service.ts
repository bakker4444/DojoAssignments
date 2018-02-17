import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {

  constructor(private _http : HttpClient) {
    this.getPokemonBulbasaur();
  };

  getPokemonBulbasaur () {
    let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    bulbasaur.subscribe(data => {
      // console.log(data),
      console.log(data.name + "'s " + data.abilities[0].ability.name + " and " + data.abilities[1].ability.name + ".")
      this.getNumber(data.abilities[1].ability.url);
    });
  };

  getNumber (url) {
    let overgrow = this._http.get(url);
    overgrow.subscribe(data => {
      // console.log(data),
      console.log(data.pokemon.length + " Pokemon have the " + data.name + " ability.");
    });
  };
  
};
