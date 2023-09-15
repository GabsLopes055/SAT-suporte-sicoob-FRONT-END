import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomationsRoutingModule } from './automations-routing.module';
import { AutomationListComponent } from './automation-list/automation-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AutomationListComponent
  ],
  imports: [
    CommonModule,
    AutomationsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class AutomationsModule { }
