import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../shared/user-service.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {



  constructor(private formBuilder: FormBuilder,
    private service: UserServiceService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: { user: User }) {
    this.formGroup = this.createFormEdit();
  }

  formGroup!: FormGroup;

  public isFormControlInvalid(controlName: string): boolean {
    return !!(this.formGroup.get(controlName)?.invalid && this.formGroup.get(controlName)?.touched)
  }


  createFormEdit(): FormGroup {
    return this.formBuilder.group({
      cdUser: [this.data.user.cdUser, Validators.required],
      name: [this.data.user.name, Validators.required],
      username: [this.data.user.username, Validators.required],
      email: [this.data.user.email, ([Validators.required, Validators.email, Validators.minLength(5)])],
      status: [this.data.user.status, Validators.required]
    })
  }


  editUser() {
    return this.service.edituser(this.formGroup.value).subscribe((response) => {
      this.dialog.closeAll()
      this.service.showMessage('Usuário Editado !')
    })
  }

}
