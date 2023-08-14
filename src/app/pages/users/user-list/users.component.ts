import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { UserServiceService } from '../shared/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { RegisterComponent } from 'src/app/security/register/register.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(
    private service: UserServiceService,
    private model: MatDialog
  ) { }


  indices: string[] = ['cdUser', 'name', 'username', 'email', 'status', 'edit', 'delete'];
  isLoading: boolean = true;
  users!: User[];

  ngOnInit(): void {

    this.listAllUsers();
    console.log(this.users)
  }

  dialog = this.model.afterAllClosed.subscribe(() => {
    this.listAllUsers()
  })

  createUser() {
    this.model.open(RegisterComponent, {
      width: '50%',
      height: 'auto'
    })
  }

  editUser(user: User) {
    this.model.open(UserEditComponent, {
      width: '50%',
      height: 'auto',
      data: {
        user: user
      }
    })
  }

  deleteUser(idUser: number) {
    this.model.open(UserDeleteComponent, {
      width: '50%',
      height: 'auto',
      data: {
        idUser: idUser
      }
    })
  }

  listAllUsers(): any {
    this.service.listAllUsers().subscribe((response) => {
      this.users = response;
      this.isLoading = false
    })
  }

}
