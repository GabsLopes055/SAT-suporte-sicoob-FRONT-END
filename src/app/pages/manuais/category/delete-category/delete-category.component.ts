import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoryOfManualsService } from '../../shared/category-of-manuals.service';
import { ListCategoryComponent } from '../list-category/list-category.component';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent {

  isLoading: boolean = true

  constructor(
    @Inject(MAT_DIALOG_DATA) private cdCategory: { cdCategory: number },
    private service: CategoryOfManualsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.isLoading = false
  }

  deleteCategory() {
    this.service.deleteCategory(this.cdCategory.cdCategory).subscribe(() => {})
    this.dialog.closeAll()
    this.service.showMessage("Categoria Deletada !")
  }

}
