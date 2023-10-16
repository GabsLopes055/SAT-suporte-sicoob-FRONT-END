import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateReserveComponent } from '../create-reserve/create-reserve.component';

@Component({
  selector: 'app-list-all-reserves',
  templateUrl: './list-all-reserves.component.html',
  styleUrls: ['./list-all-reserves.component.css']
})
export class ListAllReservesComponent {

  isLoading: boolean = true;


  constructor(
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = false
  }

  createReserve() {
    this.dialog.open(CreateReserveComponent, {
      width: "80%",
      height: "auto"
    })
  }

}
