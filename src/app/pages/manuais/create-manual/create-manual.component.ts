import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { CategoryOfManualsService } from '../shared/category-of-manuals.service';
import { ManualsService } from '../shared/manuals.service';
import { catchError, map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-manual',
  templateUrl: './create-manual.component.html',
  styleUrls: ['./create-manual.component.css']
})
export class CreateManualComponent {

  formCreate!: FormGroup;

  category!: category[];

  selectedFile: any = null;


  constructor(
    private formBuilder: FormBuilder,
    private serviceCategory: CategoryOfManualsService,
    private serviceManual: ManualsService,
    private dialog: MatDialog
  ) {
    this.formCreate = this.createForm();
    this.listCategory();
  }

  listCategory() {
    return this.serviceCategory.listAllCategory().subscribe(category => {
      this.category = category
    })
  }

  createForm() {
    return this.formBuilder.group({
      file: ['', Validators.required],
      cdCategory: ['', Validators.required]
    })
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
    console.log(this.selectedFile)
  }

  sendManual() {

    this.serviceManual.createNewManual(this.selectedFile, this.formCreate.controls['cdCategory'].value).subscribe(() => {
      this.serviceManual.showMessage('Manual Cadastrado !')
      this.dialog.closeAll()
    })
  }


}
