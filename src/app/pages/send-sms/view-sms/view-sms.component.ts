import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { sms } from 'src/app/interfaces/sms.model';

@Component({
  selector: 'app-view-sms',
  templateUrl: './view-sms.component.html',
  styleUrls: ['./view-sms.component.css']
})
export class ViewSMSComponent {

  sms: sms = this.data.sms

  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: { sms: sms }
  ) { 
    console.log(this.sms)
  }


}
