import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListManuaisComponent } from './list-manuais/list-manuais.component';
import { AuthGuard } from 'src/app/security/auth/AuthGuard.guard';

const routes: Routes = [
  {path: '', component: ListManuaisComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManualRoutingModule { }
