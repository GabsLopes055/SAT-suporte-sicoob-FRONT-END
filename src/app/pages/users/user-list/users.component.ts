import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/model.user';
import { UserServiceService } from '../shared/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(
    private service: UserServiceService
  ) { }


  indices: string[] = ['cdUser', 'name', 'username', 'email', 'status', 'action'];

  users!: User[];

  ngOnInit(): void {

    this.listAllUsers();
  }

  editUser(idUser: number) {
    alert(idUser)
  }
  
  listAllUsers(): any {
    this.service.listAllUsers().subscribe((response) => {
      this.users = response;
    })
  }

}
