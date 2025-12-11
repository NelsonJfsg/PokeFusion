import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon.model';

@Component({
  selector: 'poke-card',
  templateUrl: './PokeCard.html',
  styleUrl: './PokeCard.css',
  standalone : false,
})
export class PokeCard { 

  @Input() pokemon : Pokemon | null = null;

  public onHandleFavorite () : void {
    if (this.pokemon) {

      if (localStorage.getItem(`pokemon_${this.pokemon.id}`)) {
        localStorage.removeItem(`pokemon_${this.pokemon.id}`);
        return;
      }

      localStorage.setItem(`pokemon_${this.pokemon.id}`, JSON.stringify(this.pokemon));
    }
  }

}
