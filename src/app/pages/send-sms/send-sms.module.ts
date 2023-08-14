import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SendSMSRoutingModule } from './send-sms-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { SendSMSComponent } from './list-sms-sends/send-sms.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewSMSComponent } from './view-sms/view-sms.component'
import { MatDialogModule } from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    SendSMSComponent,
    ViewSMSComponent,

  ],
  imports: [
    CommonModule,
    SendSMSRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatTooltipModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressBarModule

  ]
})
export class SendSMSModule { }
