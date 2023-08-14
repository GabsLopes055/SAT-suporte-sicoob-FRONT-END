import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateSoftwaresComponent } from './create-softwares/create-softwares.component';
import { EditSoftwaresComponent } from './edit-softwares/edit-softwares.component';
import { ListSoftwaresComponent } from './list-softwares/list-softwares.component';
import { SoftwaresRoutingModule } from './softwares-routing.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  declarations: [
    ListSoftwaresComponent,
    CreateSoftwaresComponent,
    EditSoftwaresComponent
  ],
  imports: [
    CommonModule,
    SoftwaresRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressBarModule
  ]
})
export class SoftwaresModule { }
