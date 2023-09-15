import { Component } from '@angular/core';

@Component({
  selector: 'app-automation-list',
  templateUrl: './automation-list.component.html',
  styleUrls: ['./automation-list.component.css']
})
export class AutomationListComponent {

  isLoading: boolean = true

  constructor() {
    this.isLoading = false
  }

}
