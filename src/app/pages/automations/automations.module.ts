import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutomationsRoutingModule } from './automations-routing.module';
import { AutomationListComponent } from './automation-list/automation-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AutomationCreatedComponent } from './automation-created/automation-created.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteAutomationComponent } from './delete-automation/delete-automation.component';

@NgModule({
  declarations: [
    AutomationListComponent,
    AutomationCreatedComponent,
    DeleteAutomationComponent
  ],
  imports: [
    CommonModule,
    AutomationsRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class AutomationsModule { }
