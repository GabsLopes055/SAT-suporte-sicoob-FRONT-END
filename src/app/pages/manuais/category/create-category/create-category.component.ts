import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryOfManualsService } from '../../shared/category-of-manuals.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ListManuaisComponent } from '../../list-manuais/list-manuais.component';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  formCreate!: FormGroup;
  
  // modalCreate = this.dialog;

  constructor(
    private formBuilder: FormBuilder,
    private service: CategoryOfManualsService,
    private modal: MatDialogRef<CreateCategoryComponent>
  ){
    this.formCreate = this.createForm()
  }

  createForm() {
    return this.formBuilder.group({
      category: ['', Validators.required]
    })
  }

  createCategory() {
    this.service.createCategory(this.formCreate.value).subscribe(response => {
      this.service.showMessage('Categoria Cadastrada');
      this.modal.close()
    })
  }

  // dialog = this.modal.afterClosed().subscribe({

  // })

}
