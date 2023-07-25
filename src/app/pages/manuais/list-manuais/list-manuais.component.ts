import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ManualsService } from '../shared/manuals.service';
import { CategoryOfManualsService } from '../shared/category-of-manuals.service';
import { category } from 'src/app/interfaces/categoryOfManuals.model';

@Component({
  selector: 'app-list-manuais',
  templateUrl: './list-manuais.component.html',
  styleUrls: ['./list-manuais.component.css']
})
export class ListManuaisComponent {

  listCategory!: category[];

  constructor(
    private location: Location,
    private service: ManualsService,
    private serviceCategory: CategoryOfManualsService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log(this.listCategory = this.category.listAllCategory())
    console.log(this.listAllCategory())
  }

  public listAllCategory(): any {
    this.serviceCategory.listAllCategory().subscribe(response => {
      this.listCategory = response
      console.log(response)
    })
  }

  cancel() {
    this.location.back()
  }

}
