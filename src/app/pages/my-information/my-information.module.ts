import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInformationRoutingModule } from './my-information-routing.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MyInformationComponent } from './my-information-list/my-information.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    MyInformationComponent
  ],
  imports: [
    CommonModule,
    MyInformationRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class MyInformationModule { }
