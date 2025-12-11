import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing-module';
import { FavoritesPokemonsPage } from './pages/favorites-pokemons-page/favorites-pokemons-page';
import { PokeCard } from '../../shared/components/PokeCard/PokeCard';
import { SharedModule } from '../../shared/shared-module';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    FavoritesPokemonsPage  
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule,
    MatPaginatorModule
  ]
})
export class FavoritesModule { }
