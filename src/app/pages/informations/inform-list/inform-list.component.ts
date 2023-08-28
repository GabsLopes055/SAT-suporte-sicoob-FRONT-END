import { Component } from '@angular/core';
import { information } from 'src/app/interfaces/information.model';
import { InformationService } from '../shared/information.service';
import { MatDialog } from '@angular/material/dialog';
import { InformCreateComponent } from '../inform-create/inform-create.component';
import { ViewInformationComponent } from '../view-information/view-information.component';

@Component({
  selector: 'app-inform-list',
  templateUrl: './inform-list.component.html',
  styleUrls: ['./inform-list.component.css']
})
export class InformListComponent {

  isLoading: boolean = true;

  informations!: information[];

  constructor(private service: InformationService, private dialog: MatDialog) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.listAllInformations()
  }

  public listAllInformations() {
    return this.service.listAllInformations().subscribe(response => {
      this.informations = response
      this.isLoading = false
    })
  }

  createNewInformation() {
    this.dialog.open(InformCreateComponent, {
      width: "50%",
      height: "auto"
    })
  }

  viewInformation() {
    this.dialog.open(ViewInformationComponent, {
      width: "50%",
      height: "auto"
    })
  }

  modal = this.dialog.afterAllClosed.subscribe(() => {
    this.listAllInformations();
  })


}
