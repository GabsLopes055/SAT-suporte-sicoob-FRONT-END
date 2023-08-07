import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ManualsService } from '../shared/manuals.service';
import { CategoryOfManualsService } from '../shared/category-of-manuals.service';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { manual } from 'src/app/interfaces/manuals.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateManualComponent } from '../create-manual/create-manual.component';
import { ListCategoryComponent } from '../category/list-category/list-category.component';

@Component({
  selector: 'app-list-manuais',
  templateUrl: './list-manuais.component.html',
  styleUrls: ['./list-manuais.component.css']
})
export class ListManuaisComponent {

  listCategory!: category[] | any;
  listManuals!: manual[];

  constructor(
    private location: Location,
    private service: ManualsService,
    private serviceCategory: CategoryOfManualsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.listAllManuals()
    this.listAllCategory()

  }

  public listAllCategory() {
    this.serviceCategory.listAllCategory().subscribe(response => {
      this.listCategory = response
      // console.log(this.listCategory)
    })
  }

  public listAllManuals() {
    this.service.listAllManuals().subscribe(response => {
      this.listManuals = response
    })
  }

  public createManual() {
    this.dialog.open(CreateManualComponent, {
      width: "50%",
      height: "auto",
    })
  }

  model = this.dialog.afterAllClosed.subscribe(() => {
    this.listAllCategory()
  })

  listCategories() {
    this.dialog.open(ListCategoryComponent, {
      width: '50%',
      height: '90%'
    })
  }

  cancel() {
    this.location.back()
  }

}
