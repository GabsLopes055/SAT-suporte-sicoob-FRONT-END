import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentsService } from '../shared/equipments.service';
import { equipments } from 'src/app/interfaces/equipments.model';

@Component({
  selector: 'app-create-reserve',
  templateUrl: './create-reserve.component.html',
  styleUrls: ['./create-reserve.component.css']
})
export class CreateReserveComponent {

  isLoading: boolean = true

  equipments!: equipments[]

  constructor(
    private dialog: MatDialog,
    private service: EquipmentsService
  ){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = false
    this.service.listAllEquipments().subscribe((response) =>{
      console.log(response)
    })
  }

}
