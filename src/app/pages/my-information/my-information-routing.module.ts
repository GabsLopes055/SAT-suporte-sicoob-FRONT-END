import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInformationComponent } from './my-information-list/my-information.component';
import { AuthGuard } from 'src/app/security/auth/AuthGuard.guard';

const routes: Routes = [
  {path: '', component: MyInformationComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInformationRoutingModule { }
