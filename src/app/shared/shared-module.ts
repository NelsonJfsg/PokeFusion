import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Navbar } from './components/navbar/navbar';
import { PokeCard } from './components/PokeCard/PokeCard';



@NgModule({
  declarations: [
    MainLayout,
    Navbar,
    PokeCard
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainLayout,
    PokeCard
  ]
})
export class SharedModule { }
