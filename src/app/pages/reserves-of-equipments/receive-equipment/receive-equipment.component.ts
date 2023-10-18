import { Component } from '@angular/core';

@Component({
  selector: 'app-receive-equipment',
  templateUrl: './receive-equipment.component.html',
  styleUrls: ['./receive-equipment.component.css']
})
export class ReceiveEquipmentComponent {

  isLoading: boolean = true

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isLoading = false
  }

}
