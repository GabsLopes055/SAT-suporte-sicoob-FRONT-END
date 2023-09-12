import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformationService } from '../shared/information.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-inform-create',
  templateUrl: './inform-create.component.html',
  styleUrls: ['./inform-create.component.css']
})
export class InformCreateComponent {

  isLoading: boolean = true
  formCreate!: FormGroup;
  selectedFile: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private service: InformationService,
    private dialog: MatDialog
  ) {
    this.isLoading = false
    this.formCreate = this.createForm()
  }

  public createForm() {
    return this.formBuilder.group({
      content: ['', Validators.required],
      description: ['', Validators.required],
      title: ['', Validators.required],
      file: ['']
    })
  }

  onFileSelected(event: any) {
    this.isLoading = true
    this.selectedFile = event.target.files[0] as File;
    this.isLoading = false
  }

  public saveInformation() {
    this.service.createNewInformation(this.selectedFile,
      this.formCreate.controls['title'].value,
      this.formCreate.controls['description'].value,
      this.formCreate.controls['content'].value,
    ).subscribe(() => {

      this.service.showMessage('Informativo Cadastrado', "success")
      this.dialog.closeAll();
    })
  }

}
