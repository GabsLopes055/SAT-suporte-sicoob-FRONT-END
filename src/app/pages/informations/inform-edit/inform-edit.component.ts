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
  formEdit!: FormGroup;
  selectedFile: any = null;
  docName: any = ''


  constructor(
    private formBuilder: FormBuilder,
    private service: InformationService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: { information: information }
  ) {
    this.isLoading = false
    this.formEdit = this.createForm()
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

    //esta condicional é para validar quando o usuário passar um novo arquivo de informativo ou permanece o mesmo

    if (this.selectedFile) {

      this.service.editInformation(
        this.selectedFile,
        this.data.information.data,
        this.data.information.docName,
        this.formEdit.controls['title'].value,
        this.formEdit.controls['description'].value,
        this.formEdit.controls['content'].value,
        this.data.information.cdInform).subscribe(() => { })
      this.dialog.closeAll()
      this.service.showMessage("Informativo Editado", "warning")

    } else {

      // Converte a string base64 para bytes
      const byteCharacters = atob(this.data.information.data);

      // Converte os bytes em um array buffer
      const arrayBuffer = new ArrayBuffer(byteCharacters.length);
      const uint8Array = new Uint8Array(arrayBuffer);

      for (let i = 0; i < byteCharacters.length; i++) {
        uint8Array[i] = byteCharacters.charCodeAt(i);
      }

      // Cria o Blob a partir do array buffer
      const blob = new Blob([arrayBuffer], { type: 'application/octet-stream' });

      this.service.editInformation(
        this.selectedFile,
        blob,
        this.data.information.docName,
        this.formEdit.controls['title'].value,
        this.formEdit.controls['description'].value,
        this.formEdit.controls['content'].value,
        this.data.information.cdInform).subscribe(() => { })
      this.dialog.closeAll()
      this.service.showMessage("Informativo Editado", "warning")
    }

  }

  deleteManual() {
    this.service.deleteInformation(this.data.information.cdInform).subscribe((response) => { })
    this.service.showMessage("Informativo Deletado", "error")
    this.dialog.closeAll()
  }

}
