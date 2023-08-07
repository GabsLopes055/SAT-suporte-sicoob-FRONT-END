import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListCategoryComponent } from '../list-category/list-category.component';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {

  constructor(
    private dialog: MatDialog
  ) {}

  // model = this.dialog.afterAllClosed.subscribe(() => {
  //   this.dialog.open(ListCategoryComponent)
  // })

}
