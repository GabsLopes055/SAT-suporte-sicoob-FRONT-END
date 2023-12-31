import { Component } from '@angular/core';
import { CategoryOfManualsService } from '../../shared/category-of-manuals.service';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { DeleteCategoryComponent } from '../delete-category/delete-category.component';
import { CreateCategoryComponent } from '../create-category/create-category.component';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {

  listCategory!: category[];
  isLoading: boolean = true;
  row: String[] = ['cdCategory', 'category', 'edit', 'delete'];

  constructor(
    private category: CategoryOfManualsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listAllCategory()
  }

  public listAllCategory() {
    this.category.listAllCategory().subscribe(response => {
      this.listCategory = response
      this.isLoading = false
    })
  }

  editCategory(category: category) {
    this.dialog.open(EditCategoryComponent, {
      width: '40%',
      height: 'auto',
      data: {
        category: category
      }
    })
  }

  deleteCategory(cdCategory: number) {
    this.dialog.open(DeleteCategoryComponent, {
      width: '40%',
      height: 'auto',
      data: {
        cdCategory: cdCategory
      }
    })
  }

  createCategory() {
    this.dialog.open(CreateCategoryComponent, {
      width: '40%',
      height: 'auto'
    })
  }



}
