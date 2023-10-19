import { Component, Inject } from '@angular/core';
import { ReserveServiceService } from '../shared/reserve-service.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { reserve } from 'src/app/interfaces/reserve.model';

@Component({
  selector: 'app-receive-equipment',
  templateUrl: './receive-equipment.component.html',
  styleUrls: ['./receive-equipment.component.css']
})
export class ReceiveEquipmentComponent {

  isLoading: boolean = true

  reserve!: reserve

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { data: reserve },
    private service: ReserveServiceService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = false
    this.reserve = this.data.data
    console.log(this.reserve)
  }

  receivedEquipment(){
    this.service.finalizeReservation(this.data.data.cdReserve).subscribe()
    this.dialog.closeAll()
    this.service.showMessage("Reserva Finalizada", "success")
  }

}
