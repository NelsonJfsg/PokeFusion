import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Pokemon } from '../../../poke-fusion/interfaces/Pokemon.model';

@Component({
  selector: 'favorites-pokemons-page',
  templateUrl: './favorites-pokemons-page.html',
  styleUrl: './favorites-pokemons-page.css',
  standalone : false
})
export class FavoritesPokemonsPage implements OnInit{
  
  public pokemons : Array<{ key: string; value: Pokemon }> = [];
  
  public totalLength : number = 0;
  public pageSize : number = 5;
  public pageSizeOptions : number[] = [5, 10, 25, 100];
  public pageIndex : number = 0;
  

  ngOnInit(): void {
    this.loadFavoritesPokemons();
    this.totalLength = this.pokemons.length;
  } 


  private loadFavoritesPokemons(): void {
    const pokemonArray = Object.keys(localStorage)
      .filter(key => key.startsWith('pokemon'))
      .map(key => ({
        key,
        value: JSON.parse(localStorage.getItem(key) || '{}')
      }));

      this.pokemons = pokemonArray;
  }
  
  public onPageChange (event : any): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }

  public getPaginatedPokemons () : Array<{ key: string; value: Pokemon }> {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    return this.pokemons.slice(start, end);
  }
}
