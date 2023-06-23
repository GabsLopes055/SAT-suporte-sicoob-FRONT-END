import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-information',
  templateUrl: './my-information.component.html',
  styleUrls: ['./my-information.component.css']
})
export class MyInformationComponent {
  cardWidth: number = 100; // Largura inicial do card em porcentagem (100%)
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Atualize a largura do card com base no zoom atual do navegador
    this.cardWidth = window.innerWidth / 10; // Ajuste o valor 10 para a escala de ajuste desejada
  }
}
