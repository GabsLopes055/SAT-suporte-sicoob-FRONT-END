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

  informations!: information[];

  constructor(private service: InformationService) {}

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


}
