import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-manual',
  templateUrl: './create-manual.component.html',
  styleUrls: ['./create-manual.component.css']
})
export class CreateManualComponent {

  formCreate!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.formCreate = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      file: ['', Validators.required],
      category: ['', Validators.required]
    })
  }

}
