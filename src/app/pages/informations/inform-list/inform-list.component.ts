import { Component } from '@angular/core';
import { information } from 'src/app/interfaces/information.model';
import { InformationService } from '../shared/information.service';

@Component({
  selector: 'app-inform-list',
  templateUrl: './inform-list.component.html',
  styleUrls: ['./inform-list.component.css']
})
export class InformListComponent {

  isLoading: boolean = true;

  listInformations!: information;

  constructor(private service: InformationService){
    console.log(this.listInformations)
  }

  public listAllInformations(){
    this.service.listAllInformations().subscribe(response => {
      response = this.listInformations;
    })
  }


}
