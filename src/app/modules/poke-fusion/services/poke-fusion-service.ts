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


  public test () : Observable<PokeAPI> {
    return this.http.get<PokeAPI>('https://pokeapi.co/api/v2/pokemon/ditto');
  }

  public getPokemonById (id : number) : Observable<PokeAPI> {
    return this.http.get<PokeAPI>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  public getRandomPokemon () : Observable<PokeAPI> {
    const max = 1025; // número total de pokémon actuales
    const randomId = Math.floor(Math.random() * max) + 1;

    return this.http.get<PokeAPI>(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  }
}
