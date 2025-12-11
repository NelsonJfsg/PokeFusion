import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PokeFusionService } from '../../services/poke-fusion-service';
import { lastValueFrom } from 'rxjs';
import { PokeAPI } from '../../interfaces/PokeApi.model';
import { Pokemon } from '../../interfaces/Pokemon.model';

@Component({
  selector: 'poke-fusion-page',
  templateUrl: './poke-fusion-page.html',
  styleUrl: './poke-fusion-page.css',
  standalone : false
})
export class PokeFusionPage implements OnInit{

  public pokemonFusioned : Pokemon | null = null;

  public pokemons : PokeAPI[] = [];

  constructor(
    private pokeFusionService : PokeFusionService
  ) { }

  public ngOnInit() : void{

    this.testService();

  }

  public async testService () : Promise<void> {
    
    // const resp =  await lastValueFrom(this.pokeFusionService.getRandomPokemon());

    let pokemonOne = null;
    let pokemonTwo = null;
    let pokemonThree = null; 

    const pokemons = await Promise.all([
      lastValueFrom(this.pokeFusionService.getRandomPokemon()),
      lastValueFrom(this.pokeFusionService.getRandomPokemon()),
      lastValueFrom(this.pokeFusionService.getRandomPokemon())
    ]);

    const [poke1, poke2, poke3] = pokemons;
    this.pokemons = pokemons;

    pokemonOne = poke1;
    console.log('pokemonIOne', pokemonOne);
    pokemonTwo = poke2;
    pokemonThree = poke3;

    this.pokemonFusioned = this.fusePokemons(pokemonOne, pokemonTwo, pokemonThree);

  }

  private fusePokemons (poke1 : PokeAPI, poke2 : PokeAPI, poke3 : PokeAPI) : Pokemon {
    const fusedPokemon : Pokemon = {
      isFusioned : true,
      id : (poke1.id + poke2.id + poke3.id),
      name : `${poke1.name} - ${poke2.name} - ${poke3.name}`,
      types : [
        {
          slot: 1,
          type: poke1.types[0].type
        },
        {
          slot: 2,
          type: poke2.types[0].type
        },
        {
          slot: 3,
          type: poke3.types[0].type
        }
      ],
      sprites: {
        front_default: poke1.sprites.front_default,
        back_default: poke2.sprites.back_default,
      },
      stats: [
        {
          base_stat: Math.floor((poke1.stats[0].base_stat + poke2.stats[0].base_stat + poke3.stats[0].base_stat) / 3),
          effort: 0,
          stat: poke1.stats[0].stat
        },
        {
          base_stat: Math.floor((poke1.stats[1].base_stat + poke2.stats[1].base_stat + poke3.stats[1].base_stat) / 3),
          effort: 0,
          stat: poke1.stats[1].stat
        },
        {
          base_stat: Math.floor((poke1.stats[2].base_stat + poke2.stats[2].base_stat + poke3.stats[2].base_stat) / 3),
          effort: 0,
          stat: poke1.stats[2].stat
        },
        {
          base_stat: Math.floor((poke1.stats[3].base_stat + poke2.stats[3].base_stat + poke3.stats[3].base_stat) / 3),
          effort: 0,
          stat: poke1.stats[3].stat
        },
        {
          base_stat: Math.floor((poke1.stats[4].base_stat + poke2.stats[4].base_stat + poke3.stats[4].base_stat) / 3),
          effort: 0,
          stat: poke1.stats[4].stat
        },
        {
          base_stat: Math.floor((poke1.stats[5].base_stat + poke2.stats[5].base_stat + poke3.stats[5].base_stat) / 3),
          effort: 0,
          stat: poke1.stats[5].stat
        }
      ],
      abilities: [
        ...new Set([...poke1.abilities, ...poke2.abilities, ...poke3.abilities])
      ]
    };

    return fusedPokemon;
  }



}
