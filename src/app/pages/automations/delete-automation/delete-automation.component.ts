import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AutomationServiceService } from '../shared/automation-service.service';

@Component({
  selector: 'app-delete-automation',
  templateUrl: './delete-automation.component.html',
  styleUrls: ['./delete-automation.component.css']
})
export class DeleteAutomationComponent {

  isLoading: boolean = true

  constructor(@Inject(MAT_DIALOG_DATA) private cdAutomation: {id: number | any}, 
  private service: AutomationServiceService,
  private dialog: MatDialog){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = false
  }

  deleteAutomationById() {
    this.service.deleteAutomationById(this.cdAutomation).subscribe(response => { })
    this.dialog.closeAll()
    this.service.showMessage("Arquivo Excluido !", "success")
  }

}
