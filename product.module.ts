import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavCompoComponent } from './nav-compo/nav-compo.component';
import { CompoProdu2Component } from './compo-produ2/compo-produ2.component';



@NgModule({
  declarations: [
    NavCompoComponent,
    CompoProdu2Component
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
