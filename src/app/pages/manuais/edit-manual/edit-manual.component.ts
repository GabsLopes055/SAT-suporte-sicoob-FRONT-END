import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { CategoryOfManualsService } from '../shared/category-of-manuals.service';
import { ManualsService } from '../shared/manuals.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { manual } from 'src/app/interfaces/manuals.model';

@Component({
  selector: 'app-edit-manual',
  templateUrl: './edit-manual.component.html',
  styleUrls: ['./edit-manual.component.css']
})
export class EditManualComponent {

  formEdit!: FormGroup;
  category!: category[];
  isLoading: boolean = true;
  selectedFile: any = null;

  categoryEdit: any;
  editCategory!: number
  docName: any = ''

  constructor(
    private formBuilder: FormBuilder,
    private serviceCategory: CategoryOfManualsService,
    private serviceManual: ManualsService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: { manual: manual }
  ) {

    console.log(this.data)

    this.formEdit = this.createForm();
    this.listCategory();

    this.docName = this.data.manual.docName
    this.categoryEdit = this.data.manual.category
    this.editCategory = this.categoryEdit.cdCategory
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
      this.serviceManual.showMessage("Selecione ao menos um arquivo", "secondary")
    } else {
      this.isLoading = true      
      this.serviceManual.editManual(this.selectedFile, this.formEdit.controls['cdCategory'].value, this.data.manual.id).subscribe(() => {
        this.serviceManual.showMessage('Manual Editado !', "warning"),
          this.isLoading = false
        this.dialog.closeAll()
      })
    }
  }

  deleteManual() {
    this.serviceManual.deleteManual(this.data.manual.id).subscribe(response => { })
    this.serviceManual.showMessage('Manual Excluido !', "error")
    this.dialog.closeAll()
  }

}
