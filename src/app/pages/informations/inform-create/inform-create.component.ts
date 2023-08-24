import { Component } from '@angular/core';

@Component({
  selector: 'app-inform-create',
  templateUrl: './inform-create.component.html',
  styleUrls: ['./inform-create.component.css']
})
export class InformCreateComponent {

  isLoading: boolean = true

  selectedFile: any = null;

  constructor() {
    this.isLoading = false
  }


  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] as File;
  }


}
