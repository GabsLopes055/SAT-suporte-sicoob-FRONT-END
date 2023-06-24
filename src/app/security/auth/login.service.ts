import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private userLogin: any;

  constructor(private message: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.message.open(msg, "X", {
      duration: 8000,
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

  public login(username: string, password: string): Observable<any> {

    const url = `${environment.baseUrlBackend}/login`

    return this.http.post(url, { username, password }, { responseType: 'json' }).pipe(
      map((obj) => this.setTokenLocalStorage(obj), sessionStorage.setItem('login', username)),
      catchError((e) => this.errorHandler(e))
    )
  }

  public getToken(): string | null {
    return sessionStorage.getItem(environment.token)
  }

  public getexpirationDate(): any | null {
    return sessionStorage.getItem(environment.expirationDate)
  }

  public removerTokenLocalStorage(): void {
    sessionStorage.removeItem(environment.token);
    sessionStorage.removeItem(environment.expirationDate)
    sessionStorage.removeItem('login')
  }

  private setTokenLocalStorage(response: any): any {

    const token = response['token'];

    const expiration = new Date().getTime() + 2000000;

    sessionStorage.setItem(environment.token, token);
    sessionStorage.setItem(environment.expirationDate, expiration.toLocaleString());

  }


}
