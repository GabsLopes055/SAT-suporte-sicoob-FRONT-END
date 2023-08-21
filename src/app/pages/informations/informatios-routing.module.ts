import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformListComponent } from './inform-list/inform-list.component';

const routes: Routes = [
  { path: '', component: InformListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformatiosRoutingModule { }
