import { Component } from '@angular/core';
import { automation } from 'src/app/interfaces/automations.model';
import { AutomationServiceService } from '../shared/automation-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AutomationCreatedComponent } from '../automation-created/automation-created.component';
import { DeleteAutomationComponent } from '../delete-automation/delete-automation.component';

@Component({
  selector: 'app-automation-list',
  templateUrl: './automation-list.component.html',
  styleUrls: ['./automation-list.component.css']
})
export class AutomationListComponent {

  isLoading: boolean = true
  listAutomation: automation[] = []

  constructor(private service: AutomationServiceService, private dialog: MatDialog) {
    this.isLoading = false
    this.listAllAutomation()
  }

  modal = this.dialog.afterAllClosed.subscribe(() => {
    this.listAllAutomation()
  })

  listAllAutomation(): void {
    this.service.listAllAutomations().subscribe((response) => {
      this.listAutomation = response
    })
  }

  createdAutomation(): void {
    this.dialog.open(AutomationCreatedComponent, {
      width: '50%',
      height: 'auto'
    })
  }

  downloadFile(cdAutomation: number | any, docName: string | any) {


    this.service.downloadFile(cdAutomation).subscribe(response => {

      const blob = new Blob([response], { type: `${response.type}` })

      // Criando um link temporário para fazer o download do arquivo
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);

      // Configurando o cabeçalho Content-Disposition para definir o nome do arquivo, docName é o nome do arquivo quando é baixado
      link.setAttribute('download', docName);

      // Clicando no link para iniciar o download
      link.click();

    })
  }

  deleteAutomation(id: number | any) {
    this.dialog.open(DeleteAutomationComponent, {
      width: '50%',
      height: 'auto',
      data: id
    })
  }



}
