import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservesOfEquipmentsRoutingModule } from './reserves-of-equipments-routing.module';
import { ListAllReservesComponent } from './list-all-reserves/list-all-reserves.component';


@NgModule({
  declarations: [
    ListAllReservesComponent
  ],
  imports: [
    CommonModule,
    ReservesOfEquipmentsRoutingModule
  ]
})
export class ReservesOfEquipmentsModule { }
