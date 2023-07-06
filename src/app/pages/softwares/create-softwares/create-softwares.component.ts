import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SoftwaresService } from '../shared/softwares.service';

@Component({
  selector: 'app-create-softwares',
  templateUrl: './create-softwares.component.html',
  styleUrls: ['./create-softwares.component.css']
})
export class CreateSoftwaresComponent {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private service: SoftwaresService
  ) {
    this.formGroup = this.createForm();
  }

  createForm(): FormGroup {
    return this.formGroup = this.formBuilder.group({
      title: ['', Validators.required],
      link: ['', Validators.required]
    })
  }

  createNewSoftware() {
    console.log(this.formGroup.value)
    this.service.createNewSoftware(this.formGroup.value).subscribe(() => {
      this.dialog.closeAll();
      this.service.showMessage('Software Cadastrado !')
    })
  }


}
