import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY, map, catchError } from 'rxjs';
import { sms } from 'src/app/interfaces/sms.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SmsServiceService {

  constructor(private http: HttpClient, private message: MatSnackBar) { }

  showMessage(msg: string): void {
    this.message.open(msg, "X", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['blue-snackbar']
    });
  }

  // else if (e.status == 401) {
  //   this.showMessage("Usuário Desativado. Peça para um de nossos administradores permitir a sua entrada.")
  // } else if (e.status == 404) {
  //   this.showMessage("Usuário não encontrado.")

  errorHandler(e: any): Observable<any> {
    if (e.status == 400) {
      this.showMessage('Preencha o formulário corretamente !')
    } else if (e.status == 500) {
      this.showMessage("Erro interno do servidor.")
    }
    // console.log()
    return EMPTY;
  }

  public listAllSms(): Observable<sms[]> {

    const url = `${environment.baseUrlBackend}/sendsms`;

    return this.http.get<sms[]>(url).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public sendSMS(sms: sms): Observable<sms> {

    const url = `${environment.baseUrlBackend}/sendsms`;

    return this.http.post<sms>(url, sms).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

}
