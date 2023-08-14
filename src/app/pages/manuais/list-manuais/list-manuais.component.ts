import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ManualsService } from '../shared/manuals.service';
import { CategoryOfManualsService } from '../shared/category-of-manuals.service';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { manual } from 'src/app/interfaces/manuals.model';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
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
      console.log(this.listCategory)
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

  downloadFile(manual: manual) {
    console.log(manual.id)
    
    const cdManual = manual.id

    console.log(cdManual)

    // this.service.downloadFile(cdManual).subscribe(response => {

    //   // console.log(response)
    //   const data = response.body

      // const blob = new Blob(data, { type: docType }); // Cria um blob a partir dos bytes recebidos
      // const link = document.createElement('a');
      // link.href = window.URL.createObjectURL(blob);
      // link.download = docName;
      // link.click(); // Clique simulado no link para iniciar o download

      // const a = document.createElement('a');
      // document.body.appendChild(a);
      // const json = JSON.stringify(response.body),
      //   blob = new Blob([json], { type: response.body.type }),
      //   url = window.URL.createObjectURL(blob);
      // a.href = url;
      // a.download = response.body.name;
      // a.click();
      // window.URL.revokeObjectURL(url);

      // const blob = new Blob([response.body], {type: 'application/*'});
      // const url = window.URL.createObjectURL(blob);
      // window.open(url)

      // const size = response.body?.size
      // console.log(size)
      // // console.log(response.url);
      // const blob = new Blob(size, { type: 'application/*' });
      // const url = window.URL.createObjectURL(blob);
      // window.open(url);

    // })
  }

  cancel() {
    this.location.back()
  }

}
