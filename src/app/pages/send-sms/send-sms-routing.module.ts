import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendSMSComponent } from './list-sms-sends/send-sms.component';
import { AuthGuard } from 'src/app/security/auth/AuthGuard.guard';

const routes: Routes = [
  {path: '', component: SendSMSComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendSMSRoutingModule { }
