import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  formPassword!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginService,
    public dialog: MatDialog
  ) {
    this.formPassword = this.createFormResetPassword()
  }

  createFormResetPassword(): FormGroup {
    return this.formBuilder.group({
      username: ['', Validators.required],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newConfirmPassword: ['', Validators.required]
    })
  }

  resetPassword() {
    this.service.resetPasswordByUser(this.formPassword.value).subscribe(() => {
      this.service.showMessage('Senha Resetada !')
      this.dialog.closeAll();
    })
  }

}
