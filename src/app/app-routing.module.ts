import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { AuthGuard } from './security/auth/AuthGuard.guard';
import { LoginComponent } from './security/login/login.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'send-sms', loadChildren: () => import('./../app/pages/send-sms/send-sms.module').then(module => module.SendSMSModule) },
      { path: 'my-informations', loadChildren: () => import('./../app/pages/my-information/my-information.module').then(module => module.MyInformationModule) },
      { path: 'users', loadChildren: () => import('./../app/pages/users/user.module').then(module => module.UserModule) },
      { path: 'softwares', loadChildren: () => import('./../app/pages/softwares/softwares.module').then(module => module.SoftwaresModule) },
      {path: 'manuais', loadChildren: () => import('./pages/manuais/manual.module').then(module => module.ManualModule)}
    ]
  },
  { path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
