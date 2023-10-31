import { Component, Directive } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateReserveComponent } from '../create-reserve/create-reserve.component';
import { ReserveServiceService } from '../shared/reserve-service.service';
import { reserve } from 'src/app/interfaces/reserve.model';
import { ReceiveEquipmentComponent } from '../receive-equipment/receive-equipment.component';

@Component({
  selector: 'app-list-all-reserves',
  templateUrl: './list-all-reserves.component.html',
  styleUrls: ['./list-all-reserves.component.css']
})

export class ListAllReservesComponent {

  isLoading: boolean = true;

  reserved: string = '';

  iconEquipment: string = '';

  reserves!: reserve[];

  event: any = null;

  indices: string[] = ['cdReserve', 'nameUser', 'nameEquipment', 'dateOfRemove', 'dateOfAdd', 'status', 'goBack'];

  constructor(
    private dialog: MatDialog,
    private service: ReserveServiceService
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = false
    this.listAllReserves()
  }

  listAllReserves() {
    this.service.listAllReserve().subscribe((response) => {
      this.reserves = response
    })
  }

  createReserve() {
    this.dialog.open(CreateReserveComponent, {
      width: "60%",
      height: "80%"
    })
  }

  getStatusReserve(status: boolean): string {
    if (status) {
      this.reserved = "Não Entregue"
    } else {
      this.reserved = "Entregue"
    }
    return "retorno de uma função que eu não sei porque tem que retornar e não sei onde vai ser usado !"
  }

  goBackEquipment(status: boolean): string {
    if (status) {
      this.iconEquipment = "history"
    } else {
      this.iconEquipment = "check"
    }
    return "retorno de uma função que eu não sei porque tem que retornar e não sei onde vai ser usado !"
  }

  receiveEquipment(reserve: reserve) {
    if (reserve.status == true) {
      this.dialog.open(ReceiveEquipmentComponent, {
        width: "50%",
        height: "auto",
        data: { data: reserve }
      })
    }
  }

  modal = this.dialog.afterAllClosed.subscribe(() => {
    this.listAllReserves()
  })

}
