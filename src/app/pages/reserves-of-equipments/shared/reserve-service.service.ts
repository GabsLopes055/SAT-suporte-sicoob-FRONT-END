import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, map, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { reserve } from 'src/app/interfaces/reserve.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReserveServiceService {

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


  listAllReserve(): Observable<reserve[]> {
    return this.http.get<reserve[]>(this.url + "/reserveOfSecondFloor").pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }

  finalizeReservation(cdReserve: number): Observable<reserve> {
    return this.http.put<reserve>(this.url + "/reserveOfSecondFloor/" + cdReserve, cdReserve).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )
  }

}
