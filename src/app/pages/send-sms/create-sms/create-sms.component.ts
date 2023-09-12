import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/security/auth/login.service';
import { SmsServiceService } from '../shared/sms-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-sms',
  templateUrl: './create-sms.component.html',
  styleUrls: ['./create-sms.component.css']
})
export class CreateSmsComponent {

  formGroup!: FormGroup;

  selected = '';

  constructor(
    private formBuilder: FormBuilder,
    private sessionLogin: LoginService,
    private service: SmsServiceService,
    private dialog: MatDialog
  ) {
    this.formGroup = this.createFormSMS();
  }

  public isFormControlInvalid(controlName: string): boolean {
    return !!(this.formGroup.get(controlName)?.invalid && this.formGroup.get(controlName)?.touched)
  }

  createFormSMS(): FormGroup {
    return this.formBuilder.group({
      username: ['fulano.teste', Validators.required],
      phone: ['+5561994452922', Validators.required],
      password: [this.generationPassword(), Validators.required],
      textsms: ['', Validators.required]
    })
  }

  generationPassword(): string {

    var characters = "ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz123456789@#$%";
    var password = "";
    var size = 8;

    for (var i = 0; i < size; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }

    return password;
  }

  sendsms() {
    this.textSMS()
    this.service.sendSMS(this.formGroup.value).subscribe(() => {
      this.service.showMessage('SMS Enviado ! Não se esqueça de resetar a senha deste usuário no AD !', "success")
      this.dialog.closeAll();
    })

  }

  textSMS() {

    if (this.selected == 'cabal') {

      this.formGroup.controls['textsms'].setValue('Prezado(a), Informamos que sua senha de acesso é: ' + this.formGroup.controls['password'].value + '. Será necessário alterá-la, recomendamos que utilize a VPN Checkpoint. Caso não possua o programa, acesse o site: https://vpn.cabal.com.br/. Atenciosamente, Equipe de Suporte de Acessos.')

    } else if (this.selected == 'bancoob') {

      this.formGroup.controls['textsms'].setValue('Prezado(a), Informamos que sua senha de acesso é: ' + this.formGroup.controls['password'].value + '. Atenciosamente, Equipe de Suporte de Acessos.')

    } else if (this.selected == 'ambos') {
      this.formGroup.controls['textsms'].setValue('senha para ambos dominios: ' + this.formGroup.controls['password'].value)
    } else {
      this.service.showMessage('Preencha o formulário corretamente !', "secondary")
    }
  }

}