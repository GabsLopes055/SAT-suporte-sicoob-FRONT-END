import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InformationService } from '../shared/information.service';
import { information } from 'src/app/interfaces/information.model';

@Component({
  selector: 'app-view-information',
  templateUrl: './view-information.component.html',
  styleUrls: ['./view-information.component.css']
})


export class ViewInformationComponent {

  information!: information

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { cdInform: any },
    private service: InformationService
  ) { }

  ngOnInit(): void {
    this.findInformation()
  }

  private findInformation() {
    this.service.findInformation(this.data.cdInform).subscribe((response) => {
      this.information = response
    })
  }



}
