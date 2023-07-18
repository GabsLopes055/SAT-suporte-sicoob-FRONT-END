import { Component } from '@angular/core';
import { MyInformationService } from '../shared/my-information.service';
import { User } from 'src/app/interfaces/user.model';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.css']
})
export class MyInformationComponent {

  constructor(
    private myInformation: MyInformationService,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }


  user!: User;

  formPassword!: FormGroup;

  // id = this.user.cdUser

  ngOnInit() {
    this.listMyInformation();
    this.createForm();
    console.log(this.formPassword.value)
    console.log()
  }

  createForm(): FormGroup {
    return this.formPassword = this.formBuilder.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newConfirmPassword: ['', Validators.required]
    })
  }

  listMyInformation() {
    return this.myInformation.listUserByUserName().subscribe(user => {
      this.user = user
    })
  }

  resetPassword() {
    this.myInformation.resetPasswordByUser(this.formPassword.value).subscribe({})
    this.myInformation.showMessage('Senha Alterada !')
    this.formPassword.reset()
  }

  cancel() {
    this.location.back()
  }

}
