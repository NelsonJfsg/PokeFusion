import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'poke-fusion',
    loadChildren: () => import('./modules/poke-fusion/poke-fusion-module').then(m => m.PokeFusionModule)
  },
  {
    path : 'favorites',
    loadChildren: () => import('./modules/favorites/favorites-module').then(m => m.FavoritesModule)
  },
  {
    path : 'about',
    loadChildren: () => import('./modules/about/about-module').then(m => m.AboutModule)
  },
  {
    path : '',
    redirectTo : 'poke-fusion',
    pathMatch : 'full'
  },
  {
    path : '**',
    redirectTo : 'poke-fusion'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
