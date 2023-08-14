import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateSoftwaresComponent } from '../create-softwares/create-softwares.component';
import { SoftwaresService } from '../shared/softwares.service';
import { software } from 'src/app/interfaces/softwares.model';
import { EditSoftwaresComponent } from '../edit-softwares/edit-softwares.component';
import { CategoryOfManualsService } from '../../manuais/shared/category-of-manuals.service';

@Component({
  selector: 'app-list-softwares',
  templateUrl: './list-softwares.component.html',
  styleUrls: ['./list-softwares.component.css']
})
export class ListSoftwaresComponent {

  softwares!: software[]
  isLoading: boolean = true;

  constructor(
    private dialog: MatDialog,
    private service: SoftwaresService
  ) { }

  createSoftware() {
    this.dialog.open(CreateSoftwaresComponent, {
      width: '50%',
      height: 'auto'
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listAllSoftwares()
  }

  listAllSoftwares(): any {
    this.service.listAllSoftware().subscribe((response) => {
      this.softwares = response
      this.isLoading = false
    })
  }

  model = this.dialog.afterAllClosed.subscribe(() => {
    this.listAllSoftwares()
  })

  editSoftware(software: software) {
    this.dialog.open(EditSoftwaresComponent, {
      width: '50%',
      height: 'auto',
      data: {
        software: software
      }
    })
  }

}
