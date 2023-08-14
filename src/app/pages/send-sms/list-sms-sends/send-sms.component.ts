import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateSmsComponent } from '../create-sms/create-sms.component';
import { sms } from '../../../interfaces/sms.model';
import { SmsServiceService } from '../shared/sms-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { ViewSMSComponent } from '../view-sms/view-sms.component';

@Component({
  selector: 'app-send-sms',
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.css']
})
export class SendSMSComponent {

  indices: string[] = ['cdSMS', 'username', 'phone', 'view']
  isLoading: boolean = true;
  sms!: sms[];

  constructor(
    private dialog: MatDialog,
    private service: SmsServiceService,
  ) { }


  ngOnInit(): void {

    this.listAllSms()
  }

  model = this.dialog.afterAllClosed.subscribe(() => {
    this.listAllSms()
  })


  listAllSms(): any {
    this.service.listAllSms().subscribe((response) => {
      this.sms = response;
      this.isLoading = false
    })
  }


  sendNewSMS() {
    this.dialog.open(CreateSmsComponent, {
      width: "50%",
      height: "auto"
    })
  }

  viewSMS(sms: sms) {
    this.dialog.open(ViewSMSComponent, {
      width: "50%",
      height: "auto",
      data: {
        sms: sms
      }
    })
  }
}
