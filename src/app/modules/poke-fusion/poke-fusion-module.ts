import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeFusionRoutingModule } from './poke-fusion-routing-module';
import { PokeFusionPage } from './pages/poke-fusion-page/poke-fusion-page';
import { HttpClientModule } from '@angular/common/http';
import { PokeFusionService } from './services/poke-fusion-service';
import { PokeCard } from '../../shared/components/PokeCard/PokeCard';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    PokeFusionPage,

  ],
  imports: [
    CommonModule,
    PokeFusionRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    PokeFusionService
  ]
})
export class PokeFusionModule { }
