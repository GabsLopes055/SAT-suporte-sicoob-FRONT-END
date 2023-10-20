import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservesOfEquipmentsRoutingModule } from './reserves-of-equipments-routing.module';
import { ListAllReservesComponent } from './list-all-reserves/list-all-reserves.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CreateReserveComponent } from './create-reserve/create-reserve.component';
import { ReceiveEquipmentComponent } from './receive-equipment/receive-equipment.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import { TermsPDFComponent } from './terms-pdf/terms-pdf.component';

@NgModule({
  declarations: [
    ListAllReservesComponent,
    CreateReserveComponent,
    ReceiveEquipmentComponent,
    TermsPDFComponent
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
    MatExpansionModule
  ]
})
export class ReservesOfEquipmentsModule { }
