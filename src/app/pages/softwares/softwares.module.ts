import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SoftwaresRoutingModule } from './softwares-routing.module';
import { ListSoftwaresComponent } from './list-softwares/list-softwares.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreateSoftwaresComponent } from './create-softwares/create-softwares.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditSoftwaresComponent } from './edit-softwares/edit-softwares.component';


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
    MatFormFieldModule
  ]
})
export class SoftwaresModule { }
