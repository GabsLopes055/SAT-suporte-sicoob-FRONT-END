import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EquipmentsService } from '../shared/equipments.service';
import { equipments } from 'src/app/interfaces/equipments.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReserveServiceService } from '../shared/reserve-service.service';
import { TermsPDFComponent } from '../terms-pdf/terms-pdf.component';
import { jsPDF } from 'jspdf';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-create-reserve',
  templateUrl: './create-reserve.component.html',
  styleUrls: ['./create-reserve.component.css']
})
export class CreateReserveComponent {

  @ViewChild('termsPDF', { static: false }) elemento!: ElementRef;
  // @ViewChild('terms', { static: false }) terms!: ElementRef;
  // @ViewChild('contentToConvert') contentToConvert!: ElementRef;

  isLoading: boolean = true
  formCreate!: FormGroup;
  equipments!: equipments[]
  timeAndDate!: string;
  panelOpenState = true;
  checkboxValue: boolean = false;

  constructor(
    private dialog: MatDialog,
    private serviceEquipment: EquipmentsService,
    private serviceReserve: ReserveServiceService,
    private formBuilder: FormBuilder
  ) {
    this.formCreate = this.createForm();
    this.listAllEquipments()
  }

  enableButton(event: MatCheckboxChange) {
    this.checkboxValue = event.checked
  }

  ngOnInit(): void {
    this.isLoading = false
    const newTime = new Date();
    this.timeAndDate = newTime.toLocaleString();
  }

  listAllEquipments() {
    return this.serviceEquipment.listAllEquipments().subscribe((response) => {
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
    if (this.formCreate.valid) {

      this.serviceReserve.createReserve(this.formCreate.value).subscribe()
      this.dialog.closeAll()
      this.serviceReserve.showMessage("Reserva Criada", "success")

      // Configurar a largura do elemento HTML
      const elementoHTML = this.elemento.nativeElement;
      elementoHTML.style.width = '575px'; // Defina a largura desejada em pixels

      let pdf = new jsPDF('p', 'pt', 'a4');
      pdf.html(elementoHTML, {
        margin: 10,
        callback: (pdf) => {
          pdf.save(this.formCreate.controls['nameUser'].value + " - Termo de Uso.pdf");
        }
      });

    } else {
      this.serviceEquipment.showMessage("Preencha o formulário corretamente.", 'error')
    }
  }
}