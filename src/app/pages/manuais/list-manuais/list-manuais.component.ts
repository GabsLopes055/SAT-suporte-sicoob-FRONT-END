import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-manuais',
  templateUrl: './list-manuais.component.html',
  styleUrls: ['./list-manuais.component.css']
})
export class ListManuaisComponent {

  constructor(
    private location: Location,
  ){}

  cancel() {
    this.location.back()
  }

}
