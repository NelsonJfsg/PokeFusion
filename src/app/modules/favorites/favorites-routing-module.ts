import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesPokemonsPage } from './pages/favorites-pokemons-page/favorites-pokemons-page';

const routes: Routes = [
  {
    path : '',
    component : FavoritesPokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
