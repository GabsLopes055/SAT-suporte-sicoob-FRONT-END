import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateReserveComponent } from './create-reserve/create-reserve.component';
import { ListAllReservesComponent } from './list-all-reserves/list-all-reserves.component';
import { ReceiveEquipmentComponent } from './receive-equipment/receive-equipment.component';
import { ReservesOfEquipmentsRoutingModule } from './reserves-of-equipments-routing.module';

@NgModule({
  declarations: [
    ListAllReservesComponent,
    CreateReserveComponent,
    ReceiveEquipmentComponent
  ],
  imports: [
    CommonModule,
    ReservesOfEquipmentsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatTableModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule,
    MatOptionModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class ReservesOfEquipmentsModule { }
