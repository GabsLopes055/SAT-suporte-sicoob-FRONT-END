import { Component } from '@angular/core';
import { CategoryOfManualsService } from '../../shared/category-of-manuals.service';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {

  listCategory!: category[];

  row: String[] = ['cdCategory', 'category', 'edit', 'delete'];

  constructor(
    private category: CategoryOfManualsService
  ) {}

  ngOnInit(){
    this.listAllCategory()
  }

  public listAllCategory() {
    this.category.listAllCategory().subscribe(response => {
      this.listCategory = response
      console.log(this.listCategory)
    })
  }

}
