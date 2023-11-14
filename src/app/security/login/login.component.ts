import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../auth/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public formLogin: FormGroup;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {

    this.formLogin = this.criarFormulario();

  }

  title = 'Sistema de Auxílio Técnico';

  ngOnInit(): void {

  }

  public criarFormulario(): FormGroup {
    return this.formBuilder.group({
      username: ["teste", [Validators.required]],
      password: ["1234", [Validators.required]]
    })
  }

  public submitForm(): any {

    if (this.formLogin.valid) {
      const { username, password } = this.formLogin.value;
      this.loginService.login(username, password).subscribe(
        (response) => {
          this.router.navigate(['dashboard'])
        }
      )
    }
  }

  public register() {
    this.dialog.open(RegisterComponent, {
      width: "50%",
      height: "auto"
    })
  }

  public resetPassword() {
    this.dialog.open(ResetPasswordComponent, {
      width: "50%",
      height: "auto"
    })
  }



}
