import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing-module';
import { FavoritesPokemonsPage } from './pages/favorites-pokemons-page/favorites-pokemons-page';


@NgModule({
  declarations: [
    FavoritesPokemonsPage
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
