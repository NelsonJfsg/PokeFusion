import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Navbar } from './components/navbar/navbar';



@NgModule({
  declarations: [
    MainLayout,
    Navbar
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainLayout
  ]
})
export class SharedModule { }
