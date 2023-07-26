import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ManualsService } from '../shared/manuals.service';
import { CategoryOfManualsService } from '../shared/category-of-manuals.service';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { manual } from 'src/app/interfaces/manuals.model';

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
    private serviceCategory: CategoryOfManualsService
  ) { }

  ngOnInit(): void {

    this.listAllManuals()
    this.listAllCategory()
    
  }

  public listAllCategory() {
    this.serviceCategory.listAllCategory().subscribe(response => {
      this.listCategory = response
      console.log(this.listCategory)
    })
  }

  public listAllManuals() {
    this.service.listAllManuals().subscribe(response => {
      this.listManuals = response
      
    })
  }

  cancel() {
    this.location.back()
  }

}
