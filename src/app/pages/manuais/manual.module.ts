import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { ManualRoutingModule } from './manual-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateManualComponent } from './create-manual/create-manual.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { DeleteCategoryComponent } from './category/delete-category/delete-category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { EditManualComponent } from './edit-manual/edit-manual.component';


@NgModule({
  declarations: [
    CreateManualComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    DeleteCategoryComponent,
    CreateCategoryComponent,
    EditManualComponent
  ],
  imports: [
    CommonModule,
    ManualRoutingModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressBarModule
  ]
})
export class ManualModule { }
