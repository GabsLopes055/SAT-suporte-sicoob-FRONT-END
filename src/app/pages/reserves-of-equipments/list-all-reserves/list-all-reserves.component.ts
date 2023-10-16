import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateReserveComponent } from '../create-reserve/create-reserve.component';
import { ReserveServiceService } from '../shared/reserve-service.service';
import { reserve } from 'src/app/interfaces/reserve.model';

@Component({
  selector: 'app-list-all-reserves',
  templateUrl: './list-all-reserves.component.html',
  styleUrls: ['./list-all-reserves.component.css']
})
export class ListAllReservesComponent {

  isLoading: boolean = true;

  reserves!: reserve[];

  indices: string[] = ['cdReserve', 'nameUser', 'nameEquipment', 'dateOfRemove', 'dateOfAdd', 'status'];

  constructor(
    private dialog: MatDialog,
    private service: ReserveServiceService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = false
    this.service.listAllReserve().subscribe((response) =>{
      this.reserves = response
      console.log(this.reserves)
    })
  }

  createReserve() {
    this.dialog.open(CreateReserveComponent, {
      width: "80%",
      height: "auto"
    })
  }

}
