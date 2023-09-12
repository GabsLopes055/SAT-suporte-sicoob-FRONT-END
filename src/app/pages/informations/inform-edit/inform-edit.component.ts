import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InformationService } from '../shared/information.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { information } from 'src/app/interfaces/information.model';

@Component({
  selector: 'app-inform-edit',
  templateUrl: './inform-edit.component.html',
  styleUrls: ['./inform-edit.component.css']
})
export class InformEditComponent {

  isLoading: boolean = true
  formCreate!: FormGroup;
  selectedFile: any = null;
  docName: any = ''


  constructor(
    private formBuilder: FormBuilder,
    private service: InformationService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: { information: information }
  ) {
    this.isLoading = false
    this.formCreate = this.createForm()
  }

  ngOnInit() {
    this.docName = this.data.information.docName
    
  }


  public createForm() {
    return this.formBuilder.group({
      content: [this.data.information.content, Validators.required],
      description: [this.data.information.description, Validators.required],
      title: [this.data.information.title, Validators.required],
      file: ['', Validators.required]
    })
  }

  onFileSelected(event: any) {
    this.isLoading = true
    this.selectedFile = event.target.files[0] as File;
    this.isLoading = false
  }

  EditInformation() {
    this.service.showMessage("Criar logica para editar", "secondary")
  }

  deleteManual() {
    
  }
}
