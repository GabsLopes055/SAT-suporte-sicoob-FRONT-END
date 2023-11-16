import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment.development';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationLDAPService {

  url = `${environment.baseUrlBackend}`;

  constructor(private message: MatSnackBar, private http: HttpClient, private service: LoginService) { }

  showMessage(msg: string, color: string) {
    this.message.open(msg, "", {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: color
    })
  }

  errorHandler(e: any): Observable<any> {
    if (e.status == 401) {
      this.showMessage("Usuário ou senha incorretos. Sua conta pode estar bloqueada", "error")
    } else if (e.status == 402) {
      this.showMessage("Usuário não incluso no grupo DCSuporte", "error")
    } else if (e.status == 404) {
      this.showMessage("Usuário não encontrado", "error")
    } else {
      this.showMessage("Erro interno do servidor.", "error")
    }
    return EMPTY;
  }

  public authenticationLDAP(username: string, password: string): Observable<any> {

    return this.http.post(this.url + "/authenticationLDAP", { username, password }, { responseType: 'text' }).pipe(
      map((response) =>
        this.service.setTokenLocalStorage(response),
        sessionStorage.setItem('login', username)),

      catchError((e) => this.errorHandler(e)
      ))

  }
}
