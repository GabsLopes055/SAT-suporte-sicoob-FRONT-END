import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, map, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { equipments } from 'src/app/interfaces/equipments.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EquipmentsService {

  url = `${environment.baseUrlBackend}`

  constructor(
    private http: HttpClient,
    private message: MatSnackBar
  ) { }

  showMessage(msg: string, color: string): void {
    this.message.open(msg, "", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: color
    });
  }

  errorHandler(e: any): Observable<any> {
    if (e.status == 400) {
      this.showMessage('Preencha o formulário corretamente !', "secondary")
    } else if (e.status == 500) {
      this.showMessage("Erro interno do servidor.", "error")
    }
    // console.log()
    return EMPTY;
  }


  listAllEquipments(): Observable<equipments[]> {
    return this.http.get<equipments[]>(this.url + "/equipmentOfSecondFloor").pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }
}
