import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MyInformationService {

  constructor(private http: HttpClient, private message: MatSnackBar) { }


  showMessage(msg: string): void {
    this.message.open(msg, "", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['blue-snackbar']
    });
  }

  errorHandler(e: any): Observable<any> {
    if (e.status == 400) {
      this.showMessage("Senha incorreta.")
    } else if (e.status == 401) {
      this.showMessage("Usuário Desativado. Peça para um de nossos administradores permitir a sua entrada.")
    } else if (e.status == 404) {
      this.showMessage("Usuário não encontrado.")
    } else if (e.status == 500) {
      this.showMessage("Erro interno do servidor.")
    }
    // console.log()
    return EMPTY;
  }

  public listUserByUserName(): Observable<User> {

    const username = this.getUsernameSessionStorage();

    const url = `${environment.baseUrlBackend}/users/username/${username}`;

    return this.http.get<User>(url).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public resetPasswordByUser(passwordRequest: any): Observable<string> {
    
    const username = this.getUsernameSessionStorage();

    const url = `${environment.baseUrlBackend}/users/password/${username}`;

    return this.http.put<any>(url, passwordRequest).pipe(
      map((response) => response),
      catchError((e) => this.errorHandler(e))
    )

  }

  public getUsernameSessionStorage(): string | null {
    return sessionStorage.getItem('login');
  }


}
