import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Navbar } from './components/navbar/navbar';
import { PokeCard } from './components/PokeCard/PokeCard';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AboutRoutingModule } from "../modules/about/about-routing-module";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    MainLayout,
    Navbar,
    PokeCard
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    AboutRoutingModule,
    MatProgressSpinnerModule
],
  exports: [
    MainLayout,
    PokeCard
  ]
})
export class SharedModule { }
