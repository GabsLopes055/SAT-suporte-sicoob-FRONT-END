import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ListCategoryComponent } from '../list-category/list-category.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { CategoryOfManualsService } from '../../shared/category-of-manuals.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {

  formEdit!: FormGroup

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private category: {category: category},
    private service: CategoryOfManualsService
  ) {}


  ngOnInit(): void {
    //Called after the constructor, intializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.formEdit = this.createForm()
  }

  createForm() {
    return this.formBuilder.group({
      cdCategory: [this.category.category.cdCategory, Validators.required],
      category: [this.category.category.category, Validators.required]
    })
  }

  editCategory() {
    this.service.editCategory(this.category.category.cdCategory, this.formEdit.value).subscribe(() => {})
    this.service.showMessage("Categoria Editada !", "warning");
    this.dialog.closeAll()
  }

}
