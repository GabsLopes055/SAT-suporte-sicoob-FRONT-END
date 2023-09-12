import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ManualsService } from '../shared/manuals.service';
import { CategoryOfManualsService } from '../shared/category-of-manuals.service';
import { category } from 'src/app/interfaces/categoryOfManuals.model';
import { manual } from 'src/app/interfaces/manuals.model';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CreateManualComponent } from '../create-manual/create-manual.component';
import { ListCategoryComponent } from '../category/list-category/list-category.component';
import { CreateCategoryComponent } from '../category/create-category/create-category.component';
import { EditManualComponent } from '../edit-manual/edit-manual.component';

@Component({
  selector: 'app-list-manuais',
  templateUrl: './list-manuais.component.html',
  styleUrls: ['./list-manuais.component.css']
})
export class ListManuaisComponent {

  listCategory!: category[] | any;
  listManuals!: manual[];
  isLoading: boolean = true;

  constructor(
    private location: Location,
    private service: ManualsService,
    private serviceCategory: CategoryOfManualsService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listAllCategory()
  }

  public listAllCategory() {
    this.serviceCategory.listAllCategory().subscribe(response => {
      this.listCategory = response
      this.isLoading = false
    })
  }

  public createManual() {
    this.dialog.open(CreateManualComponent, {
      width: "50%",
      height: "auto",
    })
  }

  modal = this.dialog.afterAllClosed.subscribe(() => {
    this.listAllCategory()
  })

  listCategories() {
    this.dialog.open(ListCategoryComponent, {
      width: '50%',
      height: '90%'
    })
  }

  editManual(manual: manual) {
    this.dialog.open(EditManualComponent, {
      width: '50%',
      height: 'auto',
      data: {
        manual: manual
      }
    })
  }

  downloadFile(cdManual: number, docName: string) {

    this.service.downloadFile(cdManual).subscribe(response => {

      const blob = new Blob([response], { type: `${response.type}` })

      // Criando um link temporário para fazer o download do arquivo
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);

      // Configurando o cabeçalho Content-Disposition para definir o nome do arquivo, docName é o nome do arquivo quando é baixado
      link.setAttribute('download', docName);

      // Clicando no link para iniciar o download
      link.click();

    })
  }

  cancel() {
    this.location.back()
  }

}
