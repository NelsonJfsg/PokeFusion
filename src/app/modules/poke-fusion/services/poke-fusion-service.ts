import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeAPI } from '../interfaces/PokeApi.model';

@Injectable({
  providedIn: 'root'
})
export class PokeFusionService {

  constructor(
    private http : HttpClient
  ) { }


  public getRandomPokemon () : Observable<PokeAPI> {
    const max = 1025; // * All pokemons in PokeAPI
    const randomId = Math.floor(Math.random() * max) + 1;

    return this.http.get<PokeAPI>(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  }

}
