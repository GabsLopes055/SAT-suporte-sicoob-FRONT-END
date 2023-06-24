import { Component } from '@angular/core';
import { MyInformationService } from '../shared/my-information.service';
import { User } from 'src/app/interfaces/model.user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.css']
})
export class MyInformationComponent {
  
  constructor(private myInformation: MyInformationService, private location: Location){}


  user!: User;

  ngOnInit(): void {
    this.listMyInformation()
  }

  listMyInformation() {
    return this.myInformation.listUserByUserName().subscribe(user => {
      this.user = user
    })
  }

  cancel() {
    this.location.back()
  }

}
