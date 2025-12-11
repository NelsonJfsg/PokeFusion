import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeFusionPage } from './pages/poke-fusion-page/poke-fusion-page';

const routes: Routes = [
  {
    path : '',
    component : PokeFusionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokeFusionRoutingModule { }
