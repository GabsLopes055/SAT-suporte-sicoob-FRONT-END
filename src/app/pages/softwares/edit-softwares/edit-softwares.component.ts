import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { software } from 'src/app/interfaces/softwares.model';
import { SoftwaresService } from '../shared/softwares.service';

@Component({
  selector: 'app-edit-softwares',
  templateUrl: './edit-softwares.component.html',
  styleUrls: ['./edit-softwares.component.css']
})
export class EditSoftwaresComponent {

  formGroup!: FormGroup;

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: { software: software },
    private formBuilder: FormBuilder,
    private service: SoftwaresService
  ) {
    this.formGroup = this.createFormEdit()
  }


  createFormEdit() {
    return this.formBuilder.group({
      cdsoftware: [this.data.software.cdsoftware, Validators.required],
      title: [this.data.software.title, Validators.required],
      link: [this.data.software.link, Validators.required]
    })
  }

  editSoftware() {
    this.service.editSoftware(this.formGroup.value).subscribe(response => {
      this.service.showMessage('Software Editado !', "warning")
      this.dialog.closeAll()
    })
  }

  excluirSoftware() {
    this.service.deleteSoftware(this.formGroup.controls['cdsoftware'].value).subscribe(response => { })
    this.service.showMessage('Software Deletado !', "error")
    this.dialog.closeAll()
  }

}
