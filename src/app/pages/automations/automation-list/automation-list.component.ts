import { Component } from '@angular/core';
import { automation } from 'src/app/interfaces/automations.model';
import { AutomationServiceService } from '../shared/automation-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AutomationCreatedComponent } from '../automation-created/automation-created.component';

@Component({
  selector: 'app-automation-list',
  templateUrl: './automation-list.component.html',
  styleUrls: ['./automation-list.component.css']
})
export class AutomationListComponent {

  isLoading: boolean = true
  listAutomation: automation[] = []

  constructor(private service:AutomationServiceService, private dialog: MatDialog) {
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

  
  

}
