import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AutomationServiceService } from '../shared/automation-service.service';

@Component({
  selector: 'app-automation-created',
  templateUrl: './automation-created.component.html',
  styleUrls: ['./automation-created.component.css']
})
export class AutomationCreatedComponent {

  isLoading: boolean = true;
  selectedFile: any = null;
  createForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private service: AutomationServiceService
  ){}

  ngOnInit(): void {
    this.isLoading = false
    this.createForm = this.formCreate()
  }

  formCreate() {
    return this.formBuilder.group({
      file: ['', Validators.required]
    })
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }

  createdAutomation() {
    this.service.saveAutomation(this.selectedFile).subscribe()
    this.dialog.closeAll()
    this.service.showMessage("Arquivo Cadastrado !", "success")
  }
}
