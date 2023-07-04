import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SoftwaresRoutingModule } from './softwares-routing.module';
import { ListSoftwaresComponent } from './list-softwares/list-softwares.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListSoftwaresComponent
  ],
  imports: [
    CommonModule,
    SoftwaresRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule

  ]
})
export class SoftwaresModule { }
