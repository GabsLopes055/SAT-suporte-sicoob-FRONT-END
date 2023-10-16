import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAllReservesComponent } from './list-all-reserves/list-all-reserves.component';
import { AuthGuard } from 'src/app/security/auth/AuthGuard.guard';

const routes: Routes = [
  {path: '', component: ListAllReservesComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservesOfEquipmentsRoutingModule { }
