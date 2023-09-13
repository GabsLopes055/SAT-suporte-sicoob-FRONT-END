import { Component } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { LoginServiceRegister } from '../auth/register-login.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: LoginServiceRegister, public dialog: MatDialog) {
    this.formGroup = this.createFormRegister();
  }

  public isFormControlInvalid(controlName: string): boolean {
    return !!(this.formGroup.get(controlName)?.invalid && this.formGroup.get(controlName)?.touched)
  }

  createFormRegister(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['',  ([Validators.required, Validators.email, Validators.minLength(5)])],
      password: ['', Validators.required],
      status: ['DESATIVADO', Validators.required]
    })
  }

  createNewUser() {
    this.service.createdNewUser(this.formGroup.value).subscribe(() => {
      this.service.showMessage('Usuário Cadastrado. Aguarde um de nossos técnicos aprovar sua entrada !', "primary")
      this.dialog.closeAll();
    })
  }

}
