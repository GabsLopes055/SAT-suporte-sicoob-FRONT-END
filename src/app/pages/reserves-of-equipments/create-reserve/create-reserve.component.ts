import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentsService } from '../shared/equipments.service';
import { equipments } from 'src/app/interfaces/equipments.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReserveServiceService } from '../shared/reserve-service.service';

@Component({
  selector: 'app-create-reserve',
  templateUrl: './create-reserve.component.html',
  styleUrls: ['./create-reserve.component.css']
})
export class CreateReserveComponent {

  isLoading: boolean = true
  formCreate!: FormGroup;
  equipments!: equipments[]

  panelOpenState = true;

  constructor(
    private dialog: MatDialog,
    private serviceEquipment: EquipmentsService,
    private serviceReserve: ReserveServiceService,
    private formBuilder: FormBuilder
  ){
    this.formCreate = this.createForm();
    this.listAllEquipments()
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = false
  }

  listAllEquipments() {
    return this.serviceEquipment.listAllEquipments().subscribe((response) =>{
      this.equipments = response
    })
  }

  createForm() {
    return this.formBuilder.group({
      nameUser: ['', Validators.required],
      nameEquipment: ['', Validators.required]
    })
  }

  createReserve() {
    this.serviceReserve.createReserve(this.formCreate.value).subscribe()
    this.dialog.closeAll()
    this.serviceReserve.showMessage("Reserva Criada", "success")
  }

}
