import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { MyInformationComponent } from './pages/my-information/my-information.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/user-list/users.component';
import { AuthGuard } from './security/auth/AuthGuard.guard';


const routes: Routes = [
  { path: '', component: LoginComponent}, 
  {path: 'dashboard', component: LayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'my-informations', component: MyInformationComponent, canActivate: [AuthGuard] },
      { path: 'users', loadChildren: () => import('./../app/pages/users/user.module').then(module => module.UserModule) }
    ]
  },
  { path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
