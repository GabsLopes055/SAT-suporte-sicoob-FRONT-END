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
  isLoading: boolean = true;
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
      this.isLoading = false
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
  }

  sendManual() {

    if (this.selectedFile == null) {
      this.serviceManual.showMessage("Preencha o formulário corretamente !", "secondary")
    } else {
      console.log(this.selectedFile)
      this.serviceManual.createNewManual(this.selectedFile, this.formCreate.controls['cdCategory'].value).subscribe(() => {
        this.serviceManual.showMessage('Manual Cadastrado !', "success")
        this.dialog.closeAll()
      })
    }
  }


}
