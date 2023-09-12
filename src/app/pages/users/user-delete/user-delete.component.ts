import { Component, Inject } from '@angular/core';
import { UserServiceService } from '../shared/user-service.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {

  constructor(
    private service: UserServiceService,
    private model: MatDialogRef<UserDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { idUser: number }
  ) { }

  deleteUser() {
    this.service.deleteUser(this.data.idUser).subscribe((response) => {})
    this.service.showMessage('Usuário Deletado !', "error")
    this.model.close();
  }




}
