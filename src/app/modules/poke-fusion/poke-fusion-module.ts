import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeFusionRoutingModule } from './poke-fusion-routing-module';
import { PokeFusionPage } from './pages/poke-fusion-page/poke-fusion-page';
import { HttpClientModule } from '@angular/common/http';
import { PokeFusionService } from './services/poke-fusion-service';
import { PokeCard } from './components/PokeCard/PokeCard';


@NgModule({
  declarations: [
    PokeFusionPage,

    // * Components * //
    PokeCard
  ],
  imports: [
    CommonModule,
    PokeFusionRoutingModule,
    HttpClientModule 
  ],
  providers: [
    PokeFusionService
  ]
})
export class PokeFusionModule { }
