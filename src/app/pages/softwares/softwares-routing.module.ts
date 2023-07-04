import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSoftwaresComponent } from './list-softwares/list-softwares.component';
import { AuthGuard } from 'src/app/security/auth/AuthGuard.guard';

const routes: Routes = [
  {path: '', component: ListSoftwaresComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwaresRoutingModule { }
