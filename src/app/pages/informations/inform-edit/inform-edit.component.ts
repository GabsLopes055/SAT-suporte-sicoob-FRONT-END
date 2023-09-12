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
  informEdit!: information;

  constructor(
    private formBuilder: FormBuilder,
    private service: InformationService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: {cdInform: number}
  ) {
    this.isLoading = false
    this.formCreate = this.createForm()
  }

  ngOnInit() {

    this.service.findInformation(this.data.cdInform).subscribe((response) => {
      this.informEdit = response
    })
    console.log(this.informEdit)
  }


  public createForm(): FormGroup {
    return this.formBuilder.group({
      content: [this.informEdit?.content, Validators.required],
      description: [this.informEdit?.description, Validators.required],
      title: [this.informEdit?.title, Validators.required],
      file: ['']
    })
  }

  onFileSelected(event: any) {
    this.isLoading = true
    this.selectedFile = event.target.files[0] as File;
    this.isLoading = false
  }

  public EditInformation() {
    alert('Criar logica para editar')
  }
}
